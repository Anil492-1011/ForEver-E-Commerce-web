import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_Fee = 50;
  
const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const loggedInUserLocal= JSON.parse(localStorage.getItem("loginData")?localStorage.getItem("loginData"):null);
  const [loggegInUser, setLoggedInUser] = useState(loggedInUserLocal ? loggedInUserLocal : null );

  const addToCart = async (itemID, size) => {
    if (!size) {
      return toast.error("Select Product Size");
    }
    setcartItems((prev) => {
      const itemExists = prev.find(
        (item) => item.id === itemID && item.size === size
      );
      if (itemExists) {
        const newArr = prev.map((item) => {
          if (item.id === itemID && item.size === size) {
            return { id: item.id, size: item.size, cnt: item.cnt + 1 };
          }
        });
        console.log(newArr);
        return newArr;
      }
      console.log([...prev, { id: itemID, size: size, cnt: 1 }]);
      return [...prev, { id: itemID, size: size, cnt: 1 }];
    });
  };

  const getCartCount = () => {
    let CartCount = 0;
    for (const item of cartItems) {
      CartCount += item.cnt;
    }
    return CartCount;
  };

  const IncreaseItem = (id, size) => {
    setcartItems((prev) => {
      const Arr = prev.map((item) => {
        if (item.id === id && item.size === size) {
          return { id: item.id, size: item.size, cnt: item.cnt + 1 };
        }
      });
      return Arr;
    });
  };

  const DecreaseItem = (id, size) => {
    setcartItems((prev) => {
      const Arr = prev.map((item) => {
        console.log(item.cnt);
        if (item.id === id && item.size === size && item.cnt > 0) {
          return { id: item.id, size: item.size, cnt: item.cnt - 1 };
        }
        return { id: item.id, size: item.size, cnt: item.cnt };
      });
      return Arr;
    });
  };
  const DeleteItem = (id, size) => {
    setcartItems((prev) => {
      const Arr = prev.filter((item) => {
        if (item.id === id && item.size === size) {
          return false;
        }
        return true;
      });
      return Arr;
    });
  };

  const logout = async () => {
    try {
      const response = await axios.post(
         `${import.meta.env.VITE_CLIENT_URL}/api/auth/logout`,
        {},
        { withCredentials: true } // 👈 agar cookie-based auth hai
      );
      setLoggedInUser(null);
      localStorage.removeItem("loginData");
      navigate("/");
      toast.success("Logout successful");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      throw error;
    }
  };

  const value = {
    products,
    currency,
    delivery_Fee,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    setcartItems,
    cartItems,
    addToCart,
    getCartCount,
    DeleteItem,
    DecreaseItem,
    IncreaseItem,
    logout,
    loggegInUser,
    setLoggedInUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
