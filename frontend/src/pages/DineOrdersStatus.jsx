import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets1'
import toast from 'react-hot-toast'

const DineOrdersStatus = () => {
    const [myOrders, setMyOrders] = useState([])
    const { currency, axios, dineUser, setDineUser } = useAppContext()
    // console.log(dineUser)

    const fetchMyOrders = async () =>  {
      try {
        const { data } = await axios.post('/api/dineorder/user', { userId: dineUser._id })
        if( data.success ){
          setMyOrders(data.orders)
          // toast.success(data.message)
        } else {
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
    useEffect( ()=> {
      if( dineUser ){
         fetchMyOrders()
      }
    },[dineUser] )

  // Code for counting time left

  const [timeLeft, setTimeLeft] = useState({}); // { orderId: millisecondsLeft }

  // Fetch orders once on mount and start polling
  useEffect(() => {
    // fetchMyOrders();
    const interval = setInterval(fetchMyOrders, 10000); // poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Compute initial time left for each order when orders arrive
  // Compute timeLeft based on order status and createdAt
  useEffect(() => {
    const calculateTimeLeft = () => {
      const updated = {};
      myOrders.forEach((order) => {
        const orderCreated = new Date(order.createdAt).getTime();

        if (order.status === "Food is being prepared") {
          const prepDeadline = orderCreated + 15 * 60 * 1000;
          const remaining = prepDeadline - Date.now();
          updated[order._id] = remaining > 0 ? remaining : 0;
        } else if (order.status === "Out For Delivery") {
          const deliveryDeadline = orderCreated + 25 * 60 * 1000; // 15 prep + 25 delivery
          const remaining = deliveryDeadline - Date.now();
          updated[order._id] = remaining > 0 ? remaining : 0;
        }
      });
      setTimeLeft(updated);
    };

    calculateTimeLeft();
  }, [myOrders]);


  // Update timeLeft every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((orderId) => {
          updated[orderId] = Math.max(updated[orderId] - 1000, 0);
        });
        return updated;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);


    const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className='mb-16 mt-2 max-w-7xl mx-auto'>
      <div className='flex flex-col items-end w-max mb-8 px-4 md:px-0'>
          <p className='text-2xl font-medium'>MyOrders</p>
          <div className='w-16 h-0.5 bg-button rounded-full'></div>
      </div>
      {
         myOrders.map( (order, index) => (
          <div key={index} className='border border-gray-400 rounded-lg mb-1 p-4 py-5 max-w-5xl'>
            <p className='flex justify-between md:items-center text-gray-700
            md:font-medium max-md:flex-col'>
              <span>OrderId : {order._id}</span>
              <span>Payment : {order.paymentType}</span>
              <span>Total Amount : {currency} {order.amount}</span>
            </p>
            { order.items.map( (item, index )=>(
              <div key={index} className={`relative bg-white text-gray-500/70 ${
                order.items.length !== index + 1 && "border-b"
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4
              py-5 md:gap-5 w-full max-w-5xl`}>
                <div className='flex items-center mb-4 md:mb-0 max-w-sm'>
                  <div className='bg-primary/10 rounded-lg'>
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/products/${item.product.image}` } alt="" className='w-16 h-16' />
                  </div>
                  <div className='ml-4'>
                    <h2 className='text-xl font-medium text-gray-800'>{ item.product.name }</h2>
                    <p>Category: {item.product.category}</p>
                  </div>
                </div>
                <div className="mt-4">
          </div>
                <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0 text-gray-900'>
                   {order.status === "Food is being prepared" && timeLeft[order._id] > 0 ? (
                          <div className='flex flex-row items-end'>
                                <img className='h-10 w-10 -ml-10' src="https://cdn-icons-gif.flaticon.com/17659/17659727.gif" alt="" />
                                <p className='text-button'>
                                    Food is being prepared<br/> Time left : {formatTime(timeLeft[order._id])}
                                </p>
                          </div>
                          ) : order.status === "Out For Delivery" && timeLeft[order._id] > 0 ? (
                            <div className='flex flex-row items-end'>
                              <img className='h-10 w-10 -ml-12 mr-2' src="https://cdn-icons-png.flaticon.com/128/9425/9425742.png" alt="" />
                            <p className="text-button">
                              Out for delivery<br/>
                              Time left : {formatTime(timeLeft[order._id])}
                            </p>
                            </div>
                          ) :  (
                            <div className='flex flex-row items-end'>
                              <img className='h-10 w-10 -ml-12 mr-2' src="https://cdn-icons-png.flaticon.com/128/9425/9425742.png" alt="" />
                            <p className="text-button">
                              {order.status}
                            </p>
                            </div>
                          )
                          }
                  {/* <p className='text-button'>  {order.status}</p> */}
                  
                  <p >Quantity: {item.quantity || "1"}</p>
                  <p >Date: {new Date(order.createdAt).toLocaleDateString('en-GB')}</p>
                </div>
                <p className='text-gray-500 text-lg font-medium'>
                    {/* Amount: {currency} {item.product.offerPrice * item.quantity} */}
                    Amount: {currency} {item.product.price * item.quantity}
                </p>
              </div>
            ) ) }
          </div>
        ) )
      }
      
    </div>
  )
}

export default DineOrdersStatus