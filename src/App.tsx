import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Analytics, Chat, ECommerce, Inbox, Marketing, Settings} from "./pages";
import {useMainContext} from "./contexts/MainContextProvider";
import {Navbar, Sidebar} from "./components";


function App() {
    const {activeSidebar} = useMainContext()

    return (
        <BrowserRouter>
            <div className="flex relative">
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
                <div
                    className={`${activeSidebar ? 'xl:ml-80' : 'flex-1'} w-full min-h-screen bg-white-100`}>
                    <Navbar/>

                    <div className="md:mt-0 mt-20">
                        <Routes>
                            <Route path="/" element={<ECommerce/>}/>
                            <Route path="/ecommerce" element={<ECommerce/>}/>
                            <Route path="/analytics" element={<Analytics/>}/>
                            <Route path="/marketing" element={<Marketing/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/chat" element={<Chat/>}/>
                            <Route path="/inbox" element={<Inbox/>}/>
                        </Routes>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
