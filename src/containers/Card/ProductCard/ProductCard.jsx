import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ imageUrl, name, slug }) {
  return (
    <Link to={`/product-details/${slug}`} className={"productCard"}>
      <div key={name}>
        <img src={imageUrl} alt={name} className="productImage" />
        <h2 className="productName">{name}</h2>
      </div>
    </Link>
  );
}

export default ProductCard;
