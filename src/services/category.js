import { API_URL } from "../config/app";

const getAllCategories = () => {
  return fetch(`${API_URL}/categories`);
};

export { getAllCategories };
