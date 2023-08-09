import React from 'react'
import './styles/Home.css'
import Carrousel from './utils/Carrousel'
import BannerPromotion from './utils/BannerPromotion'
import SliderProducts from './utils/SliderProducts'
import GenderBanner from './utils/GenderBanner'


const Home = () => {
  return (
    <div className='homeMainBox'>

      <Carrousel></Carrousel>
      <SliderProducts tittle = "DESTACADOS"></SliderProducts>
      <BannerPromotion></BannerPromotion>
      <SliderProducts tittle = "CYBER TENNIS"></SliderProducts>
      <GenderBanner></GenderBanner>

    </div>
  )
}

export default Home