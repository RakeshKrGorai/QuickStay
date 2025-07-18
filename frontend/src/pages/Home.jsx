import React from "react";
import Hero from "../components/Hero";
import HotelCards from "../components/HotelCards";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";

function Home() {
  return (
    <>
      <Hero />
      {/* <HotelCards /> */}
      <FeaturedDestination />
      <ExclusiveOffers />
    </>
  );
}

export default Home;
