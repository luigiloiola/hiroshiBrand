import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards'
import {motion} from 'framer-motion'

//TODO: generate cards automatically


function Projects() {

  const title = 'Cabana Burguer appetit appeal'
  const japTitle = 'オハヨヒロだ'
  const thumbnail = 'urlToThumbnail'
  const video = 'urlToVideo'
  
  const constraintsRef = useRef(null);



  
  return (
      <div className='center-container-projects'>
        <div id='recent-projects'>Recent Projects</div>
        <div className='hide-scrollbar' ref={constraintsRef} id='scroll' style={{width:'100vw', height:'100%', overflow:'scroll', position:'relative', marginLeft:'-5vw',}}>
            <motion.ul className='container-cards green' drag='x' style={{marginRight:'10vw', paddingLeft:'9vw', overflowY:'visible'}} dragConstraints={constraintsRef} dragElastic={0.5}  >
              <Cards video={video} title={title} japTitle={japTitle} thumbnail = {thumbnail}  />
              <Cards video={video} title={title} japTitle={japTitle} thumbnail = {thumbnail}  />
              <Cards video={video} title={title} japTitle={japTitle} thumbnail = {thumbnail}  />
              <Cards video={video} title={title} japTitle={japTitle} thumbnail = {thumbnail}  />
              <Cards video={video} title={title} japTitle={japTitle} thumbnail = {thumbnail}  />
            </motion.ul>
        </div>

      </div>
  )
}

export default Projects
