import React from 'react'
import { useAppContext } from '../context/AppContext'
import { menu_list } from '../assets/frontend-assets/assets'
import ProductCardDineIn from '../components/ProductCardDineIn'
import MobileCartBar from '../components/MobileCartBar'
import { useLocation } from 'react-router-dom'

const DineIn = () => {

   const {navigate, products} = useAppContext()
      let appetizers = 0
      let burger = 0
      let sandwiches = 0
      let maincourse = 0
      let salad2 = 0
      let kidsmeal = 0
      let mocktailanddrinks = 0
      let extras = 0
      let dessert = 0
      let barbq = 0
    //   console.log(products)
      products.map( (product, index)=> {
          if(product.category === "appetizers"){
              appetizers++ 
          }
          if(product.category === "burger"){
              burger++ 
          }
          if(product.category === "sandwiches"){
              sandwiches++ 
          }
          if(product.category === "main-course"){
              maincourse++ 
          }
          if(product.category === "salad-2"){
              salad2++ 
          }
          if(product.category === "kids-meal"){
              kidsmeal++ 
          }
          if(product.category === "mocktail-and-drinks"){
              mocktailanddrinks++ 
          }
          if(product.category === "extras"){
              extras++ 
          }
          if(product.category === "dessert"){
              dessert++ 
          }
          if(product.category === "bar-bq"){
              barbq++ 
          }
      }
      )
  
  return (
    <div>
       <div className='mx-auto max-w-full md:px-0'>
        <MobileCartBar/>
        <div className='grid grid-cols-3 bg-amber-50 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-x-0'>
            {
                menu_list.map( (category, index)=> 
                <div key={index} onClick={ ()=> {
                          const target = document.getElementById(category.menu_path)
                          if(target){
                            target.scrollIntoView({behavior: 'smooth'})
                          } 
                } } className='group  items-center  cursor-pointer py-3 px-3 gap-2 rounded-lg flex flex-col'>
                <img src={category.menu_image} alt={category.menu_name} className='group-hover:scale-108 transition max-w-28 w-16 md:w-16 rounded-full'/>
                <p className='text-xs font-medium text-center -mb-2'>{category.menu_name}</p>
                
                { category.menu_path === "appetizers" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ appetizers } Products</p>) }
                { category.menu_path === "burger" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ burger } Products</p>) }
                { category.menu_path === "sandwiches" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ sandwiches } Products</p>) }
                { category.menu_path === "main-course" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ maincourse } Products</p>) }
                { category.menu_path === "salad-2" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ salad2 } Products</p>) }
                { category.menu_path === "kids-meal" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ kidsmeal } Products</p>) }
                { category.menu_path === "mocktail-and-drinks" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ mocktailanddrinks } Products</p>) }
                { category.menu_path === "extras" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ extras } Products</p>) }
                { category.menu_path === "dessert" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ dessert } Products</p>) }
                { category.menu_path === "bar-bq" && (<p className=' text-xs md:text-sm font-medium text-gray-600'>{ barbq } Products</p>) }
                </div>
                )
            }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-5 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Appetizers</p>
        <div id='appetizers' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-fit mx-auto'>
               {
          products.map( (product, index)=> 
              product.category === "appetizers" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    <div className='mx-auto max-w-7xl px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Burger</p>
        <div  id='burger' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>    
         {
        products.map( (product, index)=> 
              product.category === "burger" && <ProductCardDineIn key={index} product={product}/>) 
        }
        </div>
    </div>
    <div className='mx-auto max-w-7xl px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Sandwiches</p>
        <div  id='sandwiches' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
       {
        products.map( (product, index)=> 
              product.category === "sandwiches" && <ProductCardDineIn key={index} product={product}/>) 
        }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Main Course</p>
        <div  id='main-course' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
         {
          products.map( (product, index)=> 
              product.category === "main-course" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Salad</p>
        <div id='salad-2' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
        {
          products.map( (product, index)=> 
              product.category === "salad-2" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Kids Meal</p>
        <div id='kids-meal' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
         {
          products.map( (product, index)=> 
              product.category === "kids-meal" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Mocktail & Drinks</p>
        <div id='mocktail-and-drinks' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
        {
          products.map( (product, index)=> 
              product.category === "mocktail-and-drinks" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Extras</p>
        <div id='extras' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
          {
          products.map( (product, index)=> 
              product.category === "extras" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Dessert</p>
        <div id='dessert' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
        {
          products.map( (product, index)=> 
              product.category === "dessert" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    <div className='mx-auto max-w-7xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-xl pb-5'>Bar BQ</p>
        <div id='bar-bq' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto'>
     {
          products.map( (product, index)=> 
              product.category === "bar-bq" && <ProductCardDineIn key={index} product={product}/>) }
        </div>
    </div>
    </div>
  )
}

export default DineIn