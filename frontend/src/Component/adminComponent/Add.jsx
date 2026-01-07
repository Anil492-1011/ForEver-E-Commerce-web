import React, { useState } from "react";
import { assets } from "../../assets/admin_assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
const Add = () => {
  const [imagesData, setImagesData] = useState([
    { image: null, preview: "" },
    { image: null, preview: "" },
    { image: null, preview: "" },
    { image: null, preview: "" },
  ]);

  const [productSizes, setProductSizes] = useState([
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ]);

  const [inputData, setInputData] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: "",
    sizes: [],
    bestseller: "",
  });

  console.log(inputData);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];

    if (!file) return;
    setImagesData((prev) => {
      const update = [...prev];
      update[index] = {
        image: file,
        preview: URL.createObjectURL(file),
      };
      return update;
    });
  };

  function onChangeHandler(event) {
    console.log(event);
    setInputData((prev) => ({
      ...prev,

      [event.target.name]: event.target.value,
    }));
  }

  const AddCart = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", inputData.name);
      formData.append("description", inputData.description);
      formData.append("category", inputData.category);
      formData.append("subCategory", inputData.subCategory);
      formData.append("price", inputData.price);
      formData.append("bestseller", inputData.bestseller);
      formData.append("sizes", JSON.stringify(productSizes));

      for (let i = 0; i < imagesData.length; i++) {
        if (imagesData[i].image) {
          formData.append("images", imagesData[i].image);
        }
      }

      const loginData = JSON.parse(localStorage.getItem("loginData"));

      const response = await axios.post(
        `${import.meta.env.VITE_CLIENT_URL}/api/product/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${loginData.token}`,
          },
        }
      );

      if (response.data?.success) {
        toast.success("successful Added a Product");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error(error, "add order API Error");
    }
  };

  return (
    <form onSubmit={AddCart} className="flex flex-col w-full items-start gap-3">
      <p>Upload Images</p>
      <div className="flex gap-2">
        {imagesData.map((imageData, index) => {
          return (
            <label key={index} htmlFor={`image${index}`}>
              <img
                src={imageData.preview || assets.upload_area}
                alt=""
                className="w-20"
              />
              <input
                type="file"
                id={`image${index}`}
                className="hidden"
                onChange={(e) => {
                  handleImageChange(e, index);
                }}
                accept=".jpg,.png,.jpeg"
              />
            </label>
          );
        })}
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className="border border-gray-500 rounded w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type Here"
          required
          onChange={onChangeHandler}
          value={inputData.name}
          name="name"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="border border-gray-500 rounded w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write Content Here"
          required
          onChange={onChangeHandler}
          value={inputData.description}
          name="description"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            className="border border-gray-500 rounded w-full px-3 py-2"
            onChange={onChangeHandler}
            value={inputData.category}
            name="category"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select
            className="border border-gray-500 rounded w-full px-3 py-2"
            onChange={onChangeHandler}
            value={inputData.subCategory}
            name="subCategory"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            type="Nubmer"
            className="border border-gray-500 rounded w-full px-3 py-2 sm:w-[120px]"
            placeholder="25"
            required
            onChange={onChangeHandler}
            value={inputData.price}
            name="price"
          />
        </div>
      </div>

     <div>
  <p className="mb-2">Product Sizes</p>

  <div className="flex gap-3">
    {productSizes.map((size, index) => (
      <button
        type="button"
        key={index}
        onClick={() =>
          setInputData((prev) => ({
            ...prev,
            sizes: prev.sizes.includes(size)
              ? prev.sizes.filter((s) => s !== size) // remove
              : [...prev.sizes, size],               // add
          }))
        }
      >
        <p
          className={`px-3 py-1 cursor-pointer rounded
            ${
              inputData.sizes.includes(size)
                ? "bg-black text-white"
                : "bg-slate-200"
            }`}
        >
          {size}
        </p>
      </button>
    ))}
  </div>
</div>


      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() =>
            setInputData((prev) => ({
              ...prev,
              bestseller: prev.bestseller ? false : true,
            }))
          }
          value={inputData.bestseller}
          name="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button type="sumbit" className="w-28 py-3 mt-4 bg-black text-white">
        Add
      </button>
    </form>
  );
};

export default Add;
