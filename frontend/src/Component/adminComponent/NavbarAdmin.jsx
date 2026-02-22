import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { AppContext } from '../../Context/AppContext'

const NavbarAdmin = () => {
  const {logout} =useContext(AppContext)
  return (
    <div className='flex items-center py-5 px-[4%] justify-between shadow-md '>
        <img src={assets.logo} className='w-36' alt=""/>
        <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm' onClick={logout}>LogOut</button>
    </div>
  )
}

export default NavbarAdmin