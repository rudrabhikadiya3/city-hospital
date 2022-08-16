import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./actionType";
import { themeReducer } from "./reducer/themeReducer";

const initState = {
  theme: "light",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initState);

  const toggle_theme = (val) => {
    let changeTheme = val === "light" ? "dark" : "light";
    dispatch({ type: TOGGLE_THEME, payload: changeTheme });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        toggle_theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
