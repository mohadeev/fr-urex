import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: {},
  end: {},
  overview: "",
  title: "",
  price: "",
};

export const tourSlice = createSlice({
  name: "message-slice",
  initialState,
  reducers: {
    tourDataHandler: (state: any, action: any) => {
      const message = action.payload.message;
      const paylaod = action.payload.paylaod;
      const start = "start";
      const end = "end";
      const title = "title";
      const overview = "overview";
      const price = "price";
      if (message === start) {
        state.start = paylaod;
      } else if (message === end) {
        state.end = paylaod;
      } else if (message === title) {
        state.title = paylaod;
      } else if (message === overview) {
        state.overview = paylaod;
      } else if (message === price) {
        state.price = paylaod;
      } else if (message === "reset") {
        state.start = "";
        state.end = "";
      }
    },
  },
});

export const { tourDataHandler } = tourSlice.actions;
const AllReducers = tourSlice.reducer;
export default AllReducers;
