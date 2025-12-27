import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import ProductItem from "../Component/ProductItem";
import { assets } from "../assets/frontend_assets/assets";
import Footer from "../Component/Footer";

const Collection = () => {
  const { products , search } = useContext(AppContext);
   const [filterData, setFilterData] = useState([]);

  // Accordion state (mobile)
  const [showFilter, setShowFilter] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showType, setShowType] = useState(false);

  // Category
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [child, setChild] = useState(false);

  // Type
  const [topwear, setTopwear] = useState(false);
  const [bottomwear, setBottomwear] = useState(false);
  const [winterwear, setWinterwear] = useState(false);


  function handlefilter(){

      const filtered = products.filter((product) => {
      const categorySelected = men || women || child;
      const categoryMatch = !categorySelected || (men && product.category?.toLowerCase() === "men") ||
        (women && product.category?.toLowerCase() === "women") ||
        (child && product.category?.toLowerCase() === "kids");

      const typeSelected = topwear || bottomwear || winterwear;

      const typeMatch =!typeSelected || (topwear && product.subCategory?.toLowerCase() === "topwear") ||
        (bottomwear && product.subCategory?.toLowerCase() === "bottomwear") ||
        (winterwear && product.subCategory?.toLowerCase() === "winterwear");

        const isSearch=product.name.toLowerCase().includes(search.toLowerCase())


      return categoryMatch && typeMatch && isSearch;
    });

    setFilterData(filtered);

  }

  useEffect(() => {
      handlefilter()
  }, [products, men, women, child, topwear, bottomwear, winterwear, search]);

  return (
    <div>
      
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t">
      {/* FILTER */}
      <div className="sm:w-64 w-full">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-lg font-semibold flex items-center justify-between cursor-pointer sm:cursor-default"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
            alt=""
          />
        </p>

        <div
          className={`bg-white border rounded-lg p-4 mt-4 space-y-4 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          {/* CATEGORY */}
          <div>
            <div onClick={() => setShowCategory(!showCategory)} className="flex justify-between items-center cursor-pointer sm:cursor-default" >
              <p className="font-medium">Category</p><img src={assets.dropdown_icon}
                className={`h-3 sm:hidden transition-transform ${showCategory ? "rotate-90" : ""}`} alt="" />
           </div>

            <div className={`mt-3 space-y-2 text-sm text-gray-700 ${showCategory ? "block" : "hidden"} sm:block`}>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={men}
                  onChange={() => setMen(!men)}
                />
                Men
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={women}
                  onChange={() => setWomen(!women)}
                />
                Women
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={child}
                  onChange={() => setChild(!child)}
                />
                Kids
              </label>
            </div>
          </div>

          {/* TYPE */}
          <div>
            <div
              onClick={() => setShowType(!showType)}
              className="flex justify-between items-center cursor-pointer sm:cursor-default"
            >
              <p className="font-medium">Type</p>
              <img
                src={assets.dropdown_icon}
                className={`h-3 sm:hidden transition-transform ${
                  showType ? "rotate-90" : ""
                }`}
                alt=""
              />
            </div>

            <div
              className={`mt-3 space-y-2 text-sm text-gray-700 ${
                showType ? "block" : "hidden"
              } sm:block`}
            >
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={topwear}
                  onChange={() => setTopwear(!topwear)}
                />
                Topwear
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={bottomwear}
                  onChange={() => setBottomwear(!bottomwear)}
                />
                Bottomwear
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={winterwear}
                  onChange={() => setWinterwear(!winterwear)}
                />
                Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>
     


      {/* PRODUCTS */}
      <div className="flex-1">
        {filterData.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">No Products Found</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filterData.map((product, index) => (
              <ProductItem  key={index} id={product._id} product={product} />
            ))}
          </div>
        )}
      </div>

     
    </div>
    <Footer/>
    </div>
  );
};

export default Collection;
