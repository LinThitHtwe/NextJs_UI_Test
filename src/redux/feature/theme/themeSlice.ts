import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: any;
}

const themeInLocalStorage = () => {
  const storedTheme = localStorage.theme;
  return (
    storedTheme === "dark" ||
    (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

const initialState: ThemeState = {
  theme: themeInLocalStorage(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      console.log("theme");
      const currentTheme = localStorage.theme;
      if (
        currentTheme === "dark" ||
        (!currentTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      }
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
