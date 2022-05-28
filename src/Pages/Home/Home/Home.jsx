import React from "react";
import useTitle from "../../../hooks/useTitle";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Company from "../Company/Company";
import GetInTouch from "../GetInTouch/GetInTouch";
import Hero from "../Hero/Hero";
import OrderStep from "../OrderStep/OrderStep";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";
import StatisticCounter from "../StatisticCounter/StatisticCounter";
import Teams from "../Team/Teams";

const Home = () => {
  useTitle("Home Page");
  return (
    <>
      <Banner></Banner>
      <Hero></Hero>
      <Parts></Parts>
      <StatisticCounter></StatisticCounter>
      <Reviews></Reviews>
      {/* <CountDown></CountDown> */}
      <Teams></Teams>
      <OrderStep></OrderStep>
      <Company></Company>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </>
  );
};

export default Home;
