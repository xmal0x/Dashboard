import {MessengerProps} from "../types";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import React, {FormEvent, useState} from "react";
import {EllipsisHorizontalIcon, PaperAirplaneIcon} from "@heroicons/react/24/solid";
import {Message} from "./index";

const Messenger = ({userId, chat, onSend}: MessengerProps) => {
    const {themeColor} = useThemeContext()

    const [formData, setFormData] = useState({
        message: ''
    })

    const handleSend = (e: FormEvent) => {
        e.preventDefault()
        onSend(formData.message)
        setFormData({message: ''})
    }

    return (
        <>
            <div className="flex-between-center px-4 w-full h-16 border-b border-stroke-gray">
                <div className="flex-center">
                    <img src={chat?.user.avatar} alt="avatar"
                         className="h-10 w-10 rounded-full mr-4 object-contain"/>
                    <div>
                        <p className="text-dark md:text-sm text-xs mb-0.5">{chat?.user.name}</p>
                        <p className="text-text-gray text-xs flex-center">
                                        <span className={`w-2 h-2 rounded-full block mr-1`}
                                              style={{backgroundColor: chat.user.online ? '#10B981' : '#DC2626'}}></span>{chat.user.online ? 'Online' : 'Offline'}
                        </p>
                    </div>
                </div>
                <button><EllipsisHorizontalIcon className="h-6 w-6"/></button>
            </div>

            <div className="flex-1 flex items-end border-b border-stroke-gray overflow-auto">
                <div className="p-2 flex flex-col-reverse w-full overflow-auto max-h-[100%]">
                    {chat?.messages.map((message, index) => (
                        <Message message={message} userId={userId} themeColor={themeColor}
                                 key={message.message + '-' + message.dateTime + '-' + index}/>
                    ))}
                </div>
            </div>

            <div className="h-16 flex-center p-4 w-full">
                <form onSubmit={handleSend} className="flex w-full">
                    <input
                        type="text"
                        placeholder="Type something here..."
                        className="flex-1 bg-light-gray outline-none md:py-1.5 py-0.5 px-2 md:text-base text-sm rounded mr-4"
                        value={formData.message}
                        onChange={(e) => setFormData({message: e.target.value})}
                    />
                    <button disabled={!chat || !formData.message} type="submit"
                            className={`flex-center gap-2 p-2 rounded-md ${(!chat || !formData.message) && 'opacity-50'}`}
                            style={{backgroundColor: themeColor}}>
                        <PaperAirplaneIcon
                            className="w-5 h-5 object-contain text-white"/></button>
                </form>
            </div>
        </>
    )
}

export default Messenger
