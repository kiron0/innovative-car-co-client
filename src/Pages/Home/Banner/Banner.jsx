import React from "react";
import Fade from "react-reveal/Fade";
import banner from "../../../Assets/banner2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-base-300 mt-16 lg:mt-0"
      style={{ clipPath: `ellipse(300% 100% at 210.5% 0%)` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-y-12 lg:gap-x-32 py-12 lg:py-0">
        <Fade right distance="20px">
          <img
            src={banner}
            className="lg:w-1/2 w-full lg:h-auto h-100 object-cover object-center rounded-lg"
            alt=""
          />
        </Fade>
        <Fade left distance="30px">
          <div className="lg:w-1/2 w-full lg:py-20 mb-6 lg:mb-0">
            <h1 className="text-5xl font-bold mb-2">
              Find Parts That Fit Your Vehicle
            </h1>
            <p className="py-8">
              Toptul, GoodYear, Staneley, Venus, JCB, Ajaj, Taparia, Eastman and
              much more!
            </p>
            <button className="btn btn-primary text-white rounded px-10">
              Explore
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
