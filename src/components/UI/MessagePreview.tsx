import {MessagePreviewProps} from "../../types";
import {useThemeContext} from "../../contexts/ThemeContextProvider";

const MessagePreview = ({message, sender, isNew = false}: MessagePreviewProps) => {
    const {themeColor} = useThemeContext()

    return (
        <div
            className="flex flex-col p-4 border-b border-stroke-gray gap-2 cursor-pointer hover:bg-light-gray">
            <div className="flex-between-center">
                <div className="flex-center flex-row gap-2">
                    <img src={sender?.avatar} alt={sender?.name} className="rounded-full w-6 h-6 object-contain"/>
                    <p className="text-sm text-dark-black">{sender?.name}</p>
                </div>
                {isNew && <span className="w-2 h-2 rounded-full" style={{backgroundColor: themeColor}}></span>}
            </div>
            <p className="text-sm text-dark-black truncate">{message.message}</p>
            <p className="text-xs text-gray">{message.dateTime.toLocaleDateString("en-EN")}</p>
        </div>
    )
}

export default MessagePreview
