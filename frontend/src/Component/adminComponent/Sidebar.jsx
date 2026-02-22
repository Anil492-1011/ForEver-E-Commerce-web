import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets";


const Sidebar = () => {
const adminNavClass = ({ isActive }) =>
    `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l transition-colors ${
      isActive ? "bg-gray-200" : "hover:bg-gray-100"
    }`;

return (
    <div className="w-[18%] min-h-screen shadow-md">
        <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">

            <NavLink className={adminNavClass} to="/admin/add">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>

             <NavLink className={adminNavClass} to="/admin/list">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>

             <NavLink className={adminNavClass} to="/admin/orders">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>

            <NavLink className={adminNavClass} to="/admin/messages">
                <img src={assets.order_icon} alt="" />
                <p>Messages</p>
            </NavLink>
        </div>
    </div>
);
};

export default Sidebar;
