import React, {createContext, useContext, useState} from "react";

interface ThemeContext {
    themeColor: string
    setThemeColor: (color: string | ((prev: string) => string)) => void
}

const ThemeContext = createContext<ThemeContext | null>(null)

export const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
    const [themeColor, setThemeColor] = useState('#1A97F5')

    return (
        <ThemeContext.Provider value={{
            themeColor,
            setThemeColor
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const themeContext = useContext(ThemeContext)

    if(!themeContext) {
        throw new Error(
            "ThemeContext has to be used within <ThemeContext.Provider>"
        );
    }

    return themeContext
}
