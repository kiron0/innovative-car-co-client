import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Company from "../Company/Company";
import GetInTouch from "../GetInTouch/GetInTouch";
import Parts from "../Parts/Parts";
import StatisticCounter from "../StatisticCounter/StatisticCounter";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <StatisticCounter></StatisticCounter>
      <Parts></Parts>
      <Company></Company>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </>
  );
};

export default Home;
