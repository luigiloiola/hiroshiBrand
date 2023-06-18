import React, { useEffect, useRef, useState } from 'react'
import png from './004.png'
import {motion, useAnimate, useMotionValue, useTransform} from 'framer-motion'

function Cards(props) {

  const [hovering,setHovering] = useState(false);

  const [scope1, animate1] = useAnimate()
  const [scope2, animate2] = useAnimate()
  const [scope3, animate3] = useAnimate()
  const [scope4, animate4] = useAnimate()



  return (
    <motion.li className='video-card' ref={scope3} onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)} }>
      <div style={{height:'100%', width:'100%'}}>
        <img src={png} style={{width:'100%'}}></img>
      </div>
    </motion.li>
    
  )
}

export default Cards
