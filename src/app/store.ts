import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "features/Photo/components/photoSlice";
import UserReducer from "./userSlice";

const rootReducer = {
  photos: photoReducer,
  user: UserReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
