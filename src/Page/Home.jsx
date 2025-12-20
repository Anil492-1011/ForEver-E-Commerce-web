import React from 'react'
import Hero from '../Component/Hero'
import LatestProduct from '../Component/LatestProduct'
import BestSeller from '../Component/BestSeller'
import OurPolicy from '../Component/OurPolicy'

const Home = () => {
  return (
    <div >
      <Hero/>
      <LatestProduct/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default Home
