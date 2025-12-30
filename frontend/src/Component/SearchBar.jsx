import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { assets} from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearchBar, setShowSearchBar } =useContext(AppContext);
  const [visible, setVisible] =useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection') ){
      setVisible(true);
    }else{
     setVisible(false);
    }
  },[location])

 
return showSearchBar && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center gap-3 border border-gray-400 py-2 px-4 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white">
        <input
          className="flex-1 outline-none bg-transparent text-sm"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-5 h-5" src={assets.search_icon} alt="search" />
      </div>

      <img
        onClick={() => setShowSearchBar(false)}
        src={assets.cross_icon}
        alt="close"
        className="inline w-4 ml-2 cursor-pointer hover:opacity-70"
      />
    </div>
  ) : null
};

export default SearchBar;
