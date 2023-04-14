import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {motion} from 'framer-motion'
import reactDom from 'react-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));

reactDom.render(
  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();