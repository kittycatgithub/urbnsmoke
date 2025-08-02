import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/frontend-assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Footer = () => {

  const { isSeller, navigate } = useAppContext()

  return (
    <div>
        <footer className="bg-gray-900 text-white pt-12 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div className="space-y-4">
        <div className="flex items-center">
          <NavLink to="/">
                <img className="h-28" src={assets.logo} alt="dummyLogoColored" />
            </NavLink>
        </div>
        <p className="text-yellow-300">Texas Style Smoke House.</p>
         <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61576334605332" target='_blank' className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Facebook">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1c-1 0-1 .5-1 1v1h3l-1 3h-2v7A10 10 0 0022 12z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/urbnsmoke.sa/" target='_blank' className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Instagram">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
          </a>
          <a href="https://wa.me/966568121930" target='_blank' className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Instagram">
            <svg className='h-5 w-5' fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
          </a>
          {/* <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Twitter">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.26 4.26 0 0016.11 4c-2.36 0-4.27 1.91-4.27 4.27 0 .33.04.66.1.97C7.7 8.99 4.07 7.13 1.64 4.16a4.26 4.26 0 00-.58 2.15c0 1.48.75 2.79 1.88 3.55a4.22 4.22 0 01-1.93-.53v.05c0 2.07 1.47 3.8 3.42 4.19a4.3 4.3 0 01-1.93.07c.55 1.71 2.13 2.96 4 2.99A8.58 8.58 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 5.5a8.52 8.52 0 01-2.54.7z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="LinkedIn">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 112.5 2.5 2.5 2.5 0 01-2.5-2.5zM3 8h4v12H3zm6 0h3.8v1.75h.05a4.15 4.15 0 013.7-2.05c3.95 0 4.7 2.6 4.7 5.95V20h-4v-5.5c0-1.3-.02-3-1.85-3-1.86 0-2.15 1.45-2.15 2.9V20h-4z"/>
            </svg>
          </a> */}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
          <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
          <li><a href="/menu" className="text-gray-400 hover:text-white transition">Menu</a></li>
          <li><a href="/gallery" className="text-gray-400 hover:text-white transition">Gallery</a></li>
          <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
        </ul>
      </div>

     {/* Services  */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Information</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Cookies</a></li>
          {/* Privacy Policy
Terms of Service
Shipping Policy
Refund Policy
FAQ */}
        </ul>
      </div>

       {/* Contact  */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Info</h3>
        <address className="not-italic text-gray-200">
          <p>Abi Bakr As Siddiq Rd, An Narjis, </p>
          <p>Riyadh 13333, Saudi Arabia</p>
          <p className="mt-2">Email: <a href="mailto:info@company.com" className="hover:text-white transition">info@company.com</a></p>
          <p>Phone: <a href="tel:+966569853780" className="hover:text-white transition">+966 569853780</a></p>
        </address>
        {isSeller ? ( <button onClick={ ()=> {navigate('/seller');
          scrollTo(0,0);
          toast.success('Admin Panel Opened')
        } }  type="button" className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 active:scale-95 transition">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.13 14.652a.553.553 0 0 1-.78-.78l4.097-4.098a.552.552 0 0 1 .78.78zM5.882 6.95l-2.11 2.887s-.402-.343-1.224-.236C1.332 9.76.816 11.167.56 11.457.295 11.639-.553 9.829.555 8.16c1.872-2.815 5.327-1.21 5.327-1.21m5.169 5.168-2.887 2.11s.343.401.236 1.224c-.16 1.216-1.566 1.731-1.856 1.988-.182.265 1.629 1.112 3.295.005 2.817-1.872 1.212-5.327 1.212-5.327m5.303-6.198c.607-1.365.616-2.753-.07-3.686l.02-.02C17.375 1.145 18.129.16 17.986.018c-.142-.142-1.126.611-2.198 1.682l-.019.02c-.931-.685-2.32-.677-3.683-.071a13.3 13.3 0 0 0 1.895 2.374 13.3 13.3 0 0 0 2.373 1.898" fill="#06B6D4"/>
            <path d="M13.363 4.639a14.2 14.2 0 0 1-2.054-2.58 7 7 0 0 0-1.279 1.016c-1.314 1.314-6.163 7.728-6.163 7.728l.865.865 2.305-2.305a1.134 1.134 0 0 1 1.602 1.602L6.334 13.27l.865.865s6.414-4.849 7.728-6.163a7 7 0 0 0 1.018-1.283 14.2 14.2 0 0 1-2.582-2.05m-2.978 2.978A1.355 1.355 0 1 1 12.3 5.7a1.355 1.355 0 0 1-1.916 1.917" fill="#06B6D4"/>
        </svg>
        Seller Dashboard
    </button> ):( null )}
      </div>
    </div>

    <div className="border-t text-gray-200 border-gray-800  pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className=" text-sm mb-4 md:mb-0">© { new Date().getFullYear() } URBN SMOKE. All rights reserved.</p>
        <a href="https://kstartechnology.in/" target='_blank' className=" hover:text-blue-600 text-sm transition">Designed & Developed By Kstar Technology</a>
    </div>
  </div>
 </footer>
    </div>
  )
}

export default Footer