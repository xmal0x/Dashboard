import React, {useCallback, useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {sideBarItems} from "../constants";
import {FireIcon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";
import {useThemeContext} from "../contexts/ThemeContextProvider";

const Sidebar = () => {
    const {setActiveSidebar, setScreenSize, screenSize} = useMainContext()
    const {themeColor} = useThemeContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        if (screenSize <= 1100) {
            setActiveSidebar(false)
        } else {
            setActiveSidebar(true)
        }
    }, [screenSize]);

    const handleCloseSidebar = useCallback(() => {
        if (screenSize <= 1100) {
            setActiveSidebar(false)
        }
    }, [screenSize, setActiveSidebar]);

    return (
        <aside className="h-screen lg:p-10 md:p-6 p-4 text-white">
            <div className="flex justify-between items-center">
                <Link to="/" onClick={handleCloseSidebar}
                      className="flex gap-2 font-medium tracking-tight text-3xl items-center">
                    <FireIcon className="w-[40px] h-[40px]" style={{color: themeColor}}/>
                    <span>PortyAdmin</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setActiveSidebar(false)}
                    className="rounded-full p-0.5 lg:hidden block"
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
                            <li className="ml-8 flex gap-2 mb-3" onClick={handleCloseSidebar} key={link.link}>
                                <NavLink
                                    to={`/${link.link}`}

                                    className={({isActive}) => `cursor-pointer hover:text-white ${isActive ? 'text-white-100' : 'text-gray'}`}
                                >
                                    <span>{link.title}</span>
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
