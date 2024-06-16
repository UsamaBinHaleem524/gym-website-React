import React from 'react'
import './reasons.css';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
    <div className='left-r'>
     <img src={image1} alt=''></img>
     <img src={image2} alt=''></img>
     <img src={image3} alt=''></img>
     <img src={image4} alt=''></img>
    </div>
    <div className='right-r'>
    <span>Some Reasons</span>
    <div className='text'>
        <span className='stroke-text'>Why</span>
        <span> choose us?</span>
    </div>
    <div className='list'>
    <div>
        <img src={tick} alt=''></img>
        <span>Over 3+ Expert coaches</span>
    </div>
    <div>
        <img src={tick} alt=''></img>
        <span>Train smarter and harder</span>
    </div>
    <div>
        <img src={tick} alt=''></img>
        <span>1 free program for new member</span>
    </div>
    <div>
        <img src={tick} alt=''></img>
        <span>reliable partners</span>
    </div>
    </div>
    <span 
    style={{color:'gray', fontWeight:'normal'}}>Our Partners</span>
    <div className='images-list'>
        <img src={nb} alt=''></img>
        <img src={adidas} alt=''></img>
        <img src={nike} alt=''></img>
    </div>
    </div>
    </div>
  )
}

export default Reasons
