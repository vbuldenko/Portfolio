import React, {createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider ({ children }) {
    const defaultTheme = () => localStorage.getItem("color_scheme") || "light";
    const [theme, setTheme] = useState(defaultTheme);
    function toggleTheme (){
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }
    
    useLayoutEffect(() => {
        localStorage.setItem("color_scheme", theme);
        if (theme === "light") {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        } else if (theme === "dark") {
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
        } 
    }, [theme]);
  
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
};

export { ThemeProvider, useTheme };