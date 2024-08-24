import React, { useState } from 'react' 
import  '../styles/Menu.css'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import { Link } from 'react-router-dom'


//import logo from '../images/logo.png'

const Menu = () => {
    const[menuOpen,setMenuOpen]=useState(false)
  return (
    
    <section className='navigation'>
      <section className='logos'>
        <div style={{'display':'flex','width':'300px',}}>
          <img  src={logo1}/>
          <span><h4 style={{'padding-top': '50px'}}>Law Firm Of India</h4></span>
        </div>
        <div className='sub'>
          <img src={logo2}/>
          <img src={logo3}/>
        </div>
      </section>
      
      <nav>
        
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen)
            console.log("clkd")
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li className='listItem'>
                <Link to='/' className='active'>Home</Link>
                
            </li>
            <li className='listItem'>
                <Link to='/about'>About Us</Link>
            </li>
            <li className='listItem'>
                <Link to='/bearers'>Office Bearers</Link>
            </li>
            <li className='listItem'>
                <Link to='/ExMembers'>Member Info</Link>
            </li>
            <li className='listItem'>
                <Link to='/gallery'>Photo Gallery</Link>
                
            </li>
            <li className='listItem'>
                <Link to='/constitution'>Constitution</Link>
            </li>
            <li className='listItem'>
                <Link to='/payment'>Payment</Link>
            </li>
           
            <li className='listItem'>
                <Link to='/contact'>Contact</Link>
            </li>
            
        </ul>
      </nav>
    </section>
  )
}

export default Menu;
