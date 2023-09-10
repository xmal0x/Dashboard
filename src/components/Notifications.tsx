import React from 'react';
import {Popover} from "./index";
import {useMainContext} from "../contexts/MainContextProvider";
import {notifications} from "../constants";

const Notifications = () => {
    const {handleClosePopovers} = useMainContext()

    //showLastLine()

    return (
        <Popover title="Notifications" handleClose={handleClosePopovers}>
            {notifications.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-2 justify-between items-start border-b
                    border-stroke-gray p-4 cursor-pointer hover:bg-light-gray">
                    <p className="text-sm text-dark-black">{item.text}</p>
                    <p className="text-xs text-gray">{item.date}</p>
                </div>
            ))}
        </Popover>
    );
};

export default Notifications;
