import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});
