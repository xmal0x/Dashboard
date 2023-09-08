import React from 'react';
import {BellAlertIcon, Bars3Icon, UserCircleIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";

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
            className="relative rounded-full p-2 bg-amber-300 "
            style={{color}}
            title={title}
            onClick={onClick}
        >
            <span className="absolute w-3 h-3 top-1 rounded-full" style={{backgroundColor: dotColor}}></span>
            {icon}
        </button>
    )
}

const iconClass: string = 'w-[25px] h-[25px] hover:scale-125 transition duration-300'

const Navbar = () => {
    const {setActiveSidebar} = useMainContext()

    return (
        <div className="relative flex justify-between p-3">
            <NavButton icon={<Bars3Icon className={iconClass}/>} title="Menu" color="blue" onClick={() => setActiveSidebar((prev) => !prev)} />
        
            <div className="flex gap-3">
                <NavButton icon={<BellAlertIcon className={iconClass}/>} title="Notifications" color="blue" onClick={() => {}} dotColor="blue" />
                <NavButton icon={<UserCircleIcon className={iconClass}/>} title="Profile" color="blue" onClick={() => {}} dotColor="blue" />
            </div>
        </div>
        
    );
};

export default Navbar;
