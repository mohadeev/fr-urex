import socketSlice from "./socket-slice/socketSlice";
import VideoSlice from "./video-slice/VideoSlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import SideMenu from "./style-slice/menu/SideMenu";
import MainVideo from "./style-slice/video/MainVideo";
import GenrealStyle from "./style-slice/general-style/GenrealStyle";
import UserSignIn from "./user-slice/UserSignIn";
import ChannelSlice from "./channel-slice/ChannelSlice";
import tourSlice from "./tour-slice/tourSlice";
import imageSlice from "./image-slice/imageSlice";
import basketReducer from "./basket-slice/BasketSlice";
import UserSlice from "./UserSlice/UserSlice";

export const store = configureStore({
  reducer: {
    UserSlice: UserSlice,

    SideMenu,
    MainVideo,
    GenrealStyle,
    UserSignIn,
    ChannelSlice,
    VideoSlice,
    socketSlice,
    tourSlice,
    imageSlice,
    basketReducer,
  },
  middleware: [thunk],
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
