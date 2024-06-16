import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whitetick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
    <div className="blur plans-blur"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whitetick} alt=""></img>
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <span style={{ fontSize: ".9rem" }}> See more benefits </span>
            <button style={{ padding: "0.5rem", fontWeight: "bold" }}>
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
