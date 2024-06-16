import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='blur footer-blur1'></div>
    <div className='blur footer-blur2'></div>
     <hr/>
     <div className='footer'>
     <div className='social-links'>
       <img src={Github} alt=''></img>
       <img src={Instagram} alt=''></img>
       <img src={Linkedin} alt=''></img>
       </div>
     <div className='logo'>
         <img src={Logo} alt=''></img>
     </div>
     </div>
    </div>
  )
}

export default Footer
