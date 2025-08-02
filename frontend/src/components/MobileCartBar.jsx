import React from "react";
import { assets1 } from "../assets/assets1";
import { useAppContext } from "../context/AppContext";

const MobileCartBar = () => {
    const {getDineCartCount, getDineCartAmount, currency, setShowDineUserLogin } = useAppContext()
    
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
        className="bg-button text-white px-4 py-2 rounded font-medium hover:scale-95 transition"
        onClick={() => {
          // navigate to cart page or open cart modal
          setShowDineUserLogin(true)
          // window.location.href = "/cart";
        }}
      >
        View Cart
      </button>
    </div>
  );
};

export default MobileCartBar;
