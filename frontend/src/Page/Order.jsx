import Heading from "../Component/Heading";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
   const cartData = location.state?.cartData || [];
   const paymentMethod = location.state?.paymentMethod || "";
   const deliveryInfo = location.state?.deliveryInfo || {}; 
  console.log(cartData, paymentMethod, deliveryInfo);

  return (
    <div className="sm:px-6 lg:px-12">
      
      {/* Heading */}
      <div className="">
        <Heading text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {cartData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border-gray-700 p-4 sm:p-6 
                       flex flex-col md:flex-row md:items-center md:justify-between 
                       gap-6 hover:shadow-md transition"
          >
            {/* Left Section */}
            <div className="flex gap-4 sm:gap-6">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-20 h-24 sm:w-24 sm:h-28  "
              />

              <div className="space-y-1">
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  {item.name}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <p>₹{item.price}</p>
                  <p>Qty: 1</p>
                  <p>Size: M</p>
                </div>

                <p className="text-sm text-gray-500">
                  Date: <span className="text-gray-700">12 Jan 2026</span>
                </p>

                <p className="text-sm">
                  Payment:
                  <span className="ml-2 inline-block px-3 py-1 rounded-full 
                                   bg-gray-100 text-gray-600 text-xs font-medium">
                    COD
                  </span>
                </p>
              </div>
            </div>

            {/* Right Section (Status) */}
            <div className="md:w-1/2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Order Placed</p>
              </div>
             <button className="border px-4 py-2 text-sm font-medium rounded-sm">
              Track Order
             </button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

