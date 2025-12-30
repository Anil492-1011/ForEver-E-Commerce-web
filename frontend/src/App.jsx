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
import SearchBar from './Component/SearchBar'
import Cart from './Page/Cart'


function App() {
  return (
    <div>
   
      <Navbar/>
      <SearchBar/>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/Product/:ProductId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Place-order' element={<PlaceOrder />} />  
        <Route path='/Order' element={<Order />}/>
        <Route path='/Cart' element={<Cart/>}></Route>
       </Routes>

    </div>
     
  )
}

export default App
