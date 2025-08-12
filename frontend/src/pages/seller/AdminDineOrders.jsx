import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets1, dummyOrders } from "../../assets/assets1";
import toast from "react-hot-toast";
import Bill from "../../components/Bill";

const AdminDineOrders = () => {
    const {currency, axios,  showBill, setShowBill } = useAppContext()
    const [orders, setOrders] = useState([])
    const [currentorders, setcurrentOrders] = useState(null)
    const [dineorders, setDineOrders] = useState([])
    const fetchOrders = async ()=> {
        try {
            const { data } = await axios.get('/api/order/seller/dine')
            if( data.success ){
                setDineOrders(data.dineorders)
                console.log(data)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)  
        }
    }

    const handleStatus = async (status, order) => {
        console.log(status, order._id)
        try {
            const { data } = await axios.put('/api/order/dinestatus', {
                orderId: order._id,
                status: status
            })
            if(data.success){
                toast.success(data.message)
                fetchOrders()
                console.log(data.message, data.order)
            } else {
                toast.error(data.message)
            }
            window.location.reload();
        } catch (error) {
            toast.error(error.message) 
        }
    }

    useEffect( ()=> {
        fetchOrders()
    }, [] )

    const generateBill = (order) => {
            //  console.log(order)
             setShowBill(true)
             setcurrentOrders(order)
    }

    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll ">
        <div className="md:p-10 p-4 space-y-4 pb-96">
            { showBill && currentorders && <Bill order={currentorders}/>}
            <h2 className="text-lg font-medium">Orders List</h2>
            {dineorders.map((order, index) => (
                <div key={index} className="flex flex-col md:items-center md:flex-row
                justify-between p-2 max-w-6xl rounded-md border border-gray-400">
                    <div className="flex max-w-80">
                        <div  >
                            {order.items.map((item, index) => (
                                <div key={index} className="flex flex-row gap-4">
                                    <img className="w-16 h-16 object-cover mb-4" src={`${import.meta.env.VITE_BACKEND_URL}/products/${item.product.image}` }  alt="boxIcon" />
                                    <div>
                                         <p>
                                        {item.product.name} 
                                        <span className="text-button"> x {item.quantity}</span>
                                    </p>
                                {/* <p className="font-medium text-lg my-auto">{currency} {order.amount}</p> */}
                                <p className="font-medium text-sm my-auto">{currency} {item.product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm md:text-base text-black">
                        {/* <p className='text-black'>
                        {order.name}</p>
                        <p>{order.mobile}</p> */}
                    </div>
                    {/* <div className="text-sm md:text-base text-black/60">
                        <p className='text-black/80'>
                        {order.address.firstName} {order.address.lastName}</p>
                        <p>{order.address.street}, {order.address.city}</p>
                        <p> {order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                        <p></p>
                        <p>{ order.address.phone }</p>
                    </div> */}
                    <div className="flex flex-col text-sm md:text-base text-black space-y-1">
                        <p>Total : {currency} {order.amount}</p>
                        <p>Method: {order.paymentType}</p>
                        <p>Date: { new Date(order.createdAt).toLocaleDateString('en-GB') }</p>
                        <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                    </div>
                    <div className="flex flex-col text-sm md:text-base text-black gap-3">
                        <h1>Status : <span className="text-button">{order.status}</span></h1>
                        <hr className="text-gray-300"/>
                        <div className="flex flex-row">
                            <h1>Update : </h1>
                        <select onChange={ (e)=> handleStatus(e.target.value, order) } className="border mx-2 border-gray-300 outline-none">
                            <option value="">Select</option>
                            <option value="Food is being prepared">Food is being prepared</option>
                            <option value="Food Placed">Food Placed</option>
                        </select>
                        </div>
                        {/* <div className="flex flex-row gap-4">
                            <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded font-medium active:scale-95 transition">
                            Cash
                          </button>
                        <button className="bg-amber-500 text-white px-4 py-2 mt-4 rounded font-medium active:scale-95 transition">
                            Online
                          </button></div>
                         */}
                        <button onClick={()=> generateBill(order)} className="bg-button text-white px-4 py-2 mt-2 rounded font-medium active:scale-95 transition">
                            Generate Bill
                          </button>
                    </div>
                </div>
            ))}
        </div>
       </div>
    );
};
export default AdminDineOrders