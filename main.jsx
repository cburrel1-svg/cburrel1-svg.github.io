import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import {AuthProvider} from './context/AuthorContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*Wrap app w/the AuthProvider*/}
        <AuthProvider>
             <App />
        </AuthProvider>
       
    </React.StrictMode>
);