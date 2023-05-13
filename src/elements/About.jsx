import React from 'react'
import bandeiraHIRO from './bandeiraHIRO.png'



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
      <div style={{width:'100%', height:'90vh', backgroundColor:'whiteSmoke',alignItems:'center',justifyContent:'center', display:'flex'}}>
        <div className='regular' id='teaser-video-container' style={{width:'85%', height:'80%', backgroundColor:'black', position:'relative'}}>
          <img src="" style={{maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto'}} />
          <div style={{position:'absolute'}}>DemoReel</div>
          <div style={{position:'absolute', right:'0px'}}>@HIROFILMCO</div>
          <div style={{position:'absolute', left:'calc(100%)', transform:'rotate(90deg) translate(50%, 100%) '}}>japLorem</div>
        </div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', height:'70vh', alignItems:'center', margin:'6vh 8%', fontSize:'clamp(1em, 2.5vh, 5em)'}}>
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
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
        <div>
          <h2>
            DISCOVER YOUR POSSIBILITIES.
          </h2>
          <div className='green'>find what you need</div>
        </div>
        <ul className='thin-border'>
          <li>Branded Content</li>
          <li>Social Media</li>
          <li>Documentaries</li>
          <li>Motion Design</li>
          <li>3D Models</li>
          <li>Content Strategy</li>
        </ul>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
        <img></img>
        <div>
          <h2>Your challenges are our challenges.</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corporis aspernatur ea consequatur nam voluptas obcaecati soluta atque architecto! Facilis laudantium dignissimos quaerat repudiandae dolore. Recusandae dignissimos sed est molestias.

          </div>
          <div>hiroshi Sumiya</div>
          <div>-Creative Director and Founder</div>
        </div>

    </div>
  )
}

export default About
