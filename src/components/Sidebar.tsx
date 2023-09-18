import React, {useCallback, useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {sideBarItems} from "../constants";
import {FireIcon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {ProLabel} from "./index";

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

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkEnabled: boolean) => {
        if(linkEnabled) {
           return
        }

        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <aside className="h-screen lg:p-10 md:p-6 p-4 text-white z-50">
            <div className="flex justify-between items-center">
                <Link to="/" onClick={handleCloseSidebar}
                      className="flex gap-2 font-medium tracking-tight text-3xl items-center">
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
                    <ol
                        key={item.title}
                        className="mb-8"
                    >
                        <div className="flex items-center mb-6">
                            <span className="w-6 h-6">{item.icon}</span>
                            <p className="capitalize text-white-100 text-xl ml-2">
                                {item.title}
                            </p>
                        </div>
                        {item.links.map(link => (
                            <li className="pl-8 flex gap-2 mb-3 w-full" onClick={handleCloseSidebar} key={link.link}>
                                <NavLink
                                    to={`/${link.link}`}
                                    onClick={(e) => handleLinkClick(e, link.enabled)}

                                    className={({isActive}) => `${link.enabled ? 'cursor-pointer hover:text-white': 'cursor-not-allowed'} w-full ${isActive ? 'text-white-100' : 'text-gray'}`}
                                >
                                    <div className="flex justify-between">
                                        <span>{link.title}</span>
                                        {!link.enabled && <ProLabel/>}
                                    </div>
                                </NavLink>
                            </li>
                        ))}

                    </ol>
                ))}
            </nav>

        </aside>
    );
};

export default Sidebar;
