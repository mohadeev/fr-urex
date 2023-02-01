import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  wishListBasket: [],
  cardBasket: [],
};
const persistConfig = {
  key: "root",
  storage: storage,
  type: "persist/PERSIST",
};

export const Basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.wishListBasket.push(action.payload);
    },

    removeFromWishList: (state, action) => {
      // const index = state.basket.indexOf(action.payload);
      const index = state.wishListBasket.findIndex(
        (basketItem) => basketItem._id === action.payload.id
      );
      if (index >= 0) {
        state.wishListBasket.splice(index, 1);
      }
    },
    addToBasket: (state, action) => {
      state.cardBasket.push(action.payload);
    },

    removeFromBasket: (state, action) => {
      // const index = state.basket.indexOf(action.payload);
      const index = state.cardBasket.findIndex(
        (basketItem) => basketItem._id === action.payload.id
      );
      if (index >= 0) {
        state.cardBasket.splice(index, 1);
      }
    },
  },
});

export const {
  addToWishList,
  removeFromWishList,
  addToBasket,
  removeFromBasket,
} = Basket.actions;

const AllReducers = Basket.reducer;
// export default Basket.reducer;
const basketReducer = persistReducer(persistConfig, AllReducers);

export default basketReducer;
