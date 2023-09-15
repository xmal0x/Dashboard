import React, {FormEvent, useState} from 'react';
import {PageWrapper} from "../hoc";
import {avatar1, avatar2, avatar3, avatar4, avatar5, avatar6} from "../assets";
import {EllipsisHorizontalIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {useUserContext} from "../contexts/UserContextProvider";

interface Message {
    senderId: number,
    message: string,
    dateTime: Date
}

interface Chat {
    id: number
    user: {
        name: string
        id: number
    },
    avatar: string,
    online: boolean,
    messages: Message[]
}

const chatData: Chat[] = [
    {
        id: 1,
        user: {
            name: 'Henry Dholi',
            id: 1
        },
        avatar: avatar6,
        online: false,
        messages: [
            {senderId: 100, message: 'Possimus quae sapiente voluptas.', dateTime: new Date()},
            {senderId: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', dateTime: new Date()},
            {
                senderId: 1,
                message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis',
                dateTime: new Date()
            },
            {
                senderId: 100,
                message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.',
                dateTime: new Date()
            },
        ]
    },
    {
        id: 2,
        user: {
            name: 'Mariya Desoja',
            id: 2
        },
        avatar: avatar1,
        online: true,
        messages: [
            {
                senderId: 2,
                message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.',
                dateTime: new Date()
            },
            {senderId: 100, message: 'Possimus quae sapiente voluptas.', dateTime: new Date()},
            {
                senderId: 100,
                message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis',
                dateTime: new Date()
            },
            {senderId: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', dateTime: new Date()},
        ]
    },
    {
        id: 3,
        user: {
            name: 'Robert Jhon',
            id: 3
        },
        avatar: avatar5,
        online: false,
        messages: [
            {
                senderId: 100,
                message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis',
                dateTime: new Date()
            },
            {senderId: 100, message: 'Possimus quae sapiente voluptas.', dateTime: new Date()},
            {
                senderId: 3,
                message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.',
                dateTime: new Date()
            },
            {senderId: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', dateTime: new Date()},
        ]
    },
    {
        id: 4,
        user: {
            name: 'Cody Fisher',
            id: 4
        },
        avatar: avatar2,
        online: true,
        messages: [
            {senderId: 100, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', dateTime: new Date()},
            {senderId: 4, message: 'Possimus quae sapiente voluptas.', dateTime: new Date()},
            {
                senderId: 4,
                message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.',
                dateTime: new Date()
            },
            {
                senderId: 100,
                message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis',
                dateTime: new Date()
            },
        ]
    },
    {
        id: 5,
        user: {
            name: 'Cristofer Donin',
            id: 5
        },
        avatar: avatar4,
        online: true,
        messages: [
            {
                senderId: 5,
                message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.',
                dateTime: new Date()
            },
            {
                senderId: 5,
                message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis',
                dateTime: new Date()
            },
            {senderId: 100, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', dateTime: new Date()},
            {senderId: 5, message: 'Possimus quae sapiente voluptas.', dateTime: new Date()},
        ]
    },
    {
        id: 6,
        user: {
            name: 'Marcus Siphron',
            id: 6
        },
        avatar: avatar3,
        online: false,
        messages: [
            {
                senderId: 6,
                message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis',
                dateTime: new Date()
            },
            {senderId: 100, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', dateTime: new Date()},
            {senderId: 6, message: 'Possimus quae sapiente voluptas.', dateTime: new Date()},
            {
                senderId: 100,
                message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.',
                dateTime: new Date()
            },
        ]
    },
]

const Messages = () => {
    const {themeColor} = useThemeContext()
    const {id: userId} = useUserContext()

    const [activeChat, setActiveChat] = useState<Chat | undefined>(undefined)

    const handleSelectChat = (chat: Chat) => {
        setActiveChat(chat)
    }

    const handleSend = (e: FormEvent) => {
        if (!activeChat) {
            return
        }
    }


    return (
        <div className="page__content flex">
            <div className="flex flex-col w-2/5 border-r border-stroke-gray">
                <div className="flex flex-row justify-between items-center h-16 px-4 border-b border-stroke-gray">
                    <p className="text-dark">Active Conversations</p>
                    <span className="text-xs py-1 px-2 text-dark-gray bg-light-gray rounded">{chatData.length}</span>
                </div>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none py-1.5 px-2 bg-light-gray mb-6 rounded w-full"
                    />

                    {chatData.map(chat => (
                        <div key={chat.id}
                             className={`${chat.id === activeChat?.id && 'bg-light-gray'} flex items-center cursor-pointer transition duration-150 hover:bg-light-gray p-2 mb-2 rounded`}
                             onClick={() => handleSelectChat(chat)}>
                            <div className="relative">
                                <img
                                    src={chat.avatar}
                                    alt="avatar"
                                    className="w-10 h-10 object-contain rounded-full mr-2"
                                />
                                {chat.online && <span
                                    className="w-3 h-3 absolute bottom-0 right-1.5 rounded-full bg-green-600 border-2 border-white"></span>}
                            </div>
                            <div className="w-3/4">
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
                                <img src={activeChat?.avatar} alt="avatar"
                                     className="h-10 w-10 rounded-full mr-4 object-contain"/>
                                <div>
                                    <p className="text-dark">{activeChat?.user.name}</p>
                                    <p className="text-text-gray text-xs">Last visit: 2 hours ago</p>
                                </div>
                            </div>
                            <button><EllipsisHorizontalIcon className="h-6 w-6"/></button>
                        </div>

                        <div className="flex-1 flex items-end border-b border-stroke-gray ">
                            <div className="p-2 flex flex-col w-full">
                                {activeChat?.messages.map(message => (
                                    <div
                                        className={`${message.senderId === userId ? 'text-white text-right self-end' : 'text-dark text-left self-start'} w-fit md:max-w-[85%] lg:max-w-[75%] max-w-[95%] mb-4`}>
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
                    </>
                    : (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-gray">Select chat and start messaging</p>
                        </div>
                    )
                }
                <div className="h-16 flex items-center p-4 w-full">
                    <form onSubmit={handleSend} className="flex w-full">
                        <input
                            type="text"
                            placeholder="Type something here..."
                            className="flex-1 bg-light-gray outline-none py-1.5 px-2 rounded mr-4"
                        />
                        <button disabled={!activeChat} type="submit"
                                className={`flex items-center gap-2 p-2 rounded-md ${!activeChat && 'opacity-50'}`}
                                style={{backgroundColor: themeColor}}><span
                            className="text-white lg:block hidden">Send</span><PaperAirplaneIcon
                            className="w-5 h-5 object-contain text-white"/></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PageWrapper(Messages, 'Messages')
