import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {sideBarItems} from "../constants";
import {FireIcon} from "@heroicons/react/24/solid";
import {XCircleIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";
import {useThemeContext} from "../contexts/ThemeContextProvider";

const Sidebar = () => {
    const {setActiveSidebar} = useMainContext()
    const {themeColor} =useThemeContext()

    return (
        <aside className="h-screen p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex gap-2 font-bold  text-xl items-center">
                    <FireIcon className="w-[25px] h-[25px]" style={{color: themeColor}}/>
                    <span>PORTY</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setActiveSidebar(false)}
                    className="rounded-full p-1 md:hidden block"
                    style={{backgroundColor: themeColor}}
                >
                    <XCircleIcon className="h-[25px] w-[25px] hover:scale-125 transition duration-300"/>
                </button>
            </div>

            <div className="mt-10">
                {sideBarItems.map(item => (
                    <div
                        key={item.title}
                    >
                        <p className="uppercase text-amber-900 text-xl mb-4">
                            {item.title}
                        </p>
                        {item.links.map(link => (
                            <NavLink
                                to={`/${link.link}`}
                                key={link.link}
                                className={({isActive}) => `flex items-center gap-2 cursor-pointer
                                hover:bg-[${themeColor}] hover:text-white p-3 rounded-md`}
                            >
                                <img src={link.icon} alt={link.title} className="object-contain w-[25px]"/>
                                <span>{link.title}</span>
                            </NavLink>
                        ))}

                    </div>
                ))}
            </div>

        </aside>
    );
};

export default Sidebar;
