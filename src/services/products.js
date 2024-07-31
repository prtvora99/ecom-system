import { API_URL } from "../config/app";

const getAllProducts = () => {
  return fetch(`${API_URL}/products`);
};

export { getAllProducts };
