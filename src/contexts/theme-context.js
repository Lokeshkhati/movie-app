import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "dark" });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };
