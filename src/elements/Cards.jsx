import React, { useEffect, useRef, useState } from 'react'
import png from './004.png'
import {motion, useAnimate, useMotionValue, useTransform} from 'framer-motion'

function Cards(props) {

  const [hovering,setHovering] = useState(false);

  const [scope1, animate1] = useAnimate()
  const [scope2, animate2] = useAnimate()
  const [scope3, animate3] = useAnimate()
  const [scope4, animate4] = useAnimate()

  const transition = {duration:0.1, ease:'easeInOut'}


  useEffect(()=>{
    if(hovering) {
      //animate1(scope1.current, {} ,{duration:0.3, ease:'easeInOut'},transition)
      //animate2(scope2.current, {height:'83%'},{duration:0.3, ease:'easeInOut'})
      //animate3(scope3.current, {y:'-1.5vh', scale:1.05, width:'48vh', margin:'2.2vh'},transition)
      //animate4(scope4.current, {y:'-5.2vh'},transition)
    } else{
      //animate1(scope1.current, {y:0},{duration:0.3, ease:'easeInOut'})
      //animate2(scope2.current, {height:'88%'},{duration:0.3, ease:'easeInOut'})  
      //animate3(scope3.current, {y:0, scale:1,width:'45vh', margin:'1.5vh'},transition)
      //animate4(scope4.current, {y:'-50%'},transition)
    }
    
  })



  return (
    <motion.li className='video-card' ref={scope3} onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)} }>
      <div style={{height:'100%', width:'100%'}}>
        <img src={png} style={{width:'100%'}}></img>
      </div>
    </motion.li>
    
  )
}

export default Cards
