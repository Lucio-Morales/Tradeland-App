import { ALL_PRODUCTS, GET_STORES, PRODUCT_BY_CATEGORY } from "./action-types";

const initialState = {
  products: [],
  stores: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case GET_STORES:
      return {
        ...state,
        stores: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
