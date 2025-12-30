import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const PaymentMethod = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-10">
      {/* Heading */}
      <div className="mt-8 mb-6">
        <div className="inline-flex items-center gap-3 mb-3">
          <p className="text-xl sm:text-2xl text-gray-500">
            PAYMENT <span className="text-gray-800 font-medium">METHOD</span>
          </p>
          <span className="w-10 sm:w-14 h-[2px] bg-gray-700"></span>
        </div>
      </div>
      <div className="flex gap-3 flex-col lg:flex-row">
        <div className="flex items-center gap-3  border border-gray-300 p4- px-3 cursor-pointer">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="payment" />
            <img src={assets.stripe_logo} alt="Stripe" className=" h-5 mx-4" />
          </label>
        </div>

        <div className="flex-1 border border-gray-300 p-4 rounded">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="payment" />
            <img
              src={assets.razorpay_logo}
              alt="Razorpay"
              className="h-5 mx-4"
            />
          </label>
        </div>

        <div className="flex-1 border border-gray-300   p-4 rounded">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="payment" />
            <p className="text-sm font-medium h-5 mx-4 text-gray-800">
              CASH ON DELIVERY
            </p>
          </label>
        </div>
      </div>
      <div className="w-full text-end mt-8"> <button type="sumbit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button></div>
    </div>
  );
};

export default PaymentMethod;
