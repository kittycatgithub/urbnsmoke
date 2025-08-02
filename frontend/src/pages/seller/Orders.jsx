import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets1, dummyOrders } from "../../assets/assets1";
import toast from "react-hot-toast";

const Orders = () => {
    const {currency, axios} = useAppContext()
    const boxIcon = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg"
    const [orders, setOrders] = useState([])
    const fetchOrders = async ()=> {
        try {
            const { data } = await axios.get('/api/order/seller')
            if( data.success ){
                setOrders(data.orders)
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
            const { data } = await axios.put('/api/order/status', {
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
        } catch (error) {
            toast.error(error.message) 
        }
    }

    useEffect( ()=> {
        fetchOrders()
    }, [] )
    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
        <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>
            {orders.map((order, index) => (
                <div key={index} className="flex flex-col md:items-center md:flex-row gap-5
                justify-between p-5 max-w-5xl rounded-md border border-gray-300">
                    <div className="flex gap-5 max-w-80">
                        <div >
                            {order.items.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <img className="w-16 h-16 object-cover mb-4" src={`${import.meta.env.VITE_BACKEND_URL}/products/${item.product.image}` }  alt="boxIcon" />
                                    <p className="font-medium">
                                        {item.product.name} 
                                        <span className="text-button"> x {item.quantity}</span>
                                    </p>
                                <p className="font-medium text-lg my-auto">{currency} {order.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm md:text-base text-black/60">
                        <p className='text-black/80'>
                        {order.address.firstName} {order.address.lastName}</p>
                        <p>{order.address.street}, {order.address.city}</p>
                        <p> {order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                        <p></p>
                        <p>{ order.address.phone }</p>
                    </div>
                    <div className="flex flex-col text-sm md:text-base text-black/60">
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
                            <option value="Out For Delivery">Out For Delivery</option>
                            <option value="Food Delivered">Food Delivered</option>
                        </select>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
       </div>
    );
};
export default Orders