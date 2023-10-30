import { configureStore } from "@reduxjs/toolkit";

import auth from "./slices/AuthSlice"

export const store = configureStore({
  reducer: {
    auth
  },
  devTools: true,
});
