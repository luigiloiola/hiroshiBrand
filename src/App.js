import React, { useState } from 'react'
import {AnimatePresence, useMotionValue} from 'framer-motion'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import HomePage from './elements/HomePage';
import NavBar from './elements/NavBar';
import Store from './elements/Store'
import {motion} from 'framer-motion'
import Projects from './elements/Projects';
import About from './elements/About';

function App() {

  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

  const location = useLocation();


  function handleMouse(e) {
      posX.set(e.pageX);
      

      posY.set(e.pageY);
  };

  const transition = {
    transition:{
      duration:0.6,
      ease:[1, 0.01, 0.4, 1.01]
    }
  }

  return (
    <div className="App" onMouseMove={handleMouse}>
      <AnimatePresence initial={false}>
        <NavBar/>
        <Routes location={location} key={useLocation().key}>
          <Route exact path='/' element={<HomePage mousePosX = {posX} mousePosY = {posY} transition = {transition} />}/>
          <Route path='/Store' element = {<Store transition={transition} />}/>
          <Route path='/Projects' element = {<Projects transition={transition} />}/>
          <Route path='/About' element = {<About transition={transition} />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
