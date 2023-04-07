import { Header } from './components/Header';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header>
            <App />
        </Header>
    </React.StrictMode>
);
