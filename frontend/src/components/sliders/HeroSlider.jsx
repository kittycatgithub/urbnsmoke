import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
SwiperCore.use([Autoplay, Pagination]);


import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules'; // ✅ This is the correct import in v11+
import { assets1 } from '../../assets/assets1';
import { useAppContext } from '../../context/AppContext';

const HeroSlider = () => {
  const { navigate } = useAppContext()

      const swiperRef = useRef(null); // ✅ Define swiperRef
    return (
        <div
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      className='z-0'
    >

         <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      onSwiper={(swiper) => {
          swiperRef.current = swiper; // ✅ Assign swiper instance to ref
        }}
      loop={true}
      pagination={{ clickable: true }}
       spaceBetween={0}
  slidesPerView={1}
  speed={1000} // ← smoother transition (in ms)
  effect="fade" // optional: fade effect
  fadeEffect={{ crossFade: true }} // enables smooth fading
    >
    <SwiperSlide>
        <section className="mx-auto bg-white  max-w-[1440px] min-w-[280px] ">
            <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 lg:py-10 text-white mx-auto">
  {/* <img src="https://img.freepik.com/free-photo/tortilla-with-added-ink-cuttlefish-with-chicken-vegetables_2829-10956.jpg?ga=GA1.1.1591991109.1749796990&semt=ais_hybrid&w=740" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/> */}
  <img src={assets1.img4} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
  <div
    className="w-full z-10  flex flex-col lg:flex-row  items-center  py-12 sm:py-9 md:py-11 lg:py-40  px-2  sm:px-4 md:px-8 xl:px-16">
    {/* <img className="w-full lg:w-1/2 xl:w-full max-w-[550px] lg:order-2" src="https://i.pinimg.com/736x/46/93/62/4693621418c848e3d5dc27edf19783c8.jpg" alt=""/> */}
    <div className="text-center md:text-left  mx-auto max-w-full">
      
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl line-height: 1.2" >
      Welcome to <span className="relative whitespace-nowrap text-yellow dark:text-yellow">
        <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-400/70 dark:fill-green-300/60" preserveAspectRatio="none">
          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
        </svg>
        <span className="relative">Urbn Smoke </span>
      </span>
    </h1>
    <p className="mx-auto mb-8 max-w-2xl text-lg  text-center">
We deliver fresh food straight to your door. Trusted by thousands, we aim to make your dining experience simple and affordable.
    </p>

    <div className="flex justify-center items-center mt-8" data-aos="fade-up" data-aos-delay="400">
      <button onClick={()=> navigate('/all-menu')} rel="noopener noreferrer"
        className="relative flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
        <span className="absolute inset-0 rounded-full bg-green-600 opacity-50 animate-ping"></span>
        <span className="relative z-10 pr-2">View Menu</span>
      </button>
    </div>
    </div>
  </div></div>
  
        </section> 
    </SwiperSlide>
    <SwiperSlide>
        <section className="mx-auto bg-white  max-w-[1440px] min-w-[280px] ">
            <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 lg:py-10 text-white mx-auto">
  {/* <img src="./slider/slider2.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/> */}
  {/* <img src="https://img.freepik.com/free-photo/traditional-georgian-dish-tender-veal-stewed-with-onions-peppers-chashushuli-culinary_166373-6544.jpg?ga=GA1.1.1591991109.1749796990&semt=ais_hybrid&w=740" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/> */}
  <img src={assets1.img6} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
  <div
    className="w-full z-10  flex flex-col lg:flex-row  items-center  py-12 sm:py-9 md:py-11 lg:py-40  px-2  sm:px-4 md:px-8 xl:px-16">
    {/* <img className="w-full lg:w-1/2 xl:w-full max-w-[550px] lg:order-2" src="https://i.pinimg.com/736x/46/93/62/4693621418c848e3d5dc27edf19783c8.jpg" alt=""/> */}
    <div className="text-center md:text-left  mx-auto max-w-full">
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl line-height: 1.2" >
      Order your <span className="relative whitespace-nowrap text-yellow dark:text-yellow">
        <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-400/70 dark:fill-green-300/60" preserveAspectRatio="none">
          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
        </svg>
        <span className="relative">Favourite </span>
      </span>  Food
    </h1>
    <p className="mx-auto mb-8 max-w-2xl text-lg  text-center">
      Choose from a diverse menu featuring a detectable array of dishes crafted with the 
      finest ingredients and culinary expertise.
    </p>

    <div className="flex justify-center items-center mt-8" data-aos="fade-up" data-aos-delay="400">
      <button onClick={()=> navigate('/all-menu')} rel="noopener noreferrer"
        className="relative flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
        <span className="absolute inset-0 rounded-full bg-green-600 opacity-50 animate-ping"></span>
        <span className="relative z-10 pr-2">View Menu</span>
      </button>
    </div>
    </div>
  </div></div>
  
        </section> 
    </SwiperSlide>
    <SwiperSlide>
        <section className="mx-auto bg-white  max-w-[1440px] min-w-[280px] ">
            <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 lg:py-10 text-white mx-auto">
  {/* <img src="./slider/slider3.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/> */}
  <img src={assets1.img3} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
  <div
    className="w-full z-10  flex flex-col lg:flex-row  items-center  py-12 sm:py-9 md:py-11 lg:py-40  px-2  sm:px-4 md:px-8 xl:px-16">
    {/* <img className="w-full lg:w-1/2 xl:w-full max-w-[550px] lg:order-2" src="https://i.pinimg.com/736x/46/93/62/4693621418c848e3d5dc27edf19783c8.jpg" alt=""/> */}
    <div className="text-center md:text-left  mx-auto max-w-full">
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl line-height: 1.2" >
      Business Meets  <span className="relative whitespace-nowrap text-yellow dark:text-yellow">
        <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-400/70 dark:fill-green-300/60" preserveAspectRatio="none">
          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
        </svg>
        <span className="relative">Leisure</span>
      </span> Stories
    </h1>
    <p className="mx-auto mb-8 max-w-2xl text-lg  text-center">
Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
    </p>

    <div className="flex justify-center items-center mt-8" data-aos="fade-up" data-aos-delay="400">
      <button onClick={()=> navigate('/all-menu')} rel="noopener noreferrer"
        className="relative flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
        <span className="absolute inset-0 rounded-full bg-green-600 opacity-50 animate-ping"></span>
        <span className="relative z-10 pr-2">View Menu</span>
      </button>
    </div>
    </div>
  </div></div>
  
        </section> 
    </SwiperSlide>
    </Swiper>
    </div>
    );
};

export default HeroSlider;