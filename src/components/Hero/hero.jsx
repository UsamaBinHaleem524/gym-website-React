import React from "react";
import "./hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";

import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition={type:'spring',duration:2}
  return (
    <div className="hero" id="home">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/*the best add*/}
        <div className="the-best-add">
       <motion.div initial={{left:window.innerWidth<=768?'210px':'238px'}}
       whileInView={{left:'8px'}}
       transition={{...transition,type:'tween'}}
       >
          
       </motion.div>
          <span>The best fitness gym in your area</span>
        </div>

         {/*Hero heading*/}
         <div className="hero-text" >
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to the fullest</span>
          </div>
         </div>

         {/*Figures*/}
        <div className="figures">
         <div>
          <span>
            <NumberCounter start={70} end={130} delay='4' preFix="+" />
          </span>
          <span>Expert Coaches</span>
         </div>
         <div>
         <span>
         <NumberCounter start={70} end={100} delay='4' preFix="+" />
         </span>
          <span>Members Joined</span>
         </div>
         <div>
         <span>
         <NumberCounter start={50} end={90} delay='4' preFix="+" />
         </span>
         <span>fitness programs</span>
         </div>
         </div>
         
         {/* Buttons */}
         <div className="hero-buttons">
           <button className="btn">Get Started</button>
           <button className="btn">Learn More</button>
         </div>

         </div>
      <div className="right-h">
      <button className="btnr">Join Now</button>
      <motion.div className="heart-rate" initial={{right:'-1rem'}}
      whileInView={{right:'4rem'}}
      transition={{...transition,type:'tween'}}
      >  
        <img src={Heart} alt=''></img>
        <span>Heart Rate</span>
        <span> 120 bpm</span>
        </motion.div>
      <img src={hero_image} alt="" className="hero-image"></img> 
      <motion.img
      initial={{right:'12rem'}}
      whileInView={{right:'23rem'}}
      transition={{...transition,type:'tween'}} 
      src={hero_image_back} alt="" className="hero-image-back"></motion.img>
       {/* Calories Section */}
       <motion.div
       initial={{right:'37rem'}}
       whileInView={{right:'28rem'}}
       transition={{...transition,type:'tween'}}
        className="calories">
         <img src={Calories} alt=""></img>
         <div className="calories-txt">
         <span>Calories Burned</span>
         <span>220 kcal</span>
         </div>

       </motion.div>
      </div>
    </div>
  );
};

export default Hero;
