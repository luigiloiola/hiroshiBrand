import React, { Component } from 'react'
import {motion, useAnimate, easeIn} from 'framer-motion'
import { useState, useEffect } from 'react';
import {styled} from "styled-components";



export default function HomePage() {

  const [scope, changeOpacity] = useAnimate()
  const [scopeBackground, scale] = useAnimate()

  useEffect(()=>{
    if(hovering){
      changeOpacity('h1' ,{opacity:0} ,{duration:0.5})
      changeOpacity('div', {opacity:1, y:'-50%'} ,{duration:0.5})
      scale(scopeBackground.current, {y:'-50%'})
      scale(scopeBackground.current, {scale:1.2}, {duration:0.4, ease:'easeOut'})
    } else{
      changeOpacity('h1', {opacity:1}, {duration:0.4})
      changeOpacity('div', {opacity:0}, {duration:0.4})
      scale(scopeBackground.current, {duration:0, y:'-50%'})
      scale(scopeBackground.current, {scale:1},{duration:0.4, ease:'easeOut'})

    }

  })




  const [hovering, setHovering] = useState(false)
    return (
      <div className='homePage'>
        <div className='left-container'>
          <div ref={scope} className='inner-left-container'>
            <span id = 'hjg1' className='hiroshi-jap green jap'>ヒロシ</span>
            <span id = 'hjg2' className='hiroshi-jap green jap'>ヒロシ</span>
            <span id = 'lorem1'>Lorem ipsum dolor iores, t facilis deleniti repudiandae doloremque harum explicabo fugiat sapiente, qui possimus nostrum ea officia illum beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis saepe sunt vitae amet quaerat, nemo quasi voluptate cupiditate animi nat, autem.</span>
            <div id='HIRO'>HIRO</div>
          </div>
        </div>
        <div className='right-container'>
          <div className='right-inner-container'>
            <div ref={scopeBackground} className='back-hiroshi-jap-container'>
              <motion.div  className='jap-text jap'>ヒ</motion.div>
              <motion.div className='jap-text jap'>ロ</motion.div>
              <motion.div className='jap-text jap' id='shi-jap'>シ</motion.div>
            </div>
            
            <div  ref = {scope} onMouseEnter = {()=> setHovering(true)} onMouseLeave={()=>setHovering(false)} id='main-text-container' >
              <h1 className='main-text'>Ohayo, we are Hiro</h1>
              <div className='jap green ohayo-jap'>オハヨヒロだ</div>
            </div>
          </div>

        </div>
      </div>
    )
  }