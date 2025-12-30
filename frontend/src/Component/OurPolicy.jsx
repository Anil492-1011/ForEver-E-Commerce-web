import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-6 py-20 text-center text-xs sm:text-sm md:text-base text-gray-700">
      
      <div className="flex flex-col items-center gap-2">
        <img
          src={assets.exchange_icon}
          alt="Exchange Policy"
          className="w-12 mb-2"
        />
        <h3 className="font-semibold">Easy Exchange Policy</h3>
        <p className="text-gray-400">30 days easy exchange policy</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <img
          src={assets.quality_icon}
          alt="Return Policy"
          className="w-12 mb-2"
        />
        <h3 className="font-semibold">7 Days Return Policy</h3>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <img
          src={assets.support_img}
          alt="Customer Support"
          className="w-12 mb-2"
        />
        <h3 className="font-semibold">24/7 Support</h3>
        <p className="text-gray-400">24/7 support for all your queries</p>
      </div>

    </div>
  )
}

export default OurPolicy
