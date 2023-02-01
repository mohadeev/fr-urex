import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socketRedux: {},
};

export const seoSlice = createSlice({
  name: "seo-slice",
  initialState,
  reducers: {
    socketReduxRecuder: (state: any, action: any) => {
      state.socketRedux = action.payload;
      if (state.isSocket === false) {
        state.isSocket = true;
      }
    },
  },
});

export const { socketReduxRecuder } = seoSlice.actions;
const AllReducers = seoSlice.reducer;
export default AllReducers;
