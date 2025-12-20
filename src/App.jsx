import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Home  from './Page/Home'
import  About  from './Page/About'
import  Contact  from './Page/Contact'
import  Collection  from './Page/Collection'
import Product  from './Page/Product'
import Navbar from './Component/Navbar'
import Login from './Page/Login'
import PlaceOrder from './Page/PlaceOrder'
import Order from './Page/Order'

function App() {
  return (
    <div>
   <Navbar/>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Place-order' element={<PlaceOrder />} />
        <Route path='/Order' element={<Order />} />
       </Routes>
    </div>
     
  )
}

export default App
