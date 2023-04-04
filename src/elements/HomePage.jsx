import React, { Component } from 'react'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';
import {styled} from "styled-components";



export default function HomePage() {

  //https://www.framer.com/motion/use-animate/
  const mainTextHovering = <div>
              <motion.h1
                animate={{
                  opacity :0,
                  duration:1}}
                  className='main-text'>Ohayo, we are Hiro</motion.h1>
                <motion.h1
                  animate ={{
                    opacity:1,
                    duration:1
                    }} 
                  className='jap green ohayo-jap'>オハヨヒロだ</motion.h1>
  </div>
  const mainTextPlain =<>
    <motion.h1
                    initial = {{
                      opacity:0
                    }}
                    animate={{
                      opacity :1,
                      duration:1}}
                      className='main-text'>Ohayo, we are Hiro</motion.h1>
                      
                      <motion.h1
                      initial = {{
                        opacity:1
                      }} 
                      animate ={{
                        opacity:0,
                        duration:1
                      }}
                      className='jap green ohayo-jap'>オハヨヒロだ</motion.h1>
  </>
  const [hovering, setHovering] = useState(false)
    return (
      <div className='homePage'>
        <div className='left-container'>
          <div className='inner-left-container'>
            <span id = 'hjg1' className='hiroshi-jap green jap'>ヒロシ</span>
            <span id = 'hjg2' className='hiroshi-jap green jap'>ヒロシ</span>
            <span id = 'lorem1'>Lorem ipsum dolor iores, t facilis deleniti repudiandae doloremque harum explicabo fugiat sapiente, qui possimus nostrum ea officia illum beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis saepe sunt vitae amet quaerat, nemo quasi voluptate cupiditate animi nat, autem.</span>
            <div id='HIRO'>HIRO</div>
          </div>
        </div>
        <div className='right-container'>
          <div className='right-inner-container'>
            <div className='back-hiroshi-jap-container'>
              <motion.div className='jap-text jap'>ヒ</motion.div>
              <motion.div className='jap-text jap'>ロ</motion.div>
              <motion.div className='jap-text jap' id='shi-jap'>シ</motion.div>
            </div>
            
            <div  onMouseEnter = {()=> setHovering(true)} onMouseLeave={()=>setHovering(false)} id='main-text-container' >
              {hovering ? (mainTextHovering):(mainTextPlain)}
            </div>
          </div>

        </div>
      </div>
    )
  }