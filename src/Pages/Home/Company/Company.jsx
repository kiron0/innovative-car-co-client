import React from "react";
import Slider from "react-slick";
import "./Company.css";

const Company = () => {
  let settings = {
    infinite: false,
    speed: 3000,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="brands py-10 px-6">
      <div className="container mx-auto">
        <Slider {...settings}>
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-1.png"
            alt="brand"
            width={10}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-2.png"
            alt="brand"
            width={10}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-3.png"
            alt="brand"
            width={30}
            className="w-8"
          />{" "}
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-4.png"
            alt="brand"
            width={30}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-5.png"
            alt="brand"
            width={30}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-6.png"
            alt="brand"
            width={30}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-7.png"
            alt="brand"
            width={30}
            className="w-8"
          />{" "}
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-8.png"
            alt="brand"
            width={30}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-9.png"
            alt="brand"
            width={30}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-10.png"
            alt="brand"
            width={30}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-11.png"
            alt="brand"
            width={30}
            className="w-8"
          />
          <img
            src="https://red-parts.react.themeforest.scompiler.ru/themes/red/images/brands/brand-12.png"
            alt="brand"
            width={30}
            className="w-8"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Company;
