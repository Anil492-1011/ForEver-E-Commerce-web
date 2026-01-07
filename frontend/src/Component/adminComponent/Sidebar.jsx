import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets";


const Sidebar = () => {
return (
    <div className="w-[18%] min-h-screen shadow-md">
        <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:bg-gray-100 active:bg-gray-200' to="/admin/add">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>

             <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:bg-gray-100 active:bg-gray-200' to="/admin/list">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>

             <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:bg-gray-100 active:bg-gray-200' to="/admin/orders">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
);
};

export default Sidebar;
