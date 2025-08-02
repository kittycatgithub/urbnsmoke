import DineOrder from "../models/DineOrder.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Razorpay from 'razorpay'
import crypto from 'crypto'

// global variables 
const currency = 'inr'
const deliveryCharge = 50

// gateway initialize
const razorpayInstance = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_KEY_SECRET
})

// // Place Order COD : /api/order/cod
// export const placeOrderCOD = async (req , res ) => {
//     try {
//         const {userId, items, address } = req.body;
//         if(!address || items.length === 0 ){
//             return res.json({ success: false, message: "Invalid Data"  })
//         } 
//         // Calculate Amount Using Items
//         let amount = await items.reduce(async (acc, items)=> {
//             const product = await Product.findById(items.product);
//             return ( await acc ) + product.price * items.quantity;  
//         }, 0 )

//         // Add Delivery Charges( SR 50 )
//         amount += Math.floor(50)

//         // Add Tax Charge(2% )
//         // amount += Math.floor(amount* 0.02)
//         await Order.create({
//             userId, 
//             items, 
//             amount, 
//             address, 
//             paymentType: "Online",
//         })
//         // await Order.create({
//         //     userId, 
//         //     items, 
//         //     amount, 
//         //     address, 
//         //     paymentType: "COD",
//         // })
//         return res.json({ success: true, message: "Order Placed Successfully" })

//     } catch (error) {
//         console.log(error.message)
//         return res.json({ success: false, message: error.message })
//     }
// }

// Place Order Razorpay : /api/order/cod
export const placeOrderCOD = async (req , res) => {
    try {
        const {userId, items, address } = req.body;
        if(!address || items.length === 0 ){
            return res.json({ success: false, message: "Invalid Data"  })
        } 
        // Calculate Amount Using Items
        let amount = await items.reduce(async (acc, items)=> {
            const product = await Product.findById(items.product);
            return ( await acc ) + product.price * items.quantity; 
        }, 0 )

        // Add Delivery Charges( SR 50 )
        amount += Math.floor(50)
        amount = amount*100

        // Add Tax Charge(2% )
        // amount += Math.floor(amount* 0.02)
       const orderData =  {
            userId, 
            items, 
            amount, 
            address, 
            paymentType: "Online",
            paymentMethod: "Razorpay"
        }
        const newOrder = new Order(orderData)
        // await newOrder.save() 
        
        // await Order.create({
        //     userId, 
        //     items, 
        //     amount, 
        //     address, 
        //     paymentType: "COD",
        // })

        const options = {
            amount,
            currency : currency.toUpperCase(),
            receipt : newOrder._id.toString()   
        }
        await razorpayInstance.orders.create(options, (error, order)=> {
            if(error){
                console.log(error)
                return res.json({ success: false, message: error.message })
            }
            return res.json({ success: true, order, message: "Razorpay order created" });
        })
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}

export const verifyRazorpay = async (req,res) => {
    try {
        // const { userId, razorpay_order_id } = req.body
        const {
            userId,
            items,
            address,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = req.body;

        // Step 1: Verify Razorpay signature
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.json({ success: false, message: "Payment verification failed" });
        }

        // Step 2: Calculate amount securely again
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return (await acc) + product.price * item.quantity;
        }, 0);

        amount += 50;
        const order = new Order({
            userId,
            items,
            address,
            amount,
            paymentType: "Online",
            paymentMethod: "Razorpay",
            payment: true,
            razorpay_order_id,
            razorpay_payment_id,
        });

        await order.save();

        return res.json({ success: true, message: "Payment verified, order created" });
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message });
    }
}

// Update Order by User ID : /api/order/status
export const updateOrder = async ( req, res )=> {
    try {
        const { orderId, status } = req.body;
        const order = await Order.findByIdAndUpdate(
            orderId,
            
            
            {status : status}
        )
        return res.json({ success: true, order ,  message: "Order Updated Successfully" })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}
// Update Dine Order by User ID : /api/order/dinestatus
export const updateDineOrder = async ( req, res )=> {
    try {
        const { orderId, status } = req.body;
        const dineorder = await DineOrder.findByIdAndUpdate(
            orderId,
            {status : status}
        )
        return res.json({ success: true,dineorder ,  message: "Order Updated Successfully" })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}

// Get Orders by User ID : /api/order/user
export const getUserOrders = async (req , res ) => {
     try {
        const {userId} = req.body;
        const orders = await Order.find({
            userId,
            // $or: [{paymentType: "COD"}, {isPaid: true}]
            $or: [{paymentType: "Online"}, {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1})

        return res.json({ success: true, orders , message: "Orders Fetched Successfully"})

     } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })  
     }
}

// Get All Orders ( for seller / admin ) : /api/order/seller
export const getAllOrders = async (req , res ) => {
     try {
        const orders = await Order.find({
            // $or: [{paymentType: "COD"}, {isPaid: true}]
            $or: [{paymentType: "Online"}, {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1})

        return res.json({ success: true, orders })

     } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })  
     }
}
// Get All Dine Orders ( for seller / admin ) : /api/order/seller
export const getAllDineOrders = async (req , res ) => {
     try {
        const dineorders = await DineOrder.find({
            // $or: [{paymentType: "COD"}, {isPaid: true}]
            $or: [{paymentType: "Online"}, {isPaid: true}]
        }).populate("items.product").sort({createdAt: -1})

        return res.json({ success: true, dineorders })

     } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })  
     }
}