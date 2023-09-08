import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {settings} from "./assets";
import {About, Home} from "./pages";
import {useMainContext} from "./contexts/MainContextProvider";
import {Navbar, Settings, Sidebar} from "./components";
import {useThemeContext} from "./contexts/ThemeContextProvider";


function App() {
    // const activeSideBar = true

    const {activeSidebar, activeThemeSettings, setActiveThemeSettings} = useMainContext()
    const {themeColor} = useThemeContext()

    return (
        <BrowserRouter>
            <div className="flex relative">

                {/*Settings Button*/}
                <div className="fixed bottom-4 right-4 z-50">
                    <button
                        type="button"
                        className="p-2 rounded-full cursor-pointer hover:drop-shadow-md"
                        style={{backgroundColor: themeColor}}
                        onClick={() => setActiveThemeSettings(prevState => !prevState)}>
                        <img
                            src={settings}
                            alt="settings"
                            className="object-contain w-[25px] h-[25px] hover:scale-125 transition duration-300"/>
                    </button>
                </div>

                {/*SideBar*/}
                {activeSidebar
                    ? (
                        <div className="w-72 fixed bg-amber-200 z-50">
                            <Sidebar/>
                        </div>
                    )
                    : (
                        <div className="w-0">
                            <Sidebar/>
                        </div>
                    )
                }

                {/*Content*/}
                <div className={`${activeSidebar ? 'md:ml-72' : 'flex-1'} w-full min-h-screen bg-amber-700`}>
                    <div className="fixed md:static w-full bg-amber-950 text-white">
                        <Navbar/>
                    </div>

                    <div>

                        {activeThemeSettings && <Settings/>}

                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
