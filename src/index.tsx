import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MainContextProvider} from "./contexts/MainContextProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MainContextProvider>
            <App/>
        </MainContextProvider>
    </React.StrictMode>
);
