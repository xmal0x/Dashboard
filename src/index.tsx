import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MainContextProvider} from "./contexts/MainContextProvider";
import {ThemeContextProvider} from "./contexts/ThemeContextProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MainContextProvider>
            <ThemeContextProvider>
                <App/>
            </ThemeContextProvider>
        </MainContextProvider>
    </React.StrictMode>
);
