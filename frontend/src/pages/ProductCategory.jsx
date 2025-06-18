import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { menu_list } from '../assets/frontend-assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {

    const { products } = useAppContext()
    const { category } = useParams()
    const searchCategory = menu_list.find( ( item )=> item.menu_path.toLowerCase() === category )
    const filteredProducts = products.filter( (product)=> product.category.toLowerCase() === category )

  return (
    <div className='my-16 mx-auto max-w-6xl w-fit'>
        {
            searchCategory && (
                <div className='flex flex-col items-end w-max' >
                    <p className='text-2xl font-medium'> {searchCategory.menu_name} </p>
                    <div className='w-10 h-0.5 bg-button rounded-full'></div>
                </div>
            )
        }
        {
            filteredProducts.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-fit mx-auto mt-8'>
          { filteredProducts.map( (product) => (
              <ProductCard key={product._id} product={product}/>
          ) ) }
            
        </div>
            ): (
                <div className='flex items-center justify-center h-[60vh]'>
                    <p className='text-2xl font-medium'>No products found in this category.</p>
                </div>
            )
        }
    </div>
  )
}

export default ProductCategory