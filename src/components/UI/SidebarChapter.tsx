import {SidebarChapterProps} from "../../types";
import React from "react";
import {SidebarLink} from "../index";

const SidebarChapter = ({title, icon, links, onCloseSidebar}: SidebarChapterProps) => {
    return (
        <ol
            className="mb-8"
        >
            <div className="flex-center mb-6">
                <span className="w-6 h-6">{icon}</span>
                <p className="capitalize text-white-100 text-xl ml-2">
                    {title}
                </p>
            </div>
            {links.map(link => (
                <SidebarLink {...link} onCloseSidebar={onCloseSidebar} key={link.link}/>
            ))}

        </ol>
    )
}

export default SidebarChapter
