import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import "./ProductListing.css";
import { getAllCategories } from "../../services/category";
import { getAllProducts } from "../../services/products";
import ProductCard from "../Card/ProductCard/ProductCard";

const ProductListing = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  // filter products based on selected category
  const filteredProductsByCategory = products.filter(
    (product) => product.categoryId === selectedCategory
  );


  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      const data = await response.json();
      if (Array.isArray(data)) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await getAllCategories();
      const data = await response.json();
      if (Array.isArray(data)) {
        setCategories(data);
        // set first catrgory as the default category on load
        setSelectedCategory(+data[0]?.id || 0);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <>
      <h1 className="pageTitle">Product Listing Page</h1>

      <div className="categoryWrapper">
        <p>Category</p>
        <Dropdown
          options={categories}
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
          value={selectedCategory}
        />
      </div>

      <hr className="seperator" />

      {filteredProductsByCategory.length > 0 ? (
        <div className="productList">
          {filteredProductsByCategory.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p>No products found!</p>
      )}
    </>
  );
};

export default ProductListing;
