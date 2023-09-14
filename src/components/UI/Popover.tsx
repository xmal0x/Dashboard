import React from "react";
import {XMarkIcon} from "@heroicons/react/24/outline";

interface PopoverProps {
    children: React.ReactNode
    title: string
    handleClose: () => void
}



const Popover = ({children, title, handleClose}: PopoverProps) => {
    return (
        <div className="absolute top-24 right-2 w-72 border border-stroke-gray bg-white rounded-sm z-50">
            <div className="flex justify-between p-4 items-center">
                <p className="text-dark-black text-base">{title}</p>
                <button
                    type="button"
                    className="cursor-pointer rounded-full p-1 text-dark-gray hover:bg-light-gray transition duration-150"
                    onClick={handleClose}
                >
                    <XMarkIcon className="w-4 h-4"/>
                </button>
            </div>
            <div className="border-t border-stroke-gray"></div>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Popover
