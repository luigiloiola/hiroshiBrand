import React from 'react'
import Asset13 from './Asset13.svg'
import { useNavigate } from 'react-router-dom'

export default function Store() {
  const navigate = useNavigate();
  const handleAdress = () => {
    navigate('/')
  }
    return (
    <div style={{display:'flex', justifyItems:'center', alignItems:'center', height:'100%', width:'100%'}}>
        
      <div className='center-container-store'>
        <h1>Coming soon!</h1>
        <div style={{opacity:0.7}}>Register below and we'll let you know!</div>
        <div style = {{display:'grid', gridTemplateColumns:'4fr 1fr'}}>
            <input type='search'></input>
            <span><button style={{backgroundColor:'rgb(77, 255, 92)', height:'100%', width:'100%'}}>submit</button></span>
        </div>
      </div>
    </div>
    
  )
}

