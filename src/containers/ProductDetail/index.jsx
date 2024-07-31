import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../services/products";

import "./ProductDetail.css";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      const data = await response.json();
      if (Array.isArray(data)) {
        // find product based on slug
        setProduct(data.find((product) => product.slug === slug));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      getProducts(); // fetch products if slug is present
    }
  }, [slug]);

  return (
    <>
      <h1 className="pageTitle">Product Details Page</h1>
      <hr className="seperator" />

      <div className="detailWrapper">
        <div className="imgWrapper">
          <img className="prodImage" src={product?.imageUrl} alt={slug} />
        </div>

        <div className="productDetail">
          <p>
            <span>Category:</span> {product?.category || ""}
          </p>
          <p>
            <span>Product Name:</span> {product?.name || ""}
          </p>
          <p>
            <span>Product Description:</span> {product?.description || ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
