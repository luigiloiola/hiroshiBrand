import React from 'react'
import Asset13 from './Asset13.svg'
import { useNavigate } from 'react-router-dom'
import broche from './Broche.png'
import moletas from './Moletas.png'
import pochete from './Pochete.png'

export default function Store() {
  const navigate = useNavigate();
  const handleAdress = () => {
    navigate('/')
  }
    return (
      <>
      <div style={{position:'absolute', width:'90vw', left:'5vw', height:'70vh', top:'15vh', display:'flex'}}>
        <div style={{height:'100%', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
          <img  src={broche} style={{height:'45%', filter:'blur(10px)'}}></img>
          <img  src={moletas} style={{height:'100%', filter:'blur(10px)'}}></img>
          <img  src={pochete} style={{height:'45%', filter:'blur(10px)'}}></img>
        </div>
      </div>
      <div style={{display:'flex', justifyItems:'center', alignItems:'center', height:'100%', width:'100%', justifyContent:'center'}}>
          
        <div className='center-container-store' style={{display:'flex', flexDirection:'column', alignContent:'center'}}>
          <h1 style={{opacity:0.9, alignSelf:'center'}}>Coming soon!</h1>
          <div style={{opacity:0.7}}>Register below and we'll let you know!</div>
          <div style = {{display:'grid', gridTemplateColumns:'4fr 1.5fr', height:'6vh', marginTop:'6vh', width:'clamp(30vw, 65vh, 100vw)', marginTop:'3%'}}>
              <input type='search' style={{borderRadius:'2px', zIndex:1}}></input>
              <span style={{fontSize:'max(2.2vh,0.7em)'}} ><button  style={{zIndex:2,backgroundColor:'rgb(77, 255, 92)',color:'black',transform:'translateX(-2px)' , height:'100%',width:'max(7em, 100%)', borderRadius:'1px', fontSize:'100%'}}>SUBMIT</button></span>
          </div>
        </div>
      </div>
      </>
    
  )
}

