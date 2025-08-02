import { useEffect, useState } from "react"
import { assets } from "../assets/frontend-assets/assets"
import { assets1 } from "../assets/assets1"
import { NavLink } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import toast from "react-hot-toast" 

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { navigate, user, setUser, setShowUserLogin, searchQuery, setSearchQuery, getCartCount, axios } = useAppContext()

    const logout = async () => {
        try {
            const { data } = await axios.get('/api/user/logout')
            if( data.success ){
                toast.success(data.message)
                setUser(null)
                navigate('/')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect( ()=>{
        if( searchQuery.length > 0 ){
            navigate('/all-menu')
        }
    }, [searchQuery] )

    // Language 
    const { t, i18n  } = useAppContext()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={ ()=> setOpen(false) }>
                <img className="h-24 -mb-4 -mt-4" src={assets.logo} alt="logo" />
            </NavLink>
            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/" className="hover:text-green-600">Home</NavLink>
                <NavLink to="/about" className="hover:text-green-600">About</NavLink>
                <NavLink to="/all-menu" className="hover:text-green-600">Menu</NavLink>
                {/* <NavLink to="/gallery" className="hover:text-green-600">Gallery</NavLink> */}
                <NavLink to="/contact" className="hover:text-green-600">Contact</NavLink>
                {/* <NavLink to="/language" className="hover:text-green-600">Language</NavLink> */}
                <select defaultValue="en" onClick={(e)=> changeLanguage(e.target.value)} className="border-0 outline-0">
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
                 {/* <!-- Navigation --> */}

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={ (e)=> setSearchQuery(e.target.value) } className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Menu" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div onClick={()=> navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets1.nav_cart_icon} alt="cart" className="w-6 h-6"/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-button w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div> 

                {/* <button className="cursor-pointer px-3 py-2 bg-button hover:bg-button-hover transition text-white rounded-full">
                    Order Now
                </button> */}
                {/* <button className="cursor-pointer px-8 py-2 bg-button hover:bg-button-hover transition text-white rounded-full">
                    Language
                </button> */}
               {!user ? ( <button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-button hover:bg-button-hover transition text-white rounded-full">
                    Login
                </button>) : (
                    <div  className='relative group'>
                    <img src={assets1.profile_icon} className='w-10' alt=""  />
                    <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border
                    border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                        <li onClick={()=>navigate('/my-orders')} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My  Orders</li>
                        <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                    </ul>
                </div>
                )}
            </div>
            <div className="flex items-center gap-6 sm:hidden">
                <div onClick={()=> navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets1.nav_cart_icon} alt="cart" className="w-6 h-6"/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-button w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div> 
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu">
                {/* Menu Icon SVG */} 
                <img src={assets1.menu_icon} alt="menu" />
                </button>
            </div>

            {/* Mobile Menu */}
           {
            open && 
           (<div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-5 px-5 text-md md:hidden z-40`}>
                <NavLink to="/" onClick={ ()=> setOpen(false) }>Home</NavLink>
                <NavLink to="/about" onClick={ ()=> setOpen(false) }>About</NavLink>
                <NavLink to="/all-menu" onClick={ ()=> setOpen(false) }>Menu</NavLink>
                {/* <NavLink to="/gallery" onClick={ ()=> setOpen(false) }>Gallery</NavLink> */}
                <NavLink to="/contact" onClick={ ()=> setOpen(false) }>Contact</NavLink>
                {/* <NavLink to="/language" onClick={ ()=> setOpen(false) }>Language</NavLink> */}
                <select defaultValue="en" onClick={(e)=> changeLanguage(e.target.value)} className="border-0 outline-0">
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
                {
                    user && <NavLink to="/my-orders" onClick={ ()=> setOpen(false) }>My Orders</NavLink>
                }
                
                <button onClick={ ()=> setOpen(false) } className="cursor-pointer px-3 py-2 bg-button hover:bg-button-hover transition text-white rounded-full">
                    Order Now
                </button>
                {
                    !user ? (
                        <button onClick={ ()=> {
                            setOpen(false);
                            setShowUserLogin(true)
                            } } className="cursor-pointer px-6 py-2 mt-2 bg-button hover:bg-button-hover transition text-white rounded-full text-sm">
                            Login
                        </button>
                    ) : (
                        <button onClick={ ()=> {
                            setOpen(false);
                            logout
                            } } className="cursor-pointer px-6 py-2 mt-2 bg-button hover:bg-button-hover transition text-white rounded-full text-sm">
                            Logout
                        </button>
                    )
                }
            </div>)}
        </nav>
    )
}
export default Navbar