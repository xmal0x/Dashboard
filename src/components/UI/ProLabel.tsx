import React from 'react';
import {useThemeContext} from "../../contexts/ThemeContextProvider";

const ProLabel = () => {
    const {themeColor} = useThemeContext()

    return (
        <div className="text-white text-xs py-0.5 px-1 rounded self-center" style={{backgroundColor: themeColor}}>
            Pro
        </div>
    );
};

export default ProLabel;
