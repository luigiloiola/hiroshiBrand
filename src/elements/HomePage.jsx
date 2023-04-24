import React, { Component } from 'react'
import {useLocation} from 'react-router-dom'
import {motion, useAnimate, useMotionValue, useTransform, useSpring ,easeOut, spring} from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import {styled} from "styled-components";
import Asset1 from './Asset1.svg'

export default function HomePage(props) {
//https://framerbook.com/animation/example-animations/26-tracking-the-cursor/


  //const windowSizeX = useRef([window.innerWidth, window.innerHeight]).current[0]
  const windowSizeY = useRef([window.innerWidth, window.innerHeight]).current[1]

  const [windowSizeX, setWindowSizeX] = useState(window.innerWidth)

  const springOptions = {damping:30,stiffness:100, restDelta:0.001}




  const [scope, changeOpacity] = useAnimate();
  const [scopeBackground, scale] = useAnimate();

  //animation for 'ohayo we are hiro'

  


  const springY = useSpring(useTransform(props.mousePosY, [0,windowSizeY/2,windowSizeY/2,windowSizeY],[-15, -7, -7, 0]),springOptions);

  //animations for 'hiroshi-jap'
  const springBackX = useSpring(useTransform(props.mousePosX, [0,windowSizeX/2,windowSizeX/2,windowSizeX],[-(windowSizeX/100)*0.4, 0, 0, (windowSizeX/100 )*0.4]), springOptions);
  const springBackY = useSpring(useTransform(props.mousePosY, [0,windowSizeX/2,windowSizeX/2,windowSizeX],[-10, 0, 0, 10]),springOptions);

  let location = useLocation();



  useEffect(()=>{
    if(hovering){
    //animations for .main-text and .ohayo-jap
      changeOpacity('h1' ,{opacity:0} ,{duration:0.3})
      changeOpacity('div', {opacity:1} ,{duration:0.3})

      //animations for .jap-text
      scale(scopeBackground.current, {scale:1.1}, {duration:0.2, ease:'easeOut'})
    } else{

      changeOpacity('h1', {opacity:1}, {duration:0.4})
      changeOpacity('div', {opacity:0}, {duration:0.3})


      scale(scopeBackground.current, {scale:1},{duration:0.2, ease:'easeOut'})
    }
  })


  const [hovering, setHovering] = useState(false)
    return (
      <div className='homePage'>
        <div className='left-container'>
          <motion.div style = {{height:'100%', width:'100%', display:'flex', 

          x:
            useSpring(useTransform(props.mousePosX, [0,windowSizeX/2,windowSizeX/2,windowSizeX],[-4, 0, 0, 4]), {stiffness:20, damping:16})
            }}>
            <motion.img className='hiro-homePage' src={Asset1}></motion.img>
          </motion.div>
        </div>
        <div className='right-container'>
          <div className='right-inner-container'>
            <div ref={scopeBackground} className='back-hiroshi-jap-container'>
              <motion.div style={{x:springBackX, y:springBackY}} className='jap-text jap'>ヒ</motion.div>
              <motion.div style={{x:springBackX, y:springBackY}} className='jap-text jap' >ロ</motion.div>
              <motion.div style={{x:springBackX, y:springBackY}} className='jap-text jap' id='shi-jap'>シ</motion.div>
            </div>
            
            <motion.div style={{
              x:
            useSpring(useTransform(props.mousePosX,
              [0,windowSizeX/2,windowSizeX/2,windowSizeX],
              [-(windowSizeX/100)*0.5,0 ,0 ,(windowSizeX/100)*0.5 ]),
              springOptions)
              , y:springY}} ref ={scope} onMouseEnter = {()=> setHovering(true)} onMouseLeave={()=>setHovering(false)} id='main-text-container' >
              <h1 className='main-text'>Ohayo, we are Hiro</h1>
              <div className='jap green ohayo-jap'>オハヨヒロだ</div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }