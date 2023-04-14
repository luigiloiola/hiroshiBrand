import React, { useState } from 'react'
import {AnimatePresence, useMotionValue} from 'framer-motion'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import HomePage from './elements/HomePage';
import NavBar from './elements/NavBar';
import Store from './elements/Store'
import {motion} from 'framer-motion'
import Projects from './elements/Projects';

function App() {

  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

  const location = useLocation();


  function handleMouse(e) {
      posX.set(e.pageX);
      

      posY.set(e.pageY);
  };

  return (
    <div className="App" onMouseMove={handleMouse}>
      <NavBar/>
      <Routes location={location} key={useLocation().key}>
        <Route exact path='/' element={<HomePage mousePosX = {posX} mousePosY = {posY}/>}/>
        <Route path='/Store' element = {<Store/>}/>
        <Route path='/Projects' element = {<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
