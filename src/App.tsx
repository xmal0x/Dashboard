import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {settings} from "./assets";
import {Analytics, ECommerce, Inbox, Marketing, Messages, Settings} from "./pages";
import {useMainContext} from "./contexts/MainContextProvider";
import {Navbar, Sidebar, ThemeSettings} from "./components";
import {useThemeContext} from "./contexts/ThemeContextProvider";


function App() {
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
                        <div className="w-80 fixed bg-dark z-50">
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
                <div className={`${activeSidebar ? 'md:ml-80' : 'flex-1'} w-full min-h-screen bg-white-100`}>
                    <Navbar/>

                    <div className="md:mt-0 mt-20">
                        {activeThemeSettings && <ThemeSettings/>}

                        <Routes>
                            <Route path="/" element={<ECommerce/>}/>
                            <Route path="/ecommerce" element={<ECommerce/>}/>
                            <Route path="/analytics" element={<Analytics/>}/>
                            <Route path="/marketing" element={<Marketing/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/messages" element={<Messages/>}/>
                            <Route path="/inbox" element={<Inbox/>}/>
                        </Routes>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
