import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "theme",
  initialState: {
    mode_theme: JSON.parse(localStorage.getItem("mode_theme")) || "default",
    color_theme: JSON.parse(localStorage.getItem("color_theme")) || 'light',
  },
  reducers: {
    toggleMode: (state, actions) => {
      state.mode_theme = actions.payload;
    },
    toggleDarkMode: (state, actions) => {
      state.color_theme = actions.payload;
    },
  },
});

export const { toggleMode, toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
