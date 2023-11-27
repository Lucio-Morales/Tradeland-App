import { ALL_PRODUCTS } from "./action-types";
import axios from "axios";

export const getAllProducts = () => {
  const endPoint = "http://localhost:3001/product/all";
  return async (dispatch) => {
    const response = await axios.get(endPoint);
    dispatch({ type: ALL_PRODUCTS, payload: response.data });
  };
};
