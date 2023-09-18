import {Button, MessagePreview, Popover} from "./index";
import {messages, users} from "../constants";
import {useNavigate} from "react-router-dom";
import {NavPopupProps} from "../types";

const MessagesNotifications = ({onClose}: NavPopupProps) => {
    const navigate = useNavigate()

    const handleGoToMessage = () => {
        navigate('/chat')
        onClose()
    }

    return (
        <Popover title="Messages" handleClose={onClose}>
            {messages.map(message => (
                <MessagePreview key={message.message + '-' + message.dateTime}
                                sender={users.find(u => u.id === message.senderId)} message={message} isNew={true}/>
            ))}
            <div className="p-3 flex flex-col">
                <Button text="Go to chat" btnType="primary" onClick={handleGoToMessage}/>
            </div>
        </Popover>
    );
};

export default MessagesNotifications;
