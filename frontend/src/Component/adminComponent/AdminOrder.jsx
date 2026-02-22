import axios from "axios";
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/admin_assets/assets";

const Order = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_CLIENT_URL}/api/order/get`
      );
      if (response.data?.data) {
        setOrderData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(orderData);

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className="w-[100%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
      <div>
        <h3>Order Details</h3>
        {orderData.length === 0 ? (
          <p>No order</p>
        ) : (
          orderData.map((order, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
              >
                <img src={assets.parcel_icon} alt="" className="w-12" />
                <div>
                  {order.items.map((item, index) => {
                    return (
                      <div key={index}>
                        <p className="py-0.5">{item.name}</p>
                        <p className="py-0.5">{item.size}</p>
                      </div>
                    );
                  })}
                  <p className="mt-3 mb-2 font-medium">
                    {order.address.Firstname + " " + order.address.Lastname}
                  </p>

                  <div>
                    <p>{order.address.Street}</p>
                    <p>
                      {order.address.City},{order.address.State},
                      {order.address.Country},{order.address.Zipcode}
                    </p>
                  </div>
 
                </div>
                <div>
                  <p className="text-sm sm:text-[15px]"><span>Items: </span>{order.items?.reduce((total, item) => total + item.quantity, 0)}</p>
                  <p className="text-sm sm:text-[15px]"><span>Payment Method: </span>{order.paymentMethod}</p>
                  <p className="text-sm sm:text-[15px]"><span>Payment: </span>{order.status}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p>₹ {order.amount}</p>
                </div>
                  
                  <select className="p-2 font-semibold border border-gray-500">
                    <option value='Order Placed'>Order Placed</option>
                    <option value='Packing'>Packing</option>
                    <option value='Shipped'>Shipped</option>
                    <option value='Out for delivery'>Out for delivery</option>
                    <option value='Delivered'>Delivered</option>

                  </select>


              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Order;
