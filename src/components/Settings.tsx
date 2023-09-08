import React from 'react';
import {useMainContext} from "../contexts/MainContextProvider";
import {themeColors} from "../constants";

const Settings = () => {
    const {setActiveThemeSettings} = useMainContext()

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
                                    className={`w-10 h-10 rounded-full bg-black`}
                                    onClick={() => {}}
                                >

                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Settings;
