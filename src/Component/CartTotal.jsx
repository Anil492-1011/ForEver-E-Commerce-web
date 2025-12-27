import React from "react";
import { Link } from "react-router-dom";
const CartTotal = ({ total, currency }) => {
  const shippingFee = 10;

  return (
    <div className="flex justify-center lg:justify-end my-10 lg:my-20 px-4">
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
        <div className="flex justify-between text-sm sm:text-base text-gray-600 mb-3">
          <p>Subtotal</p>
          <p>
            {currency}
            {total}
          </p>
        </div>
        <hr className="my-3" />

        {/* Shipping */}
        <div className="flex justify-between text-sm sm:text-base text-gray-600 mb-3">
          <p>Shipping Fee</p>

          <p> {currency}10.00</p>
        </div>
        <hr className="my-3" />

        {/* Total */}
        <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-800">
          <p>Total</p>
          <p>{(total + shippingFee).toFixed(2)}</p>
        </div>

        <div className="mt-8">
         <Link state={total} to="/Place-order"> <button
            className="w-60 bg-black text-white py-3 sm:py-3 
               text-sm sm:text-base font-semibold uppercase
                 tracking-wide
               hover:bg-gray-900 transition duration-300
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
