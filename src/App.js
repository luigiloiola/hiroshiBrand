import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import HomePage from './elements/HomePage';
import NavBar from './elements/NavBar';
import {motion} from 'framer-motion'

function App() {


  

  return (
    <div className="App">
      <HomePage></HomePage>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
