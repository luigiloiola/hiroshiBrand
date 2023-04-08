import React, { useState } from 'react'
import {AnimatePresence, useMotionValue} from 'framer-motion'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import HomePage from './elements/HomePage';
import NavBar from './elements/NavBar';
import {motion} from 'framer-motion'

function App() {

  const posX = useMotionValue(0);
  const posY = useMotionValue(0);


  function handleMouse(e) {
      posX.set(e.pageX);
      posY.set(e.pageY);
  };

  return (
    <div className="App" onMouseMove={handleMouse}>
      <HomePage mousePosX = {posX} mousePosY={posY} ></HomePage>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
