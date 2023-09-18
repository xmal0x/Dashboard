import {ChatItemProps} from "../../types";
import React from "react";

const ChatItem = ({chat, activeChat, onSelectChat}: ChatItemProps) => {
    return (
        <div
            className={`${chat.id === activeChat?.id && 'bg-light-gray'} flex-center cursor-pointer transition duration-150 justify-center hover:bg-light-gray md:p-2 mb-2 rounded`}
            onClick={() => onSelectChat(chat)}>
            <div className="relative">
                <img
                    src={chat.user.avatar}
                    alt="avatar"
                    className="w-10 h-10 object-contain rounded-full md:mr-2"
                />
                {chat.user.online && <span
                    className="w-3 h-3 absolute bottom-0 right-1.5 rounded-full bg-green-600 border-2 border-white"></span>}
            </div>
            <div className="w-3/4 md:block hidden">
                <p className="text-dark text-sm">{chat.user.name}</p>
                <p className="text-sm text-text-gray truncate">{chat.messages[0].message || 'Empty, start chatting?'}</p>
            </div>
        </div>
    )
}

export default ChatItem
