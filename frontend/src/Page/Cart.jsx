import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/frontend_assets/assets";
import Footer from '../Component/Footer'
import CartTotal from "../Component/CartTotal";
import axios from "axios";
const Cart = () => {
  const { cartItems, currency, DeleteItem, DecreaseItem, IncreaseItem } = useContext(AppContext);
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try{
         const response = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/api/product/all`);
          if(response.data?.success){
            setProducts(response.data.products);
          }

    }catch(error){
      console.log("error when fetching All products for Cart", error)
  }
};

useMemo(()=>{
    fetchAllProducts();
},[])

  useEffect(() => {
    if (!products.length || !cartItems.length) {
      setCartData([])
      return;
    }

    const mergedData = cartItems.map((cartItem) => {
      const data = products.find((prod) => prod._id === cartItem.id);
      if (!data) return null;
      return {
        ...data,
        size: cartItem.size,
        quantity: cartItem.cnt,
      };
    });

    setCartData(mergedData);
    getPriceCount();

  }, [products, cartItems]);

 

  const getPriceCount = () => {
  return cartData.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity, 0);
};
 

  return (
    <div className="border-t pt-14 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2">
          <p className="text-2xl text-gray-500">
            YOUR <span className="text-gray-800 font-semibold">CART</span>
          </p>
          <span className="w-8 sm:w-12 h-[2px] bg-gray-700"></span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartData.map((item, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-[4fr_2fr_1fr] gap-4 sm:gap-6 items-center border-t border-b py-4  text-gray-700 border-gray-200">
            {/* Product */}
            <div className="flex items-start gap-5">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-16 sm:w-20 object-contain"
              />

              <div>
                <p className="Outfit text-sm sm:text-lg font-medium">{item.name}</p>

                <div className="flex items-center gap-4 mt-2">
                  <p className="text-sm">
                    {currency}
                    {item.price}
                  </p>

                  <p className="px-2 sm:px-3 py-1 border bg-slate-50 text-xs sm:text-sm">
                    {item.size}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 sm:justify-center">
              <button disabled={item.quantity <= 0} onClick={()=>DecreaseItem(item._id, item.size)} className="w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                −
              </button>

              <span className="font-medium">{item.quantity}</span>

              <button onClick={()=>IncreaseItem(item._id, item.size)} className="w-8 h-8 border rounded hover:bg-gray-100">
                +
              </button>
            </div>

            <div onClick={()=>DeleteItem(item._id, item.size)} className="text-right font-semibold">
              <img
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              ></img>
            </div>
          </div>
        ))}
      </div>

     <CartTotal total={getPriceCount()} cartData={cartData} currency={currency} />
      <Footer />
    </div>
  );
};

export default Cart;
