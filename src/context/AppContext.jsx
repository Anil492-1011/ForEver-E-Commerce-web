import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const AppContext =createContext();

export const AppContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_Fee = 50;
  const [search, setSearch] = useState('');
  const [showSearchBar , setShowSearchBar] = useState(false);


  console.log("Products in Context:", products);

  const value = {
    products,
    currency,
    delivery_Fee,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
