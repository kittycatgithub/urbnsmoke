import React from 'react'
import HeroSlider from '../components/sliders/HeroSlider'
import ExploreMenu from '../components/ExploreMenu'
import BestSeller from '../components/BestSeller'

const Home = () => {
  
  return (
    <div className=''>
        <HeroSlider/>
        <ExploreMenu/>
        <BestSeller />
    </div>
  )
}

export default Home