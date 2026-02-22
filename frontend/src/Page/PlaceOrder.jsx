import React, { useState } from "react";
import Heading from "../Component/Heading";
import Form from "../Component/Form";
import CartTotalPlaceorder from "../Component/CartTotalPlaceorder";
import PaymentMethod from "../Component/PaymentMethod";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const total = location.state?.total || 0;
  const cartData = location.state?.cartData || [];

  const [deliveryInfo, setDeliveryInfo] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Street: "",
    City: "",
    Zipcode: "",
    State: "",
    Country: "",
    Phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  
  const handlePlaceOrder = async () => {
    // Validation
    for (let key in deliveryInfo) {
      if (!deliveryInfo[key]) {
        alert("Every field is required");
        return;
      }
    }

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CLIENT_URL}/api/order/addorder`,
        {
          cartData,
          deliveryInfo,
          paymentMethod,
          total,
        }
      );

      if (response.data.success) {
        toast.success("Order placed successfully");
        navigate("/order");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <Heading text1="DELIVERY" text2="INFORMATION" />

      <div className="flex flex-col lg:flex-row gap-4 mt-10">
        <Form formData={deliveryInfo} setFormData={setDeliveryInfo} />

        <div className="w-full lg:w-[650px]">
          <CartTotalPlaceorder total={total} />
          <PaymentMethod
            PlaceOrder={handlePlaceOrder}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
