import React from 'react';
import {Popover} from "./index";
import {notifications} from "../constants";
import {NavPopupProps} from "../types";

const Notifications = ({onClose, show}: NavPopupProps) => {
    return (
        <Popover title="Notifications" handleClose={onClose} show={show}>
            {notifications.map(({id, text, date}) => (
                <div
                    key={id}
                    className="flex-between flex-col gap-2 items-start border-b
                    border-stroke-gray p-4 cursor-pointer hover:bg-light-gray">
                    <p className="text-sm text-dark-black">{text}</p>
                    <p className="text-xs text-gray">{date}</p>
                </div>
            ))}
        </Popover>
    );
};

export default Notifications;
