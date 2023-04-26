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
      animate1(scope1.current, {y:'15%'} ,{duration:0.3, ease:'easeInOut'},transition)
      animate2(scope2.current, {height:'83%'},{duration:0.3, ease:'easeInOut'})
      animate3(scope3.current, {y:'-10vh', height:'max(67.5vh, 25em)', scaleX:1.00},transition)
      //animate4(scope4.current, {y:'-5.2vh'},transition)
    } else{
      animate1(scope1.current, {y:0},{duration:0.3, ease:'easeInOut'})
      animate2(scope2.current, {height:'88%'},{duration:0.3, ease:'easeInOut'})  
      animate3(scope3.current, {y:0, height:'max(60vh, 23em)',scaleX:1.0},transition)
      //animate4(scope4.current, {y:'-50%'},transition)
    }
    
  })



  return (
    <motion.li className='video-card' ref={scope3} onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)} }>
        <div className='thumbnail' style={{height:'68%'}}>
          <div ref={scope2} style={{width:'94%', margin:'3% auto 0 auto',display:'flex',justifyContent:'center', height:'88%', overflow:'hidden', position:'relative'}}> 
            <img src={png} style={{}}></img>
          </div>
          <div ref={scope1} className='subtitle' style={{display:'grid', height:'12%', gridTemplateColumns:'6fr 1fr', alignItems:'center', position:'relative', transform:'translateY(-3%)'}}>
            <div className='logo-thumbnail'></div>
            <span  className='subtitle' style={{color:'black', justifySelf:'end', marginRight:'4%'}}>Lorem ipsum. amet hic quaera</span>
            <span style={{color:'black'}}>LOGO</span>
          </div>
        </div>
        <div className='card-title'>
          <div className='title-section' style={{display:'flex', flexDirection:'column', margin:'5%'}}>
            <div className='title-english'>{props.title}</div>
            <div className='title-japanise'>{props.japTitle}</div>
          </div>
            <span className='card-year'>©2022</span>
        </div>
    </motion.li>
    
  )
}

export default Cards
