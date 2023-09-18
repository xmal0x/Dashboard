import React, {FormEvent, useState} from 'react';
import {PageWrapper} from "../hoc";
import {EllipsisHorizontalIcon, PaperAirplaneIcon} from "@heroicons/react/24/solid";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {useUserContext} from "../contexts/UserContextProvider";
import {ChatData} from "../types";
import {chatData} from "../constants";
import {FunnelIcon} from "@heroicons/react/20/solid";

const Chat = () => {
    const {themeColor} = useThemeContext()
    const {id: userId} = useUserContext()

    const [activeChat, setActiveChat] = useState<ChatData | undefined>(undefined)
    const [chats, setChats] = useState(chatData)
    const [formData, setFormData] = useState({
        message: ''
    })


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

    const handleSelectChat = (chat: ChatData) => {
        setActiveChat(chat)
    }

    const handleSend = (e: FormEvent) => {
        e.preventDefault()

        if (!activeChat) {
            return
        }

        const newChats = [...chats]

        newChats.forEach(chat => {
            if (chat.id === activeChat.id) {
                chat.messages.unshift({senderId: userId, dateTime: new Date(), message: formData.message})
            }
        })

        setChats(newChats)
        setFormData({message: ''})
    }


    return (
        <div className="page__content flex h-[75vh]">
            <div className="flex flex-col md:min-w-[24rem] border-r border-stroke-gray">
                <div className="flex flex-row justify-between items-center h-16 px-4 border-b border-stroke-gray">
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
                        <div key={chat.id}
                             className={`${chat.id === activeChat?.id && 'bg-light-gray'} flex items-center cursor-pointer transition duration-150 justify-center hover:bg-light-gray md:p-2 mb-2 rounded`}
                             onClick={() => handleSelectChat(chat)}>
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
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col justify-between">

                {activeChat ?
                    <>
                        <div className="flex justify-between px-4 w-full items-center h-16 border-b border-stroke-gray">
                            <div className="flex items-center">
                                <img src={activeChat?.user.avatar} alt="avatar"
                                     className="h-10 w-10 rounded-full mr-4 object-contain"/>
                                <div>
                                    <p className="text-dark md:text-sm text-xs mb-0.5">{activeChat?.user.name}</p>
                                    <p className="text-text-gray text-xs flex items-center">
                                        <span className={`w-2 h-2 rounded-full block mr-1`}
                                              style={{backgroundColor: activeChat.user.online ? '#10B981' : '#DC2626'}}></span>{activeChat.user.online ? 'Online' : 'Offline'}
                                    </p>
                                </div>
                            </div>
                            <button><EllipsisHorizontalIcon className="h-6 w-6"/></button>
                        </div>

                        <div className="flex-1 flex items-end border-b border-stroke-gray overflow-auto">
                            <div className="p-2 flex flex-col-reverse w-full overflow-auto max-h-[100%]">
                                {activeChat?.messages.map((message, index) => (
                                    <div
                                        key={message.message + '-' + message.dateTime + '-' + index}
                                        className={`${message.senderId === userId ? 'text-white text-right self-end' : 'text-dark text-left self-start'} md:max-w-[85%] lg:max-w-[75%] max-w-[95%] mb-4`}>
                                        <p
                                            className="rounded p-2 mb-1 text-sm"
                                            style={{backgroundColor: message.senderId === userId ? themeColor : '#EFF4FB'}}
                                        >
                                            {message.message}
                                        </p>
                                        <p className="text-gray text-xs">{message.dateTime.toLocaleDateString("en-US")}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-16 flex items-center p-4 w-full">
                            <form onSubmit={handleSend} className="flex w-full">
                                <input
                                    type="text"
                                    placeholder="Type something here..."
                                    className="flex-1 bg-light-gray outline-none md:py-1.5 py-0.5 px-2 md:text-base text-sm rounded mr-4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({message: e.target.value})}
                                />
                                <button disabled={!activeChat || !formData.message} type="submit"
                                        className={`flex items-center gap-2 p-2 rounded-md ${(!activeChat || !formData.message) && 'opacity-50'}`}
                                        style={{backgroundColor: themeColor}}>
                                    <PaperAirplaneIcon
                                        className="w-5 h-5 object-contain text-white"/></button>
                            </form>
                        </div>
                    </>
                    : (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-gray">Select chat and start messaging</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PageWrapper(Chat, 'Chat')
