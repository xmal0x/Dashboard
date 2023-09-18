import {useThemeContext} from "../../contexts/ThemeContextProvider";
import {ButtonProps} from "../../types";

const Button = ({text, btnType = 'primary', onClick}: ButtonProps) => {
    const {themeColor} = useThemeContext()

    const isPrimary = btnType === 'primary'

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
