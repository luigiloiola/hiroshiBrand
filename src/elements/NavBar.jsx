import React, { Component, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Asset13 from './Asset13.svg'
import instagramLogo from './instagram-logo.svg'

export default function NavBar() {
    const navigate = useNavigate();
    let location = useLocation();

    const handleAdressHome = () => {
      navigate('/')
    }
    const [homePage, setHomePage] = useState(true)

    useEffect(()=>{
      if(location.pathname == '/') {
        setHomePage(true)
      }else{
        setHomePage(false)
      }
    },[location])

    return (
      <>
          {!homePage?(
            
            <a onClick={handleAdressHome}>
          <img src={Asset13} className='logo-corner'></img>
        </a>
          ):(<></>)}
        <div className='upper-navbar'><a style={{textDecoration:'underline'}} className='green' href='google.com'>Start a project</a></div>
        <header className='header'>
          <ul className='navBar'>
            <li><a>About</a></li>
            <li><a onClick={()=>navigate('/Projects')}>Projects</a></li>
            <li style = {{position:'relative'}}>
              <div style={{backgroundColor:'rgba(77, 255, 92,0.8)', width:'110%', height:'2px', position:'absolute',top:'50%', transform:'translate(-5% ,0)'}}></div>
              <a onClick={() => navigate('/Store')}>Store</a></li> 
            <li style={{margin:0, transform:'translateY(10%)'}} >
              <a href='https://www.linkedin.com/in/gabrielsumiya/?originalSubdomain=br'><svg fill='currentColor'  xmlns="http://www.w3.org/2000/svg" width="22" height='0.8rem' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </li>
            <li style={{margin:0, transform:'translateY(10%)'}}>
              <a href='https://www.linkedin.com/in/gabrielsumiya/?originalSubdomain=br'><img style={{color:'white'}} src={instagramLogo}></img></a>
            </li>
            <li style={{margin:0, transform:'translateY(10%)'}}>
              <a href='https://www.linkedin.com/in/gabrielsumiya/?originalSubdomain=br'><svg fill='currentColor'  xmlns="http://www.w3.org/2000/svg" width="22" height='0.8rem' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </li>
              

            
          </ul>
        </header>
      </>
    )
  }
