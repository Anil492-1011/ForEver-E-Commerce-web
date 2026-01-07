import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Layout from './Page/admin/Layout'
import Add from './Component/adminComponent/Add'
import List from './Component/adminComponent/List'
import AdminOrders from './Component/adminComponent/AdminOrder'


function App() {

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
   
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <SearchBar />}
        <Routes>
        {/* USER ROUTES */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:ProductId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />

        {/* ADMIN ROUTES (NESTED) */}
        <Route path='/admin' element={<Layout />}>
          <Route path='add' element={<Add />} />
          <Route path='list' element={<List />} />
          <Route path='orders' element={<AdminOrders />} />
        </Route>
      </Routes>

    </div>
     
  )
}

export default App
