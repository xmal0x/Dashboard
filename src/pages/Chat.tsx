import React, {useState} from 'react';
import {PageWrapper} from "../hoc";
import {useUserContext} from "../contexts/UserContextProvider";
import {ChatData} from "../types";
import {chatData} from "../constants";
import {ChatList, Messenger} from "../components";

const Chat = () => {
    const {id: userId} = useUserContext()

    const [activeChat, setActiveChat] = useState<ChatData | undefined>(undefined)
    const [chats, setChats] = useState(chatData)

    const handleSelectChat = (chat: ChatData) => {
        setActiveChat(chat)
    }

    const handleSend = (message: string) => {
        if (!activeChat) {
            return
        }

        const newChats = [...chats]

        newChats.forEach(chat => {
            if (chat.id === activeChat.id) {
                chat.messages.unshift({senderId: userId, dateTime: new Date(), message})
            }
        })

        setChats(newChats)
    }

    return (
        <div className="page__content flex h-[75vh]">
            <div className="flex flex-col lg:min-w-[24rem] md:min-w-[12rem] w-fit border-r border-stroke-gray">
                <ChatList chats={chats} setChats={setChats} onSetActiveChat={handleSelectChat}/>
            </div>

            <div className="flex-1 flex-between flex-col">
                {activeChat
                    ? <Messenger chat={activeChat} userId={userId} onSend={handleSend}/>
                    : (
                        <div className="flex-center justify-center h-full">
                            <p className="text-gray text-center">Select chat and start messaging</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PageWrapper(Chat, 'Chat')
