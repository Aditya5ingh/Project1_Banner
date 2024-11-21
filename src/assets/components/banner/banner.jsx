import React from "react";
import "./banner.css";
import shoe_image from "../../images/shoe_image.png";
import amazon from "../../images/amazon.png";
import flipkart from "../../images/flipkart.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="left-banner">
        <div className="top-left">
          <h1>Your Feet deserve the best</h1>
        </div>
        <div className="bottom-left">
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <button className="but1">Shop Now</button>
          <button className="but2">Category</button>
          <div className="gotoLink">
            <h6>Also available on</h6>
            <div className="mentionLink">
              <img src={flipkart} alt="" />
              <img src={amazon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-banner">
        <img src={shoe_image} alt="shoe image" />
      </div>
    </div>
  );
}
