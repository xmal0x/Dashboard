import {XMarkIcon} from "@heroicons/react/24/outline";
import {PopoverProps} from "../../types";
import {Transition} from "@headlessui/react";

const Popover = ({children, title, handleClose, show}: PopoverProps) => {

    return (
        <Transition
            appear={true}
            show={show}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100 z-50"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100 z-50"
            leaveTo="opacity-0 z-50"
        >
            <div className="absolute top-24 right-2 w-72 border border-stroke-gray bg-white rounded-sm z-50">

                <div className="flex-between-center p-4">
                    <p className="text-dark-black text-base">{title}</p>
                    <button
                        type="button"
                        className="cursor-pointer rounded-full p-1 text-dark-gray hover:bg-light-gray transition duration-150"
                        onClick={handleClose}
                    >
                        <XMarkIcon className="w-4 h-4 object-contain"/>
                    </button>
                </div>

                <div className="border-t border-stroke-gray"></div>

                <div>
                    {children}
                </div>
            </div>
        </Transition>
    )
}

export default Popover
