import React, { useEffect, useState } from 'react'
import { menu_list } from '../assets/frontend-assets/assets'
import { useAppContext } from '../context/AppContext'

const ExploreMenu = () => {
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
    // console.log(products)
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
    <div className='mx-auto max-w-6xl mt-16 px-4 md:px-0'>
        <p className='text-2xl md:text-3xl font-medium'>Explore Menu</p>
        <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 mt-6 gap-x-0'>
            {
                menu_list.map( (category, index)=> 
                <div key={index} onClick={ ()=>{ navigate(`/menu/${category.menu_path.toLowerCase()}`);
                    scrollTo(0,0)
                }} className='group bg-amber-50 items-center  cursor-pointer py-3 px-3 gap-2 rounded-lg flex flex-col'>
                <img src={category.menu_image} alt={category.menu_name} className='group-hover:scale-108 transition max-w-28 w-18 md:w-28 rounded-full'/>
                <p className='text-sm font-medium text-center'>{category.menu_name}</p>
                
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
  )
}

export default ExploreMenu