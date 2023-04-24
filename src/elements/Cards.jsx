import React from 'react'
import png from './004.png'

function Cards(props) {
  return (
    <li className='video-card'>
        <div className='thumbnail' style={{overflow:'hidden', height:'68%'}}>
          <div className='logo-thumbnail'></div>
          <div style={{width:'94%', margin:'3% auto 0 auto',display:'flex',justifyContent:'center', height:'85%', overflow:'hidden', position:'relative'}}> 
            <img src={png} style={{}}></img>
          </div>
          <div className='subtitle' style={{display:'grid', height:'12%', gridTemplateColumns:'6fr 1fr', alignItems:'center'}}>
            <span style={{color:'black', fontSize:'1.2vh', fontFamily:'Helvetica', fontWeight:600, justifySelf:'end'}}>Lorem ipsum. sectetur non nesciunt amet hic quaera</span>
            <span style={{color:'black'}}>LOGO</span>
          </div>
        </div>
        <div className='card-title' >
          <div className='title-section' style={{display:'flex', flexDirection:'column', margin:'5%'}}>
            <div className='title-english'>{props.title}</div>
            <div className='title-japanise'>{props.japTitle}</div>
          </div>
            <span className='card-year'>©2022</span>
        </div>
    </li>
    
  )
}

export default Cards
