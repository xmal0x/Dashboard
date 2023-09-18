import React, {useCallback, useEffect} from 'react';
import {Link} from "react-router-dom";
import {sideBarItems} from "../constants";
import {FireIcon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {SidebarChapter} from "./index";

const Sidebar = () => {
    const {setActiveSidebar, setScreenSize, screenSize} = useMainContext()
    const {themeColor} = useThemeContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [setScreenSize]);

    useEffect(() => {
        if (screenSize <= 1300) {
            setActiveSidebar(false)
        } else {
            setActiveSidebar(true)
        }
    }, [screenSize, setActiveSidebar]);

    const handleCloseSidebar = useCallback(() => {
        if (screenSize <= 1300) {
            setActiveSidebar(false)
        }
    }, [screenSize, setActiveSidebar]);


    return (
        <aside className="h-screen lg:p-10 md:p-6 p-4 text-white z-50">
            <div className="flex-between-center">
                <Link to="/" onClick={handleCloseSidebar}
                      className="flex-center gap-2 font-medium tracking-tight text-3xl">
                    <FireIcon className="w-[40px] h-[40px]" style={{color: themeColor}}/>
                    <span>PortyAdmin</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setActiveSidebar(false)}
                    className="rounded-full p-0.5 xl:hidden block"
                >
                    <XMarkIcon className="h-[25px] w-[25px] hover:scale-125 transition duration-300"/>
                </button>
            </div>

            <h2 className="mt-10 text-xl text-gray">MENU</h2>

            <nav className="mt-4">
                {sideBarItems.map(item => (
                    <SidebarChapter key={item.title} {...item} onCloseSidebar={handleCloseSidebar}/>
                ))}
            </nav>

        </aside>
    );
};

export default Sidebar;
