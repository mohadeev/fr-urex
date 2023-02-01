import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  WindowHeight: 800,
  popUpp: false,
  popUppData: {},
  signUp: true,
  formSignUp: false,
};

export const GeneralStyle = createSlice({
  name: "general-style",
  initialState,
  reducers: {
    WindowHeightRedcuer: (state: any, action: any) => {
      state.WindowHeight = action.payload;
    },
    poPUppRedcuer: (state: any, action: any) => {
      if (!state.popUpp) {
        state.popUpp = true;
        state.popUppData = action.payload.data;
      } else {
        state.popUpp = false;
      }
    },
    reducerFormSignUp: (state: any, action: any) => {
      state.formSignUp = action.paylaod;
    },

    reducerSignUp: (state: any, action: any) => {
      state.signUp = action.paylaod;
    },
  },
});

export const {
  WindowHeightRedcuer,
  poPUppRedcuer,
  reducerSignUp,
  reducerFormSignUp,
} = GeneralStyle.actions;
const AllReducers = GeneralStyle.reducer;
export default AllReducers;
