import React from 'react';
import {
    Bars3Icon,
    BellIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {MessagesNotification, Notifications, Profile} from "./index";
import {useUserContext} from "../contexts/UserContextProvider";
import {NavButtonProps} from "../types";

const NavButton = ({icon, onClick, title, dotColor, hasNew = false}: NavButtonProps) => {
    return (
        <button
            className="relative rounded-full p-2 h-10 w-10 bg-light-gray text-dark-gray"
            title={title}
            onClick={onClick}
        >
            {(hasNew && dotColor) && <span className="absolute w-3.5 h-3.5 top-0 right-0.5 rounded-full bg-white">
                <span className="absolute top-0.5 rounded-full right-0.5 w-2.5 h-2.5"
                      style={{backgroundColor: dotColor}}>
                </span>
            </span>}
            {icon}
        </button>
    )
}

const iconClass: string = 'w-6 h-6 hover:scale-125 transition duration-300'

const Navbar = () => {
    const {setActiveSidebar, popovers, handleSetPopovers} = useMainContext()
    const {themeColor} = useThemeContext()
    const {firstName, lastName, position, image} = useUserContext()

    return (
        <nav className="fixed md:static w-full bg-white border-b border-stroke-gray z-30">
            <div className="relative flex justify-between items-center p-3 h-20 mx-2">
                <NavButton icon={<Bars3Icon className={iconClass}/>} title="Menu"
                           onClick={() => setActiveSidebar((prev) => !prev)}/>

                <div className="flex-1 flex flex-row gap-2 mx-6">
                    <MagnifyingGlassIcon className="w-[24px] h-[24px] text-gray"/>
                    <input
                        type="text"
                        className="outline-none w-full"
                        placeholder="Type to search..."
                    />
                </div>

                <div className="flex md:gap-3 gap-2 items-center">
                    <NavButton icon={<BellIcon className={iconClass}/>} title="Notifications"
                               onClick={() => handleSetPopovers('notifications')} dotColor={themeColor}/>
                    <NavButton icon={<ChatBubbleOvalLeftEllipsisIcon className={iconClass}/>} title="Messages"
                               onClick={() => handleSetPopovers('messages')} dotColor={themeColor} hasNew={true}/>
                    <div className="flex items-center md:ml-5 ml-1 cursor-pointer gap-3"
                         onClick={() => handleSetPopovers('profile')}>
                        <div className="flex-col md:flex hidden">
                            <p className="text-sm text-dark-black whitespace-nowrap">{firstName} {lastName}</p>
                            <p className="text-xs text-gray">{position}</p>
                        </div>
                        <img
                            src={image}
                            className="object-contain w-12 h-12 rounded-full"
                            alt="avatar"
                        />
                        <ChevronDownIcon className="w-4 h-4 text-dark-gray"/>
                    </div>
                </div>

                {popovers.profile && <Profile/>}
                {popovers.notifications && <Notifications/>}
                {popovers.messages && <MessagesNotification/>}
            </div>
        </nav>
    );
};

export default Navbar;
