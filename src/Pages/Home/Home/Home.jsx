import React from "react";
import useTitle from "../../../hooks/useTitle";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Company from "../Company/Company";
import GetInTouch from "../GetInTouch/GetInTouch";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";
import StatisticCounter from "../StatisticCounter/StatisticCounter";

const Home = () => {
  useTitle("Home Page");
  return (
    <>
      <Banner></Banner>
      <Parts></Parts>
      <StatisticCounter></StatisticCounter>
      <Reviews></Reviews>
      {/* <CountDown></CountDown> */}
      <Company></Company>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </>
  );
};

export default Home;
