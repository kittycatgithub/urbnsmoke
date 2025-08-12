import React, { useEffect, useState } from "react";
import { assets1 } from "../assets/assets1";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const DineOrdersBar = () => {
    const {getDineCartCount, getDineCartAmount, currency, navigate, axios, dineCart, setDineCart ,dineUser, products } = useAppContext()
    const [cartArray, setCartArray] = useState([])
    const getCart = (item) => {
        let tempArray = []
        for(const key in dineCart){
          const product = products.find( (item)=> item._id === key)
          product.quantity = dineCart[key]
          tempArray.push(product)
        }
        setCartArray(tempArray)
      }
    useEffect( ()=> {
      getCart()
    }, [] )
    console.log(dineUser)

    const placeOrder = async () => {
      try {
          const {data} = await axios.post('/api/dineorder/cod', { 
            userId: dineUser._id,
            name: dineUser.name,
            mobile: dineUser.mobile,
            items: cartArray.map( item => ({product: item._id, quantity: item.quantity})),
            })
          if(data.success){
            toast.success(data.message)
            setDineCart({})
            navigate('/dine-orders')
          } else {
              toast.error(data.message)
              console.log(user._id,  "User ID")
          }
      } catch (error) {
        toast.error("Login To Continue")
            console.log(error.message)
      }
    }

  return (
    // <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md flex justify-between items-center p-4 md:hidden z-50">
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md flex justify-between items-center px-4 py-1 z-50">
      <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col">
        <div className="flex items-center gap-6">
                      <div onClick={()=> navigate('/cart')} className="relative cursor-pointer">
                          <img src={assets1.nav_cart_icon} alt="cart" className="w-6 h-6"/>
                          <button className="absolute -top-2 -right-3 text-xs text-white bg-button w-[18px] h-[18px] rounded-full">{getDineCartCount()}</button>
                          {/* <button className="absolute -top-2 -right-3 text-xs text-white bg-button w-[18px] h-[18px] rounded-full">2</button> */}
                      </div> 
                      <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu">
                      </button>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-xs">Total Amount</span>
        <span className="text-lg font-semibold text-gray-800">{currency} {getDineCartAmount()}</span>
      </div>
      </div>
      
      <button
        className="bg-button text-white px-4 py-2 rounded font-medium active:scale-95 transition"
        onClick={() => {placeOrder();          
        } }
      >
        Place Order
      </button>
    </div>
  );
};

export default DineOrdersBar;
