import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {sideBarItems} from "../constants";
import {FireIcon} from "@heroicons/react/24/solid";
import {XCircleIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";

const Sidebar = () => {
    const {setActiveSidebar} = useMainContext()

    return (
        <aside className="h-screen p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex gap-2 font-bold  text-xl items-center">
                    <FireIcon className="w-[25px] h-[25px]" style={{color: 'blue'}}/>
                    <span>PORTY</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setActiveSidebar(false)}
                    className="bg-blue-700 rounded-full p-1 md:hidden block"
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
                                hover:bg-blue-700 hover:text-white p-3 rounded-md`}
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
