import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <>
        <header className='header'>
          <ul className='navBar'>
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li style = {{position:'relative'}}>
              <div style={{backgroundColor:'rgba(77, 255, 92,0.8)', width:'110%', height:'1px', position:'absolute',top:'50%', transform:'translate(-5% ,0)'}}></div>
              <a>Store</a></li> 
            <li><a href='https://www.instagram.com/hiro.cine/'>LOGO LOGO</a></li>
          </ul>
        </header>
      </>
    )
  }
}

export default NavBar