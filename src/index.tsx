import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MainContextProvider} from "./contexts/MainContextProvider";
import {ThemeContextProvider} from "./contexts/ThemeContextProvider";
import {UserContextProvider} from "./contexts/UserContextProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MainContextProvider>
            <ThemeContextProvider>
                <UserContextProvider>
                    <App/>
                </UserContextProvider>
            </ThemeContextProvider>
        </MainContextProvider>
    </React.StrictMode>
);
