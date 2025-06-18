import React from 'react'
import { menu_list } from '../assets/frontend-assets/assets'
import { useAppContext } from '../context/AppContext'

const ExploreMenu = () => {

    const {navigate} = useAppContext()

  return (
    <div className='mx-auto max-w-6xl mt-16 px-4 md:px-0'>
        <p className='text-2xl md:text-3xl font-medium'>Explore Menu</p>
        <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 xl:grid-cols-9 mt-6 gap-6 '>
            {
                menu_list.map( (category, index)=> 
                <div key={index} onClick={ ()=>{ navigate(`/menu/${category.menu_path.toLowerCase()}`);
                    scrollTo(0,0)
                }} className='group cursor-pointer md:py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
                <img src={category.menu_image} alt={category.menu_name} className='group-hover:scale-108 transition max-w-28 w-18 md:w-28 '/>
                <p className='text-sm font-medium'>{category.menu_name}</p>
            </div>
                )
            }
        </div>
    </div>
  )
}

export default ExploreMenu