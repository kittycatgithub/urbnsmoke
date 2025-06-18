import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
    const { products } = useAppContext()
    
  return (
    <div className='mx-auto max-w-6xl mt-16 px-4 md:px-0 pb-10'>
        <p className='text-2xl md:text-3xl font-medium pb-10  w-fit mx-auto'>Best Sellers</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-fit mx-auto'>
          { products.slice(0,6).map( (product, index) => (
              <ProductCard key={index} product={product}/>
          ) ) }
            
        </div>
    </div>
  )
}

export default BestSeller