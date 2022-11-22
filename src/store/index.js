import { createStore } from "redux";
import data from "../data";

export const fetchData = { type: "fetch/all" };
export const fetchDataProd = (id) => {
  return { type: "fetch/prod", payload: id };
};
export const addToCart = (prod) => {
  return { type: "addToCart", payload: prod };
};

export const removeProd = (prod) => {
  return { type: "removeProd", payload: prod };
};

const storeReducer = (state = { products: [], cart: [], prod: {} }, action) => {
  switch (action.type) {
    case "fetch/all":
      return { ...state, products: data };

    case "fetch/prod":
      return {
        ...state,
        prod: data.filter((prod) => prod.id == action.payload)[0],
      };

    case "addToCart":
      if (
        state.cart.filter((prod) => prod.id === action.payload.id).length > 0
      ) {
        const allButFoundProd = state.cart.filter(
          (prod) => prod.id !== action.payload.id
        );
        const prodFound = state.cart.filter(
          (prod) => prod.id === action.payload.id
        );

        return {
          ...state,
          cart: [
            ...allButFoundProd,
            {
              ...action.payload,
              qty: prodFound[0].qty + 1,
            },
          ],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }

    case "removeProd":
      // If the qty > 1
      const allButFoundProd = state.cart.filter(
        (prod) => prod.id !== action.payload.id
      );
      const prodFound = state.cart.filter(
        (prod) => prod.id === action.payload.id
      );

      if (prodFound[0].qty > 1) {
        return {
          ...state,
          cart: [
            ...allButFoundProd,
            {
              ...action.payload,
              qty: prodFound[0].qty - 1,
            },
          ],
        };
      } else {
        return {
          ...state,
          cart: [...allButFoundProd],
        };
      }

      return {
        ...state,
        cart: [
          ...allButFoundProd,
          {
            ...action.payload,
            qty: prodFound[0].qty + 1,
          },
        ],
      };
    // else qty == 1
    default:
      return state;
  }
};

export const store = createStore(storeReducer);
