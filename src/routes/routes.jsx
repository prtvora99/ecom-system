import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "../containers/ProductListing";
import ProductDetail from "../containers/ProductDetail";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route
          path="/product-details/:slug"
          element={<ProductDetail />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
