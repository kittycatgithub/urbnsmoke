import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useAppContext } from '../context/AppContext'

const AllProducts = () => {
    const { products, searchQuery } = useAppContext()
    const [ filteredProducts, setFilteredProducts ] = useState([])

    useEffect( ()=> {
        if( searchQuery.length > 0 ){
            setFilteredProducts( products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) )
        } else {
            setFilteredProducts(products)
        }
    }, [ products, searchQuery ] )

  return (
    <div className='my-16 flex flex-col max-w-6xl w-fit mx-auto'>
        <div className='flex flex-col items-end w-max pb-10'>
            <p className='text-2xl font-medium'>Available Menu</p>
            <div className='w-16 h-0.5 bg-button rounded-full'></div>
        </div>        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-fit mx-auto'>
          {
            filteredProducts.map( ( product, index )=>(
                <ProductCard key={index} product={product}/>
            ) ) 
          }
          {/* { products.map( (product, index) => (
              <ProductCard key={index} product={product}/>
          ) ) } */}
            
        </div>
    </div>
  )
}

export default AllProducts