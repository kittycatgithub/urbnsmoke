import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { food_list } from "../assets/frontend-assets/assets";
import toast from "react-hot-toast";
import axios from 'axios'
// Language Translation
import '../i18n'
import { useTranslation } from 'react-i18next'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

//created context using createContext() Hook
export const AppContext = createContext()

// Create provider fn, that receives parameter children and  return ContextProvider tag. 
// Pass children inside this tag
// pass variable, fn inside value for global state management
export const AppContextProvider = ({children}) => {
    // Language Translation
    const { t, i18n } = useTranslation()

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate()
    const [user, setUser] = useState( null )
    // const [isSeller, setIsSeller] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [ showUserLogin, setShowUserLogin ] = useState(false) // Shows User Login Form
    const [cart, setCart] = useState({})
    const [dineCart, setDineCart] = useState({})
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState({})
    const [ showDineUserLogin, setShowDineUserLogin ] = useState(false) // Shows User Login Form
        const [ showBill, setShowBill ] = useState(false)


    // Fetch Seller Status
    const fetchSeller = async () => {
        try {
            const { data } = await axios.get('/api/seller/is-auth')
            if(data.success){
                setIsSeller(true)
            } else {
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }

    // Fetch User Auth Status, User Data and Cart Items
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/is-auth');
            if( data.success ){
                setUser( data.user )
                setCart(data.user.cart)
            }
        } catch (error) {
            setUser(null)
        }
    }
    // Fetch All Products
    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('/api/product/list') 
            if( data.success ){
                setProducts(data.products)
                // toast.success("Data Fetched Successfully")
            } else {
                toast.error(data.message)
            }
        } catch (error) {
             toast.error(error.message)
        }
    }

    // Add Product To Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cart)
        console.log(cartData, cart)
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

    // Add Product to Dine Cart

    const addToDineCart = (itemId) => {
        let dineCartData = structuredClone(dineCart)
        if(dineCartData[itemId]){
            dineCartData[itemId] += 1
        } else {
            dineCartData[itemId] = 1
        }
        setDineCart(dineCartData)
        console.log(dineCart)
        toast.success("Added To Cart")
    }

    // Remove Product from Cart
    const removeFromDineCart = (itemId) => {
        let dineCartData = structuredClone(dineCart);
        if(dineCartData[itemId]){
            dineCartData[itemId] -= 1;
            if(dineCartData[itemId] === 0){
                delete dineCartData[itemId];
            }
        }
        toast.success("Removed From Cart")
        setDineCart(dineCartData)
    }


    useEffect( ()=> {
        fetchUser()
        fetchSeller()
        fetchProducts()
        // console.log(food_list)
    }, [])

    // Update Database Cart Items
    useEffect( ()=> {
        const updateCart = async () => {
            try {
            const { data } = await axios.post('/api/cart/update' , {cart})
            if(!data.success ){
                toast.error(data.message)
            } 
            } catch (error) {
                toast.error(error.message)
            }
        }
        if(user){
            updateCart()
        }
    }, [cart] )
    
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
    // Get dineCart Item Count
    const getDineCartCount = () => {
        let totalCount = 0
        for( const item in dineCart ){
             totalCount += dineCart[item]
        }
        return totalCount; 
    }
    // Get Cart Total Amount
    const getDineCartAmount = () => {
        let totalAmount = 0
        for( const items in dineCart ){
            let itemInfo = products.find( (product)=> product._id === items )
            if(dineCart[items] > 0 ){
                totalAmount += itemInfo.price * dineCart[items]
            }
        }
        return Math.floor(totalAmount * 100 ) / 100;
    }
    
    const value = { navigate, user, setUser, isSeller, setIsSeller, cart, setCart, showUserLogin, setShowUserLogin,
        products, currency, addToCart, updateCartItem, removeFromCart, searchQuery, setSearchQuery, getCartAmount, 
        getCartCount, axios, fetchProducts, t, i18n, dineCart,setDineCart, addToDineCart, removeFromDineCart, getDineCartCount,
        getDineCartAmount, showDineUserLogin, setShowDineUserLogin,  showBill, setShowBill 
     }

    return <AppContext.Provider value={value}> 
            {children}
         </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}

