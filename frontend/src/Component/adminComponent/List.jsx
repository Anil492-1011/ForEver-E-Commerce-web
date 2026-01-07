import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const List = () => {
  const [allData, setAllData] = useState([]);

  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_CLIENT_URL}/api/product/all`
      );
      if (response.data?.success) {
        setAllData(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching admin product list", error);
    }
  };

 const RemoveProduct = async (productId) => {
  try {
    const loginData = JSON.parse(localStorage.getItem("loginData"));

    const response = await axios.delete(
      `${import.meta.env.VITE_CLIENT_URL}/api/product/remove/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${loginData.token}`,
        },
      }
    );

    if (response.data?.success) {
      toast.success("Successfully removed product");

      // 🔥 Update UI
      setAllData((prev) =>
        prev.filter((item) => item._id !== productId)
      );
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
    console.error("Remove product error:", error);
  }
};


  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-8 text-gray-700">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>

      {/* Desktop Table  */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="grid grid-cols-[80px_2fr_1fr_1fr_100px] bg-gray-100 px-4 py-2 text-sm font-semibold">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {allData.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[80px_2fr_1fr_1fr_100px] items-center px-4 py-3 text-sm border-t hover:bg-gray-50 transition"
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-12 h-12    "
            />
            <p className="font-medium truncate">{item.name}</p>
            <p className="capitalize">{item.category}</p>
            <p className="font-semibold">₹{item.price}</p>
            <button onClick={()=>RemoveProduct(item._id)} className="text-red-500 hover:text-black-700 font-semibold text-center">
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* ================= Mobile Cards ================= */}
      <div className="md:hidden flex flex-col gap-4">
        {allData.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg border shadow-sm p-4 flex gap-4"
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-base truncate">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 capitalize">
                {item.category}
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                ₹{item.price}
              </p>

              <button onClick={()=>{RemoveProduct(item._id)}} className="mt-2 text-sm text-red-500 font-medium">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
