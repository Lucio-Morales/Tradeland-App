import { ALL_PRODUCTS, USER_REGISTER } from "./action-types";
import axios from "axios";

export const getAllProducts = () => {
  const endPoint = "http://localhost:3001/product/all";
  return async (dispatch) => {
    const response = await axios.get(endPoint);
    dispatch({ type: ALL_PRODUCTS, payload: response.data });
  };
};

export const userRegister = (userData) => {
  const endPoint = "http://localhost:3001/user/register";
  return async (dispatch) => {
    const response = await axios.post(endPoint, userData);
    dispatch({ type: USER_REGISTER });
  };
};

// export const registerBuyer = (buyerData) => {
//   const endPoint = "http://localhost:3001/buyer/register";
//   return async (dispatch) => {
//     const response = await axios.post(endPoint, buyerData);
//     dispatch({ type: REGISTER_BUYER });
//   };
// };
