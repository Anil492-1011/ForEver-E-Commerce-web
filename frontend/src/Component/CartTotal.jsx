import React from "react";
import { Link } from "react-router-dom";
const CartTotal = ({ total, currency , cartData}) => {
 
  const shippingFee = 10;

  return (
    <div className="flex justify-center lg:justify-end my-6 lg:my-20 px-4">
      <div className="w-full max-w-md bg-white   p-6 sm:p-8">
        {/* Heading */}
        <div className=" mb-6">
          <div className="inline-flex items-center gap-2">
            <p className="text-xl sm:text-2xl text-gray-500">
              CART <span className="text-gray-800 font-semibold">TOTAL</span>
            </p>
            <span className="w-10 h-[2px] bg-gray-700"></span>
          </div>
        </div>

        {/* Subtotal */}
        <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {total}
          </p>
        </div>
        <hr />

        {/* Shipping */}
        <div className="flex justify-between">
          <p>Shipping Fee</p>

          <p> {currency}10.00</p>
        </div>
        <hr />

        {/* Total */}
        <div className="flex justify-between">
          <p>Total</p>
          <p>{(total + shippingFee).toFixed(2)}</p>
        </div>
      </div>
        <div className=" w-full text-end">
         <Link state={{total, cartData}} to="/Place-order"> <button
            className="bg-black text-white text-sm my-8 px-8 py-3
               active:scale-95"
          >
            Proceed to Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
