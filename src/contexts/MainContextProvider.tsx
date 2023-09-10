import React, {createContext, useContext, useState} from "react";

interface MainContextType {
    activeSidebar: boolean
    setActiveSidebar: (value: boolean | ((prevState: boolean) => boolean)) => void
    activeThemeSettings: boolean
    setActiveThemeSettings: (value: boolean | ((prevState: boolean) => boolean)) => void
    handleSetPopovers: (value: keyof typeof navbarPopoversState) => void
    handleClosePopovers: () => void
    popovers: NavbarPopovers
}

interface NavbarPopovers {
    notifications: boolean
    profile: boolean
    messages: boolean
}

const navbarPopoversState: NavbarPopovers = {
    notifications: false,
    profile: false,
    messages: false
}

const MainContext = createContext<MainContextType | null>(null)

export const MainContextProvider = ({children}: { children: React.ReactNode }) => {
    const [activeSidebar, setActiveSidebar] = useState(true)
    const [activeThemeSettings, setActiveThemeSettings] = useState(false)
    const [popovers, setPopovers] = useState(navbarPopoversState)

    const handleSetPopovers = (popover: keyof typeof navbarPopoversState) => {
        setPopovers({...navbarPopoversState, [popover]: true})
    }

    const handleClosePopovers = () => setPopovers(navbarPopoversState)

    return (
        <MainContext.Provider value={{
            activeSidebar,
            setActiveSidebar,
            activeThemeSettings,
            setActiveThemeSettings,
            handleSetPopovers,
            handleClosePopovers,
            popovers
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
