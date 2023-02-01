import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images100: [],
};

export const imageSlice = createSlice({
  name: "image-slice",
  initialState,
  reducers: {
    images100Ruducer: (state: any, action: any) => {
      state.images100.push(action.payload);
    },
  },
});

export const { images100Ruducer } = imageSlice.actions;
const AllReducers = imageSlice.reducer;
export default AllReducers;
