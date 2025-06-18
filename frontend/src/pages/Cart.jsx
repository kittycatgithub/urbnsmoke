import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { assets1, dummyAddress } from "../assets/assets1"

const Cart = () => {
    const { products, currency, cart, removeFromCart, getCartCount, 
      updateCartItem, navigate, getCartAmount } = useAppContext()
      const [cartArray, setCartArray] = useState([])
      const [addresses, setAddresses] = useState(dummyAddress)
      const [showAddress, setShowAddress] = useState(false)
      const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0])
      const [paymentOption, setPaymentOption] = useState("Online")

      const getCart = (item) => {
        let tempArray = []
        for(const key in cart){
          const product = products.find( (item)=> item._id === key)
          product.quantity = cart[key]
          tempArray.push(product)
        }
        setCartArray(tempArray)
      }
      useEffect(()=> {
        if(products.length > 0 && cart ){
          getCart()
        }
      }, [products, cart])

      const placeOrder = async () => {

      }

    return products.length > 0 && cart ? (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-button">{getCartCount()} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div onClick={ ()=>{
                              navigate(`/menu/${product.category.toLowerCase()}`);
                              scrollTo(0,0)
                            } } className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.image} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    {/* <p>Size: <span>{product.size || "N/A"}</span></p> */}
                                    <div className='flex items-center'>
                                        <p>Qty: { cart[product._id] }</p>
                                        {/* <select  className='outline-none'>
                                            {Array(cart[product._id] > 9 ? cart[product._id] : 9 ).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <p className="text-center">${product.offerPrice * product.quantity}</p> */}
                        <p className="text-center">{currency} {product.price * product.quantity}</p>
                        <button onClick={ ()=> removeFromCart(product._id) } className="cursor-pointer mx-auto">
                            <img src={assets1.remove_icon} alt="remove" className="inline-block w-6 h-6" />
                        </button>
                    </div>)
                )}

                <button onClick={ ()=> {
                  navigate('/all-menu');
                  scrollTo(0,0)
                } } className="group cursor-pointer flex items-center mt-8 gap-2 text-button font-medium">
                    <img className="group-hover:-translate-x-1 transition" src={assets1.arrow_right_icon_colored} alt="arrow" />
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">{ selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}` : "No address found" }</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-button hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                               {addresses.map( (address, index)=> (
                                <p onClick={() => {
                                  setSelectedAddress(address);
                                  setShowAddress(false);

                                }} className="text-gray-500 p-2 hover:bg-gray-100">
                                    {address.street}, {address.city}, {address.state}, {address.country}
                                </p>
                               ) ) }
                                <p onClick={() => {
                                  setShowAddress(false);
                                   navigate('/add-address');
                                  //  scrollTo(0,0)                                  
                                  }} className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={ (e)=> setPaymentOption(e.target.value) } className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        {/* <option value="COD">Cash On Delivery</option> */}
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency} {getCartAmount()}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency} {getCartAmount()* 2 / 100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>
                          {currency} { getCartAmount() + getCartAmount()* 2 / 100 }</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-green-500 text-white font-medium hover:bg-green-700 transition">
                    Proceed To CheckOut
                </button>
            </div>
        </div>
    ): null
}
export default Cart