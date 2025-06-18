import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { food_list } from "../assets/frontend-assets/assets";
import toast from "react-hot-toast";

//created context using createContext() Hook
export const AppContext = createContext()

// Create provider fn, that receives parameter children and  return ContextProvider tag. 
// Pass children inside this tag
// pass variable, fn inside value for global state management
export const AppContextProvider = ({children}) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate()
    const [user, setUser] = useState( null )
    // const [isSeller, setIsSeller] = useState(false)
    const [isSeller, setIsSeller] = useState(true)
    const [ showUserLogin, setShowUserLogin ] = useState(false) // Shows User Login Form
    const [cart, setCart] = useState({})
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState({})

    // Fetch All Products
    const fetchProducts = async () => {
        setProducts(food_list)
    }

    // Add Product To Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cart)
        if(cartData[itemId]){
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1
        }
        setCart(cartData)
        toast.success("Added To Cart")
    }
    // Update Cart Item Quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cart);
        cartData[itemId] = quantity;
        setCart(cartData)
        toast.success("Cart Updated")
    }

    // Remove Product from Cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cart);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed From Cart")
        setCart(cartData)
    }

    useEffect( ()=> {
        fetchProducts()
        // console.log(food_list)
    }, [])
    
    // Get Cart Item Count
    const getCartCount = () => {
        let totalCount = 0
        for( const item in cart ){
             totalCount += cart[item]
        }
        return totalCount; 
    }
    // Get Cart Total Amount
    const getCartAmount = () => {
        let totalAmount = 0
        for( const items in cart ){
            let itemInfo = products.find( (product)=> product._id === items )
            if(cart[items] > 0 ){
                totalAmount += itemInfo.price * cart[items]
            }
        }
        return Math.floor(totalAmount * 100 ) / 100;
    }
        

    const value = { navigate, user, setUser, isSeller, setIsSeller, cart, setCart, showUserLogin, setShowUserLogin,
        products, currency, addToCart, updateCartItem, removeFromCart, searchQuery, setSearchQuery, getCartAmount, 
        getCartCount, 
     }

    return <AppContext.Provider value={value}> 
            {children}
         </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}

