import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import ProductItem from "../Component/ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(AppContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter(
        (item) =>
          item.category === category &&
          item.subCategory === subCategory
      )

      setRelatedProduct(productCopy.slice(0, 5))
    }
  }, [products, category, subCategory]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {relatedProduct.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default RelatedProduct;
