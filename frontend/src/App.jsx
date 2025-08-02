import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import MyOrders from './pages/MyOrders'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import AddAddress from './pages/AddAddress'
import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'
import AddProduct from './pages/seller/AddProduct'
import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'
import DineIn from './pages/DineIn'
import LoginDine from './components/LoginDine'
import DineOrders from './pages/DineOrders'
import AdminDineOrders from './pages/seller/AdminDineOrders'
import DineOrdersStatus from './pages/DineOrdersStatus'

const App = () => {

    const isSellerPath = useLocation().pathname.includes("seller") // checks whether seller contains in URL path
    const isDinePath = useLocation().pathname.includes("dine") 
    const { isSeller, showUserLogin, showDineUserLogin } = useAppContext()
    
  return (
    <div>
      { isSellerPath || isDinePath ? null : <Navbar/> }
      { showUserLogin ? <Login/> : null }
      { showDineUserLogin ? <LoginDine/> : null }

      <Toaster />
      
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dine-in' element={<DineIn/>}/>
          <Route path='/dine-order' element={<DineOrders/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/all-menu' element={<AllProducts/>} />
          <Route path='/menu/:category' element={<ProductCategory />} />
          <Route path='/menu/:category/:id' element={<ProductDetails />} />
          <Route path='/add-address' element={<AddAddress />}/>
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='/dine-orders' element={<DineOrdersStatus/>} />
          <Route path='/seller' element={ isSeller ? <SellerLayout/> : <SellerLogin/> }>
              <Route index element={ isSeller ? <AddProduct/> : null } />
              <Route path='product-list' element={<ProductList/>} />
              <Route path='orders' element={<Orders/>}/>
              <Route path='dineorders' element={<AdminDineOrders/>}/>
          </Route>
        </Routes>
      </div>

      {/* { !isSellerPath && <Footer/> } */}
            { isSellerPath || isDinePath ? null : <Footer/> }

    </div>
  )
}

export default App