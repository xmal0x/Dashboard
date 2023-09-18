import {NavButtonProps} from "../../types";
import React from "react";

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

export default NavButton
