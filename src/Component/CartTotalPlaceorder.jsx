import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const CartTotalPlaceorder = ({ total }) => {
  const { currency } = useContext(AppContext);
  const shippingFee = 10;
  return (
      <div className=" min-w-40 w-full">
      <div className="w-full bg-white  p-6 sm:p-8">
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
        <hr className="my-3 " />

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

      
      </div>
    </div>
  );
};

export default CartTotalPlaceorder;
