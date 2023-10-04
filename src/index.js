import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './Components/navbar';
import Compiler from './Components/Compiler';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <div className='p-3 h-screen w-screen'>
        <Navbar/>
        <Compiler/>
        </div>
);

