import { createSlice } from "@reduxjs/toolkit";

let visibleState;
const localStorageVisible = localStorage.getItem("visibleChat")

switch (localStorageVisible !== null && JSON.parse(localStorageVisible)) {
  case true:
    visibleState = true
    break;
  case false:
    visibleState = false
    break;
  default:
    visibleState = true
}

localStorageVisible === null ? visibleState = true : visibleState = false;

export const visibleChatSlice = createSlice({
  name: "visibleChat",
  initialState: {
    visible: visibleState,
  },
  reducers: {
    toggleVisible: (state) => {
      state.visible = !state.visible;
      state.visible ? JSON.stringify(localStorage.setItem("visibleChat", "true")) : JSON.stringify(localStorage.setItem("visibleChat", "false"))
    },
  },
});

export const { toggleVisible } = visibleChatSlice.actions;

export default visibleChatSlice.reducer;
