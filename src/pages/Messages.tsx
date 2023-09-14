import React from 'react';
import {PageWrapper} from "../hoc";
import {menAvatar} from "../assets";
import {EllipsisHorizontalIcon} from "@heroicons/react/24/outline";
import {useThemeContext} from "../contexts/ThemeContextProvider";

const chatData = [
    {
        id: 1,
        user: {
            name: 'Henry Dholi',
            id: 1
        },
        avatar: menAvatar,
        online: false,
        messages: [
            {senderId: 100, message: 'Possimus quae sapiente voluptas.'},
            {senderId: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
            {senderId: 1, message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis'},
            {senderId: 100, message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.'},
        ]
    },
    {
        id: 2,
        user: {
            name: 'Mariya Desoja',
            id: 2
        },
        avatar: menAvatar,
        online: true,
        messages: [
            {senderId: 2, message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.'},
            {senderId: 100, message: 'Possimus quae sapiente voluptas.'},
            {senderId: 100, message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis'},
            {senderId: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        ]
    },
    {
        id: 3,
        user: {
            name: 'Robert Jhon',
            id: 3
        },
        avatar: menAvatar,
        online: false,
        messages: [
            {senderId: 100, message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis'},
            {senderId: 100, message: 'Possimus quae sapiente voluptas.'},
            {senderId: 3, message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.'},
            {senderId: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        ]
    },
    {
        id: 4,
        user: {
            name: 'Cody Fisher',
            id: 4
        },
        avatar: menAvatar,
        online: true,
        messages: [
            {senderId: 100, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
            {senderId: 4, message: 'Possimus quae sapiente voluptas.'},
            {senderId: 4, message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.'},
            {senderId: 100, message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis'},
        ]
    },
    {
        id: 5,
        user: {
            name: 'Cristofer Donin',
            id: 5
        },
        avatar: menAvatar,
        online: true,
        messages: [
            {senderId: 5, message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.'},
            {senderId: 5, message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis'},
            {senderId: 100, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
            {senderId: 5, message: 'Possimus quae sapiente voluptas.'},
        ]
    },
    {
        id: 6,
        user: {
            name: 'Marcus Siphron',
            id: 6
        },
        avatar: menAvatar,
        online: false,
        messages: [
            {senderId: 6, message: 'Asperiores dignissimos dolores eaque earum illum obcaecati perspiciatis'},
            {senderId: 100, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
            {senderId: 6, message: 'Possimus quae sapiente voluptas.'},
            {senderId: 100, message: 'Ea error eum facilis ipsam itaque magni maxime minus voluptatibus.'},
        ]
    },
]

const Messages = () => {
    const {themeColor} = useThemeContext()

    return (
        <div className="page__content flex">
            <div className="flex flex-col w-2/5 border-r border-stroke-gray">
                <div className="flex flex-row justify-between items-center h-16 px-4 border-b border-stroke-gray">
                    <p className="text-dark">Active Conversations</p>
                    <span className="text-xs py-1 px-2 bg-light-gray rounded">{chatData.length}</span>
                </div>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none p-1.5 bg-light-gray mb-6 rounded w-full"
                    />

                    {chatData.map(chat => (
                        <div key={chat.id} className="flex items-center mb-6">
                            <div className="relative">
                                <img
                                    src={chat.avatar}
                                    alt="avatar"
                                    className="w-10 h-10 object-contain rounded-full mr-2"
                                />
                                {chat.online && <span className="w-3 h-3 absolute bottom-0 right-1.5 rounded-full bg-green-600 border-2 border-white"></span>}
                            </div>
                            <div className="w-3/4">
                                <p className="text-dark text-sm">{chat.user.name}</p>
                                <p className="text-sm text-text-gray truncate">{chat.messages[0].message || 'Empty, start chatting?'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between px-4 w-full items-center h-16 border-b border-stroke-gray">
                    <div className="flex items-center">
                        <img src={menAvatar} alt="avatar" className="h-10 w-10 rounded-full mr-4 object-contain"/>
                        <div>
                            <p className="text-dark">Henry Dholi</p>
                            <p className="text-text-gray text-xs">Last visit: 2 hours ago</p>
                        </div>
                    </div>
                    <button><EllipsisHorizontalIcon className="h-6 w-6"/></button>
                </div>

                <div>CHAT</div>
            </div>
        </div>
    );
};

export default PageWrapper(Messages, 'Messages')
