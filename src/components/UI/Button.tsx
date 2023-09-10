import {useThemeContext} from "../../contexts/ThemeContextProvider";
import React from "react";

interface ButtonProps {
    text: string
    type: 'primary' | 'secondary'
    onClick: () => void
}

const Button = ({text, type, onClick}: ButtonProps) => {
    const {themeColor} = useThemeContext()

    const isPrimary = type === 'primary'

    return (
        <button
            type="button"
            className={`py-2 px-6 rounded hover:opacity-95 transition duration-300 ${isPrimary ? 'text-light-gray ' : 'text-dark-black border-stroke-gray border'}`}
            style={{backgroundColor: isPrimary ? themeColor : '#fff'}}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
