import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards'
import {color, motion} from 'framer-motion'
//TODO: generate cards automatically


function Projects(props) {


  
  const constraintsRef = useRef(null);

  const [content, setContent] = useState([])

  const [count, setCount] = useState(0);


  const parentAnimation = {
    initial:{

    },

    animate:{
      transition:{
        staggerChildren:0.1,
        staggerDirection:1

      }
    },
    exit:{
      transition:{
        staggerChildren:0.1,
        staggerDirection:-1
      }
    }
  }

  const childrenAnimation ={
    initial:{
    x:'500vw',
  },
  animate:{
    x:0,
    transition:{
      duration:1.7,
      ease:[1, 0.01, 0.4, 1.01],
    }
  },
  exit:{
    x:'500vw',
    transition:{
      duration:0.4,
      ease:[1, 0.01, 0.4, 1.01],
    }
  }}

  const cardAnimation ={
    initial:{
    x:'500vw',
  },
  animate:{
    x:0,
    transition:{
      duration:1.5,
      ease:[1, 0.01, 0.4, 1.01],
    }
  },
  exit:{
    x:'200vw',
    transition:{
      duration:0.4,
      ease:[1, 0.01, 0.4, 1.01],
    }
  }}




  useEffect(() => {
    fetch('/cards-content.txt')
    .then(r => r.text())
    .then(text => {
      setContent(text.split("\n"));
    });
  }, []);
  return (
      <div className='center-container-projects'>
        <div id='recent-projects' >
          <motion.ul 
          variants={parentAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          style={{display:'flex', flexDirection:'row', fontSize:'0.2em', color:'rgb(255,255,255)', marginRight:'2vw'}}>
            <motion.li variants={childrenAnimation} className='rp-items' key={'1'} >Projetos Recentes</motion.li>
            <motion.li variants={childrenAnimation} className='rp-items' key={'2'}>Todos</motion.li>
            <motion.li variants={childrenAnimation} className='rp-items' key={'3'}>Em Produção</motion.li>
          </motion.ul>
        </div>
        <div className='hide-scrollbar' ref={constraintsRef} id='scroll' style={{width:'100vw', height:'100%', overflow:'scroll', position:'relative', marginLeft:'-5vw',}}>
            <motion.ul className='container-cards green' drag='x' style={{marginRight:'10vw', marginLeft:'-1vh', overflowY:'visible'}} dragConstraints={constraintsRef} dragElastic={0.5} 
            variants={parentAnimation}
            initial='initial'
            animate = 'animate'
            exit = 'exit'
            >
              {content.map((line, index)=>{
                const [title, japTitle, year] = line.split(',');
                return(
                <motion.div
                variants={childrenAnimation} 
                key={index}
                >
                  <Cards title={title} japTitle={japTitle} year={year} index={index}/>
                </motion.div>)
              })}
            </motion.ul>
        </div>
      </div>
  )
}

export default Projects