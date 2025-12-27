import React from "react";
import Heading from "../Component/Heading";
import Form from "../Component/Form";
import { useLocation } from "react-router-dom";
import CartTotalPlaceorder from "../Component/CartTotalPlaceorder";
import PaymentMethod from "../Component/PaymentMethod";

const PlaceOrder = () => {
  const location = useLocation();
  const total = location.state || 0; // fallback safety

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <Heading text1="DELIVERY" text2="INFORMATION" />

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-4 mt-10">
        {/* Form */}
        <div className="">
          <Form />
        </div>

        {/* Cart Total + Payment */}
        <div className="w-full lg:w-[650px]">
          <CartTotalPlaceorder total={total} />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
