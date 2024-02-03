import {
  ALL_PRODUCTS,
  GET_STORES,
  PRODUCT_BY_CATEGORY,
  USER_REGISTER,
} from "./action-types";
import axios from "axios";

export const getAllProducts = () => {
  const endPoint = "http://localhost:3001/product/all";
  return async (dispatch) => {
    const response = await axios.get(endPoint);
    dispatch({ type: ALL_PRODUCTS, payload: response.data });
  };
};

export const getProductsByCategory = (categoryId) => {
  const endPoint = `http://localhost:3001/product/all?categoryId=${categoryId}`;
  return async (dispatch) => {
    const response = await axios.get(endPoint);
    dispatch({ type: PRODUCT_BY_CATEGORY, payload: response.data });
  };
};

export const userRegister = (registrationData) => {
  const endPoint = "http://localhost:3001/user/register";
  return async (dispatch) => {
    const response = await axios.post(endPoint, registrationData);
    dispatch({ type: USER_REGISTER });
  };
};

export const getStores = (sellerId) => {
  const endpoint = `http://localhost:3001/store/search?sellerId=${sellerId}`;
  return async (dispatch) => {
    const response = await axios.get(endpoint);
    dispatch({ type: GET_STORES, payload: response.data });
  };
};

// export const userLogin = (userData) => {
//   const endPoint = "http://localhost:3001/user/login";
//   return async (dispatch) => {
//     const response = await axios.post(endpoint, userData);
//     dispatch({ type: USER_LOGIN });
//   };
// };

// export const registerBuyer = (buyerData) => {
//   const endPoint = "http://localhost:3001/buyer/register";
//   return async (dispatch) => {
//     const response = await axios.post(endPoint, buyerData);
//     dispatch({ type: REGISTER_BUYER });
//   };
// };
