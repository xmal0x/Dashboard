import React from 'react';
import {BellAlertIcon, Bars3Icon, UserCircleIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {Notifications, Profile} from "./index";

interface NavButtonProps {
    icon: React.ReactNode
    title: string
    color: string
    dotColor?: string
    onClick: () => void
}

const NavButton = ({icon, onClick, title, dotColor, color}: NavButtonProps) => {
    return (
        <button
            className="relative rounded-full p-2 h-10 w-10 bg-amber-300 "
            style={{color}}
            title={title}
            onClick={onClick}
        >
            <span className="absolute w-3 h-3 top-1 rounded-full opacity-80" style={{backgroundColor: dotColor}}></span>
            {icon}
        </button>
    )
}

const iconClass: string = 'w-[25px] h-[25px] hover:scale-125 transition duration-300'

const Navbar = () => {
    const {setActiveSidebar, popovers, handleSetPopovers} = useMainContext()
    const {themeColor} = useThemeContext()

    return (
        <div className="relative flex justify-between items-center p-3 h-24">
            <NavButton icon={<Bars3Icon className={iconClass}/>} title="Menu" color={themeColor} onClick={() => setActiveSidebar((prev) => !prev)} />
        
            <div className="flex gap-3">
                <NavButton icon={<BellAlertIcon className={iconClass}/>} title="Notifications" color={themeColor} onClick={() => handleSetPopovers('notifications')} dotColor={themeColor} />
                <NavButton icon={<UserCircleIcon className={iconClass}/>} title="Profile" color={themeColor} onClick={() => handleSetPopovers('profile')} dotColor={themeColor} />
            </div>

            {popovers.profile && <Profile />}
            {popovers.notifications && <Notifications />}
        </div>
        
    );
};

export default Navbar;
