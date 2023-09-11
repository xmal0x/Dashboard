import React from 'react';
import {useMainContext} from "../contexts/MainContextProvider";
import {themeColors} from "../constants";
import {CheckIcon} from "@heroicons/react/24/outline";
import {useThemeContext} from "../contexts/ThemeContextProvider";

const ThemeSettings = () => {
    const {setActiveThemeSettings} = useMainContext()
    const {themeColor, setThemeColor} = useThemeContext()

    return (
        <>
            <div className="bg-black opacity-50 w-screen fixed inset-0" onClick={() => setActiveThemeSettings(false)}>
            </div>
            <div className="absolute right-0 top-0 bg-amber-300 h-screen w-96">
                <div className="flex flex-col p-3">
                    <h2 className="font-semibold mt-1 text-xl">SETTINGS</h2>

                    <div className="p-2 border-t border-amber-50 mt-5">
                        <h4 className="text-xl my-3">THEME COLOR</h4>
                        <div className="flex gap-2 flex-wrap">
                            {themeColors.map(item => (
                                <button
                                    type="button"
                                    className="w-12 h-12 rounded-full cursor-pointer"
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

                </div>
            </div>
        </>
    );
};

export default ThemeSettings;
