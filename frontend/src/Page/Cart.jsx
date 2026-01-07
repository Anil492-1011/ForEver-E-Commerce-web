import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/frontend_assets/assets";
import Footer from "../Component/Footer";
import CartTotal from "../Component/CartTotal";
import axios from "axios";

const Cart = () => {
  const { cartItems, currency, DeleteItem, DecreaseItem, IncreaseItem } =
    useContext(AppContext);

  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);


  // ✅ FIX 1: API call in useEffect
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_CLIENT_URL}/api/product/all`
      );
      if (response.data?.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log("error when fetching All products for Cart", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // ✅ FIX 2: merge products + cartItems safely
  useEffect(() => {
    if (!products.length || !cartItems.length) {
      setCartData([]);
      return;
    }

    const mergedData = cartItems
      .map(cartItem => {
        const data = products.find(prod => prod._id === cartItem.id);
        if (!data) return null;

        return {
          ...data,
          size: cartItem.size,
          quantity: cartItem.cnt,
        };
      })
      .filter(Boolean); // ✅ remove nulls

    setCartData(mergedData);
  }, [products, cartItems]);

  // ✅ FIX 3: total price calculation
  const totalPrice = useMemo(() => {
    return cartData.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  }, [cartData]);

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
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[4fr_2fr_1fr] gap-4 items-center border-y py-4 text-gray-700"
          >
            {/* Product */}
            <div className="flex items-start gap-5">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-16 sm:w-20 object-contain"
              />

              <div>
                <p className="text-sm sm:text-lg font-medium">{item.name}</p>

                <div className="flex items-center gap-4 mt-2">
                  <p className="text-sm">
                    {currency}
                    {item.price}
                  </p>

                  <p className="px-2 py-1 border bg-slate-50 text-xs">
                    {item.size}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 justify-center">
              <button
                disabled={item.quantity <= 1}
                onClick={() => DecreaseItem(item._id, item.size)}
                className="w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                −
              </button>

              <span className="font-medium">{item.quantity}</span>

              <button
                onClick={() => IncreaseItem(item._id, item.size)}
                className="w-8 h-8 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Delete */}
            <div className="text-right">
              <img
                src={assets.bin_icon}
                onClick={() => DeleteItem(item._id, item.size)}
                className="w-4 sm:w-5 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <CartTotal total={totalPrice} cartData={cartData} currency={currency} />
      <Footer />
    </div>
  );
};

export default Cart;
