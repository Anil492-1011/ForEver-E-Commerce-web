import React from "react";
import Heading from "../Component/Heading";
import Form from "../Component/Form";
import { useLocation } from "react-router-dom";
import CartTotalPlaceorder from "../Component/CartTotalPlaceorder";
import PaymentMethod from "../Component/PaymentMethod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const location = useLocation();
  const total = location.state.total || 0; // fallback safety
  const cartData = location.state.cartData || [];
  const navigate = useNavigate();

  const [deliveryInfo, setDeliveryInfo] =useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Street:"",
    City:"",
    Zipcode:"",
    State:"",
    Country:"",
    Phone: ""})

   const [paymentMethod, setPaymentMethod] = React.useState("");

const PlaceOrder =()=>{
    if(!deliveryInfo.Firstname || !deliveryInfo.Lastname || !deliveryInfo.Email || !deliveryInfo.Street || !deliveryInfo.City ||
      !deliveryInfo.Zipcode || !deliveryInfo.State || !deliveryInfo.Country || !deliveryInfo.Phone){
            alert("Every Field is Required")
            return;
    }
    if(paymentMethod===""){
      alert("Please select a Payment Method")
      return;
    }

    navigate("/Order", {state:{cartData, paymentMethod, deliveryInfo}});
}



  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <Heading text1="DELIVERY" text2="INFORMATION" />

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-4 mt-10">
        {/* Form */}
        <div className="">
          <Form formData={deliveryInfo} setFormData={setDeliveryInfo}/>
        </div>

        {/* Cart Total + Payment */}
        <div className="w-full lg:w-[650px]">
          <CartTotalPlaceorder total={total} />
          <PaymentMethod PlaceOrder={PlaceOrder} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
