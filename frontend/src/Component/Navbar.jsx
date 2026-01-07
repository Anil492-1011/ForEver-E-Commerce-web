import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearchBar, getCartCount, loggegInUser, logout, setShowNavbar}=useContext(AppContext)


  return (
    <div className="flex items-center justify-between py-6 px-10 shadow-md font-medium">
       <NavLink to="/" ><img src={assets.logo} alt="Logo" className=" w-36" /></NavLink>
       
      <ul className="hidden sm:flex gap-5 item-sm text-gray-700">
        <NavLink to="/" className="prata-regular flex flex-col items-center gap-1">
          <p>Home</p>{" "}
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="prata-regular flex flex-col items-center gap-1 ">
          <p>About</p>{" "}
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="prata-regular flex flex-col items-center gap-1">
          <p>Collection</p>{" "}
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="prata-regular flex flex-col items-center gap-1">
          <p>Contact</p>{" "}
          <hr className=" w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
     <NavLink to='/collection'><img src={assets.search_icon} alt="" className="w-5 cursor-pointer" /> 
</NavLink>
  
        <div className="group relative">
          {loggegInUser?
          <img
            className="w-5 cursor-pointer"
             src={assets.profile_icon}
            alt=""
          />
          : <NavLink to="/login" ><img
            className="w-5 cursor-pointer"
             src={assets.profile_icon}
            alt=""
          /></NavLink>}
         
          
          {loggegInUser && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-slate-100 text-gray-500 rounded">
                <Link to="/Profile"><p className="cursor-pointer hover:text-black">My Profile</p></Link>
               { loggegInUser?.role === 'admin' && <Link to="/admin"><p  onClick={()=>(setShowNavbar(true))} className="cursor-pointer hover:text-black">Deshboard</p></Link>}
                <Link to="/Order"><p  className="cursor-pointer hover:text-black">Order</p></Link>
                <Link><p className="cursor-pointer hover:text-black" onClick={logout}>Logout</p></Link> 
              </div>
            </div>
          )}


        </div>
        <Link to="/Cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-4" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-6 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0" } `}>
          <div className="flex flex-col text-gray-700">
            <div
              className="flex item-center gap-4 p-3" onClick={() => setVisible(false)}>
              <img src={assets.dropdown_icon} alt="Close" className="h-4 rotate-180"/>
              <p className="cursor-pointer">Back</p>

            </div>
            <NavLink to="/" className="p-4 border-t border-gray-300" onClick={() => setVisible(false)}>  Home</NavLink>
            <NavLink to="/about" className="p-4 border-t border-gray-300" onClick={() => setVisible(false)}> About</NavLink>
            <NavLink to="/collection" className="p-4 border-t border-gray-300" onClick={() => setVisible(false)}> Collection</NavLink>
            <NavLink to="/contact" className="p-4 border-t border-gray-300" onClick={() => setVisible(false)}> Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Navbar;
