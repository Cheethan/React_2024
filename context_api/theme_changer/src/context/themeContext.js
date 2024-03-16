import {createContext, useContext, useState} from "react";

export const themeContext = createContext({
    theme: "Light",
    setTheme: () => {}
})

export const ThemeProvider = themeContext.Provider

export default function useTheme(){
    return useContext(themeContext);    
}