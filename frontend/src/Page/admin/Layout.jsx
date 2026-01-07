import React from 'react'
import NavbarAdmin from '../../Component/adminComponent/NavbarAdmin'
import Sidebar from '../../Component/adminComponent/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen">
        <> 
        <NavbarAdmin/>
        <div className='flex w-full'>
         <Sidebar/>
         <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Outlet />
         </div>
        </div>

        </>
    </div>
  )
}

export default Layout