import React from 'react'
import Asset13 from './Asset13.svg'
import { useNavigate } from 'react-router-dom'

export default function Store() {
  const navigate = useNavigate();
  const handleAdress = () => {
    navigate('/')
  }
    return (
    <div style={{display:'flex', justifyItems:'center', alignItems:'center', height:'100%', width:'100%', justifyContent:'center'}}>
        
      <div className='center-container-store'>
        <h1>Coming soon!</h1>
        <div style={{opacity:0.7}}>Register below and we'll let you know!</div>
        <div style = {{display:'grid', gridTemplateColumns:'4fr 1.5fr', height:'6vh', marginTop:'7vh', width:'clamp(30vw, 65vh, 100vw)'}}>
            <input type='search' style={{borderRadius:'2px', zIndex:1}}></input>
            <span style={{fontSize:'max(2.2vh,0.7em)'}} ><button  style={{zIndex:2,backgroundColor:'rgb(77, 255, 92)',color:'black',transform:'translateX(-2px)' , height:'100%',width:'max(7em, 100%)', borderRadius:'1px', fontSize:'100%'}}>SUBMIT</button></span>
        </div>
      </div>
    </div>
    
  )
}

