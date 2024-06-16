import React,{useState} from "react";
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen,setIsOpen]=useState(false);
  const mob=window.innerWidth<=768?true:false;
  return <div className="header">
  <img src={Logo} alt="" className="logo"/>
  {(isOpen===false && mob===true)?(
    <img src={Bars} alt="" className="Bars" onClick={()=>setIsOpen(true)} style={{position:'fixed',right:'2rem',zIndex:'100'}}></img>):(<ul className="header-menu">
    <li >
    <Link onClick={()=>{setIsOpen(false)}}
    to="home"
    smooth={true}
    span={true}
    activeClass="active"
    >Home</Link>
    </li>
    <li >
    <Link onClick={()=>{setIsOpen(false)}}
    to="programs"
    smooth={true}
    span={true}>
    Programs
    </Link></li>
    <li >
    <Link onClick={()=>{setIsOpen(false)}}
    to="reasons" 
    smooth={true}
    span={true}>
    Why us
    </Link></li>
    <li >
    <Link onClick={()=>{setIsOpen(false)}}
    to="plans"
    smooth={true}
    span={true}>
    Plans
    </Link></li>
    <li >
    <Link 
    onClick={()=>{setIsOpen(false)}}
    to="testimonials"
    smooth={true}
    >Testimonials</Link>
    </li>
  </ul>)}


  </div>;
};

export default Header;
