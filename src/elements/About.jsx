import React from 'react'
import bandeiraHIRO from './bandeiraHIRO.png'
import aaa from './Sem_titulo-1.svg'
import hiro from './Layer-14.svg'
import hiroGatinho from './Layer 19.png'



//TODO: make everything responsive
//prob just use clamp() on everything


function About() {
  return (
    <div className='center'>
        
      
      <h1 style={{textAlign:'start', marginLeft:'5vw', fontSize:'clamp(1em, 5vh, 6em)', display:'flex', flexDirection:'column'}}>
        <div>We are Hiro.</div>
        <div>Creative Content Studio based in São Paulo, Brazil.</div>
        <div>New times demand new perspectives.</div> 
      </h1>
      <div style={{width:'100%', height:'90vh', backgroundColor:'whiteSmoke',alignItems:'center',justifyContent:'center', display:'grid',gridTemplateColumns:'1fr 8fr 1fr', gridTemplateRows:'1fr 8fr 1fr'}}>
        
        <div className='side-text' style={{gridArea:'1/2/2/3'}}>
          <div style={{color:'black'}}>@HIROFILMCO</div>
        </div>

        <div className='side-text' style={{gridArea:'2/3/3/4'}}>
        </div>

        <div className='side-text' style={{gridArea:'3/2/4/3'}}>
        </div>

        <div className='side-text' style={{gridArea:'2/1/3/2'}}>
          <img src={hiro} style={{position:'absolute', top:'0', left:'-1em'}} ></img>
        </div>

        <div className='regular' id='teaser-video-container' style={{width:'100%', height:'100%', backgroundColor:'black', gridArea:'2/2/3/3'}}>
          <img src="" style={{maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto'}} />
        </div>
      </div>

      <img src={aaa} style={{height:'1em'}}></img>

      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', height:'70vh', alignItems:'center', margin:'max(1em, 6vh) 8%', fontSize:'clamp(1em, 2.5vh, 5em)'}}>
        <div>
            <h2 style={{alignContent:'start', display:'flex', marginBottom:'0.8em'}}>
              <div>
                Forget about this &nbsp;"Audiovisual Producer"&nbsp; <span className='green' style={{whiteSpace:'normal'}}>  chitchat</span> <span>.</span>
              </div>
            </h2>
            <div className='thin' style={{textAlign:'start', opacity:0.65}}>
            We are a creative content producer, <br></br>
            we need to understand your challenged to make them ours.<br></br>
            The important thing is to impact the consumer, whether with stories on <br></br>
            or an advertising film on television. We believe in long-term relantionships, <br></br>
            in 4-hand construction, really the dynamics of each business, <br></br>
            to offer the best audiovisual solution for each moment,<br></br>
            in an agile, dynamic, collaborative way and with the best budget on the market.

            </div>
        </div>
        <div style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}>
            <img src={bandeiraHIRO} style={{display:'block', height:'100%', position:'absolute', left:'50%', transform:'translateX(-50%)'}} />
        </div>
      </div>

      <img src={aaa} style={{height:'1em'}}></img>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', margin:'6vh 8%'}}>
        <div>
          <h2 style={{fontSize:'max(1em, 5vh)', lineHeight:'100%', marginBottom:'1em'}}>
            DISCOVER YOUR <br></br> 
            POSSIBILITIES.
          </h2>
          <a style={{textDecoration:'underline', color:'rgb(77, 255, 92)'}}><div className='green' style={{fontSize:'max(1em, 2.7vh)'}}>Find what you need</div></a>
        </div>
          <ul className='thin-border regular' style={{fontSize:'1.8em'}}>
            <li>Branded Content</li>
            <li>Social Media</li>
            <li>Documentaries</li>
            <li>Motion Design</li>
            <li>3D Models</li>
            <li style={{borderBottom:'0.1em solid rgba(240,240,240,0.5)'}}>Content Strategy</li>
          </ul>
      </div>

      <img src={aaa} style={{height:'1em'}}></img>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
        <img src={hiroGatinho}></img>
        <div>
          <h2 >Your challenges are our challenges.</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corporis aspernatur ea consequatur nam voluptas obcaecati soluta atque architecto! Facilis laudantium dignissimos quaerat repudiandae dolore. Recusandae dignissimos sed est molestias.

          </div>
          <div>hiroshi Sumiya</div>
          <div>-Creative Director and Founder</div>
          
        </div>
      </div>
    </div>
  )
}

export default About
