import React from 'react';
import {themeColors} from "../constants";
import {CheckIcon} from "@heroicons/react/24/outline";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {PageWrapper} from "../hoc";

const Settings = () => {
    const {setThemeColor, themeColor} = useThemeContext()

    return (
            <div className="page__content p-4">
                <h4 className="text-xl mb-4">Theme color</h4>
                <div className="flex sm:justify-start sm:gap-4 justify-between flex-wrap">
                    {themeColors.map(item => (
                        <button
                            key={item.id}
                            type="button"
                            className="sm:w-12 mb-1 sm:h-12 w-10 h-10 rounded-full cursor-pointer"
                            style={{backgroundColor: item.color}}
                            onClick={() => setThemeColor(item.color)}
                            title={item.name}
                        >
                            <CheckIcon
                                color="white"
                                strokeWidth={3}
                                className={`h-[25px] w-full ${themeColor === item.color ? 'block' : 'hidden'}`}/>
                        </button>
                    ))}
                </div>
            </div>
    );
};

export default PageWrapper(Settings, 'Settings');
