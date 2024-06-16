import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 2 };
  const [selected, setSelected] = useState(0);
  const handleRightClick = () => {
    selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
  };
  const handleLeftClick = () => {
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
  };
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          -{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        ></motion.img>
        <motion.div
          initial={{ opacity: 0, x: "-100" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <div className="arrows">
          <img src={leftArrow} alt="" onClick={handleLeftClick}></img>
          <img src={rightArrow} alt="" onClick={handleRightClick}></img>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
