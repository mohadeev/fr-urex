import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MenuBoolean: false,
  ModalContainer: false,
};

export const SideMenu = createSlice({
  name: "side-menu",
  initialState,
  reducers: {
    ToggleMenu: (state: any) => {
      state.MenuBoolean = !state.MenuBoolean;
    },
    ModalContainerTrue: (state: any) => {
      state.ModalContainer = true;
    },
    ModalContainerFalse: (state: any) => {
      state.ModalContainer = false;
    },
  },
});

export const { ToggleMenu, ModalContainerTrue, ModalContainerFalse } =
  SideMenu.actions;
const AllReducers = SideMenu.reducer;
export default AllReducers;
