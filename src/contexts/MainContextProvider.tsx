import React, {createContext, useContext, useState} from "react";

interface MainContext {
    activeSidebar: boolean
    setActiveSidebar: (value: boolean | ((prevState: boolean) => boolean)) => void
    activeThemeSettings: boolean
    setActiveThemeSettings: (value: boolean | ((prevState: boolean) => boolean)) => void
    handleSetPopovers: (value: keyof typeof navbarPopoversState) => void
    handleClosePopovers: () => void
    popovers: NavbarPopovers
    screenSize: number
    setScreenSize: (value: number) => void
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

const MainCtx = createContext<MainContext | null>(null)

export const MainContextProvider = ({children}: { children: React.ReactNode }) => {
    const [activeSidebar, setActiveSidebar] = useState(true)
    const [activeThemeSettings, setActiveThemeSettings] = useState(false)
    const [popovers, setPopovers] = useState(navbarPopoversState)
    const [screenSize, setScreenSize] = useState(0)

    const handleSetPopovers = (popover: keyof typeof navbarPopoversState) => setPopovers({
        ...navbarPopoversState,
        [popover]: !popovers[popover]
    })

    const handleClosePopovers = () => setPopovers(navbarPopoversState)

    return (
        <MainCtx.Provider value={{
            activeSidebar,
            setActiveSidebar,
            activeThemeSettings,
            setActiveThemeSettings,
            handleSetPopovers,
            handleClosePopovers,
            popovers,
            screenSize,
            setScreenSize
        }}>
            {children}
        </MainCtx.Provider>
    )
}

export const useMainContext = () => {
    const mainContext = useContext<MainContext | null>(MainCtx)

    if (!mainContext) {
        throw new Error(
            "MainContext has to be used within <MainContext.Provider>"
        );
    }

    return mainContext
}
