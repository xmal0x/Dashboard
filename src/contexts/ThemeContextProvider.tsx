import React, {createContext, useContext, useEffect, useState} from "react";

interface ThemeContext {
    themeColor: string
    setThemeColor: (color: string | ((prev: string) => string)) => void
}

const ThemeCtx = createContext<ThemeContext | null>(null)

export const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
    const [themeColor, setThemeColor] = useState('#1A97F5')

    return (
        <ThemeCtx.Provider value={{
            themeColor,
            setThemeColor
        }}>
            {children}
        </ThemeCtx.Provider>
    )
}

export const useThemeContext = () => {
    const themeContext = useContext(ThemeCtx)

    if(!themeContext) {
        throw new Error(
            "ThemeContext has to be used within <ThemeContext.Provider>"
        );
    }

    return themeContext
}
