import React from "react";
import {MessageProps} from "../../types";

const Message = ({message, userId, themeColor}: MessageProps) => {
    return (
        <div
            className={`${message.senderId === userId ? 'text-white text-right self-end' : 'text-dark text-left self-start'} md:max-w-[85%] lg:max-w-[75%] max-w-[95%] mb-4`}>
            <p
                className="rounded p-2 mb-1 text-sm"
                style={{backgroundColor: message.senderId === userId ? themeColor : '#EFF4FB'}}
            >
                {message.message}
            </p>
            <p className="text-gray text-xs">{message.dateTime.toLocaleDateString("en-US")}</p>
        </div>
    )
}

export default Message
