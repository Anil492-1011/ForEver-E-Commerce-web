import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Footer from "../Component/Footer";
import RelatedProduct from "../Component/RelatedProduct";
import axios from "axios";  

const Product = () => {
  const { ProductId } = useParams();
  const {addToCart } = useContext(AppContext);
 

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

 const fetchCartData = async () => {
     try{
        const response = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/api/product/single/${ProductId}`);
        if(response.data?.success){
          setProductData(response.data.product);
          setImage(response.data.product.image[0]);
        }
     }catch(error){
        console.log("error when fetching single product data", error);
 } 
}

  useMemo(() => {
    fetchCartData();
  }, []);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div>
      {/* MAIN CONTAINER */}
      <div className="border-t pt-6 sm:pt-10 px-4 sm:px-10 max-w-7xl mx-auto">

        {/* PRODUCT SECTION */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT: IMAGES */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">

            {/* THUMBNAILS */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[20%]">
              {productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  onClick={() => setImage(item)}
                  className={`w-20 sm:w-full rounded-md cursor-pointer border transition
                    ${image === item
                      ? "border-black"
                      : "border-gray-300 hover:border-gray-500"
                    }`}
                  alt=""
                />
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="flex-1">
              <img
                src={image}
                className="w-full h-full object-contain rounded-lg bg-gray-100"
                alt=""
              />
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO */}
          <div className="flex-1 space-y-4">

            <h1 className="text-xl sm:text-2xl font-semibold">
              {productData.name}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg=="
                  className="w-4"
                  alt=""
                />
              ))}
              <p className="pl-2 text-sm text-gray-500">(122)</p>
            </div>

            {/* PRICE */}
            <p className="text-2xl font-bold text-green-600">
              ₹{productData.price}
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {productData.description}
            </p>

            {/* SIZE SELECT */}
            <div className="flex flex-col gap-3 my-6">
              <p className="font-medium">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`px-4 py-2 border rounded-md text-sm transition
                      ${item === size
                        ? "border-orange-500 bg-orange-100"
                        : "border-gray-300 hover:border-gray-500"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* ADD TO CART */}
            <button onClick={()=>addToCart(productData._id, size)} className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-md active:scale-95 hover:bg-gray-800 transition font-medium">
              Add to Cart
            </button>

            {/* INFO */}
            <hr className="mt-8" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery available.</p>
              <p>Easy return & exchange within 7 days.</p>
            </div>
          </div>
        </div>

        {/* DESCRIPTION / REVIEW */}
        <div className="mt-12">
          <div className="flex">
            <b className="border px-5 py-3 text-sm bg-white">Description</b>
            <p className="border px-5 py-3 text-sm text-gray-500 cursor-pointer">
              Review
            </p>
          </div>

          <div className="border px-6 py-6 text-sm text-gray-500 leading-relaxed space-y-4">
            <p>
             An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer
            </p>
            <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
          </div>
        </div>
      </div>
     <br></br><br></br>
      {/* RELATED PRODUCTS */}
       <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2">
          <p className="text-2xl text-gray-500">
            Related <span className="text-gray-800 font-semibold">Products</span>
          </p>
          <span className="w-8 sm:w-12 h-[2px] bg-gray-700"></span>
        </div>
      </div>
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Product;
