import React, {createContext, useContext, useState} from "react";

interface MainContextType {
    activeSidebar: boolean
    setActiveSidebar: (value: boolean | ((prevState: boolean) => boolean)) => void
    activeThemeSettings: boolean
    setActiveThemeSettings: (value: boolean | ((prevState: boolean) => boolean)) => void
}

const MainContext = createContext<MainContextType | null>(null)

export const MainContextProvider = ({children}: { children: React.ReactNode }) => {
    const [activeSidebar, setActiveSidebar] = useState(true)
    const [activeThemeSettings, setActiveThemeSettings] = useState(true)

    return (
        <MainContext.Provider value={{
            activeSidebar,
            setActiveSidebar,
            activeThemeSettings,
            setActiveThemeSettings
        }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    const mainContext = useContext<MainContextType | null>(MainContext)

    if (!mainContext) {
        throw new Error(
            "MainContext has to be used within <MainContext.Provider>"
        );
    }

    return mainContext
}
