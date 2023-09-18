import {SidebarLinkProps} from "../../types";
import React from "react";
import {NavLink} from "react-router-dom";
import {ProLabel} from "../index";

const SidebarLink = ({link, title, enabled, onCloseSidebar}: SidebarLinkProps) => {

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkEnabled: boolean) => {
        if (linkEnabled) {
            return
        }

        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <li className="pl-8 flex gap-2 mb-3 w-full" onClick={onCloseSidebar} key={link}>
            <NavLink
                to={`/${link}`}
                onClick={(e) => handleLinkClick(e, enabled)}

                className={({isActive}) => `${enabled ? 'cursor-pointer hover:text-white' : 'cursor-not-allowed'} w-full ${isActive ? 'text-white-100' : 'text-gray'}`}
            >
                <div className="flex-between">
                    <span>{title}</span>
                    {!enabled && <ProLabel/>}
                </div>
            </NavLink>
        </li>
    )
}

export default SidebarLink
