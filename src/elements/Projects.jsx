import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards'
import {motion} from 'framer-motion'
//TODO: generate cards automatically


function Projects() {


  
  const constraintsRef = useRef(null);

  const [content, setContent] = useState([])

  useEffect(() => {
    fetch('/cards-content.txt')
    .then(r => r.text())
    .then(text => {
      setContent(text.split("\n"));
    });
  }, []);

  return (
      <div className='center-container-projects'>
        <div id='recent-projects'>Recent Projects</div>
        <div className='hide-scrollbar' ref={constraintsRef} id='scroll' style={{width:'100vw', height:'100%', overflow:'scroll', position:'relative', marginLeft:'-5vw',}}>
            <motion.ul className='container-cards green' drag='x' style={{marginRight:'10vw', paddingLeft:'9vw', overflowY:'visible'}} dragConstraints={constraintsRef} dragElastic={0.5} >
              {content.map((line, index)=>{
                const [title, japTitle, year] = line.split(',');
                return(<Cards title={title} japTitle={japTitle} year={year} />)
              })}
            </motion.ul>
        </div>
      </div>
  )
}

export default Projects
