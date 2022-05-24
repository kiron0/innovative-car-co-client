import React from "react";
import banner from "../../../Assets/banner2.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-100 mt-16 lg:mt-0">
      <div className="hero-content flex-col lg:flex-row-reverse gap-y-12 lg:gap-x-32 py-12 lg:py-0">
        <img
          src={banner}
          className="lg:w-1/2 w-full lg:h-auto h-100 object-cover object-center rounded-lg"
          alt=""
        />
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
      </div>
    </div>
  );
};

export default Banner;
