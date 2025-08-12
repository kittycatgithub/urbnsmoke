import DineOrder from "../models/DineOrder.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import DineUser from '../models/DineUser.js'

// Place Order COD : /api/dineorder/cod
export const placeOrderCOD = async ( req , res ) => {
    try {
        const {userId, items , name, mobile } = req.body;
        // console.log(userId)
        if( items.length === 0 ){
            return res.json({ success: false, message: "Invalid Data"  })
        } 
        // Calculate Amount Using Items
        let amount = await items.reduce(async (acc, items)=> {
            const product = await Product.findById(items.product);
            return ( await acc ) + product.price * items.quantity;  
        }, 0 )

        // Add Delivery Charges( SR 50 )
        // amount += Math.floor(50)

        // Add Tax Charge(2% )
        // amount += Math.floor(amount* 0.02)
        const existingUser = await DineUser.findById(userId)
        if( existingUser ){
            await DineOrder.create({
                userId, 
                name,
                mobile,
                items, 
                amount, 
                paymentType: "Online",
        })
        }
       
        // await Order.create({
        //     userId, 
        //     items, 
        //     amount, 
        //     address, 
        //     paymentType: "COD",
        // })
        return res.json({ success: true, message: "Order Placed Successfully" })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
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
        return res.json({ success: true,order ,  message: "Order Updated Successfully" })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}

// Get Orders by User ID : /api/dine-order/user
export const getDineUserOrders = async (req , res ) => {
     try {
        const {userId} = req.body;
        const orders = await DineOrder.find({
            userId,
            // $or: [{paymentType: "COD"}, {isPaid: true}]
            $or: [{paymentType: "Online"}, {isPaid: true}]
        }).populate("items.product").sort({createdAt: -1})

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















