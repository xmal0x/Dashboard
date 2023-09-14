import React from 'react';
import {Button, Popover} from "./index";
import {useMainContext} from "../contexts/MainContextProvider";
import {messages} from "../constants";
import {menAvatar} from "../assets";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {Message} from "../types";
import {useNavigate} from "react-router-dom";

interface MessagePreviewProps {
    message: Message
    isNew?: boolean
}

const MessagePreview = ({message, isNew = false}: MessagePreviewProps ) => {
    const {themeColor} = useThemeContext()

    return (
        <div
            className="flex flex-col p-4 border-b border-stroke-gray gap-2 cursor-pointer hover:bg-light-gray">
            <div className="flex justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                    <img src={menAvatar} alt="avatar" className="rounded-full w-6 h-6 object-contain"/>
                    <p className="text-sm text-dark-black">{message.from}</p>
                </div>
                {isNew && <span className="w-2 h-2 rounded-full" style={{backgroundColor: themeColor}}></span>}
            </div>
            <p className="text-sm text-dark-black truncate">{message.message}</p>
            <p className="text-xs text-gray">{message.date}</p>
        </div>
    )
}

const Messages = () => {
    const {handleClosePopovers} = useMainContext()
    const navigate = useNavigate()

    const handleGoToMessage = () => {
        navigate('/messages')
        handleClosePopovers()
    }

    return (
        <Popover title="Messages" handleClose={handleClosePopovers}>
            <>
                {messages.map(message => (
                    <MessagePreview key={message.from} message={message} isNew={true}/>
                ))}
                <div className="p-3 flex flex-col">
                    <Button text="Go to messages" type="primary" onClick={handleGoToMessage}/>
                </div>
            </>
        </Popover>
    );
};

export default Messages;
