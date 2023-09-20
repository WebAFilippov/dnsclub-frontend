import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from "./slices/darkModeSlice";
import visibleChatReducer from "./slices/visibleChatSlice";

export const store = configureStore({
  reducer: {
    theme: darkModeReducer,
    visibleChat: visibleChatReducer,
  },
  devTools: true,
});
