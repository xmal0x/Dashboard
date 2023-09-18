import {ChatListProps} from "../types";
import React, {useState} from "react";
import {chatData} from "../constants";
import {FunnelIcon} from "@heroicons/react/20/solid";
import {ChatItem} from "./index";

const ChatList = ({chats, setChats, onSetActiveChat}: ChatListProps) => {
    const [query, setQuery] = useState('')

    const handleQuery = (val: string) => {
        const value = val.trim().toLowerCase()

        if (value !== '') {
            const filteredData = chatData.filter(chat => chat.user.name.toLowerCase().includes(value) || chat.messages.find(m => m.message.toLowerCase().includes(value)))
            setChats(filteredData)
        } else {
            setChats(chatData)
        }

        setQuery(value)
    }
    return (
        <>
            <div className="flex-between-center flex-row h-16 px-4 border-b border-stroke-gray">
                <p className="text-dark md:block hidden">Active Conversations</p>
                <div className="relative p-1 cursor-pointer" title="Click to clear filters"
                     onClick={() => handleQuery('')}>
                    <span className="text-xs py-1 px-2 text-dark-gray bg-light-gray rounded">{chats.length}</span>
                    {query.length > 0 &&
                        <FunnelIcon className="w-3 h-3 object-contain text-green-600 absolute top-0.5 right-0"/>}
                </div>
            </div>
            <div className="md:p-4 p-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none py-1.5 px-2 bg-light-gray mb-6 rounded w-full md:block hidden"
                    value={query}
                    onChange={(e) => handleQuery(e.target.value)}
                />

                {chats.map(chat => (
                    <ChatItem chat={chat} onSelectChat={onSetActiveChat} key={chat.id}/>
                ))}
            </div>
        </>
    )
}

export default ChatList
