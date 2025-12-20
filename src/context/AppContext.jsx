import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_Fee = 50;

  console.log("Products in Context:", products);

  const value = {
    products,
    currency,
    delivery_Fee,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
