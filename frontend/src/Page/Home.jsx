import React from 'react'
import Hero from '../Component/Hero'
import LatestProduct from '../Component/LatestProduct'
import BestSeller from '../Component/BestSeller'
import OurPolicy from '../Component/OurPolicy'
import NewsLitterBox from '../Component/NewsLitterBox'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div >
      <Hero/>
      <LatestProduct/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLitterBox/>
      <Footer/>
    </div>
  )
}

export default Home
