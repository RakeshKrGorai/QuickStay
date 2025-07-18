import React from "react";
import Hero from "../components/Hero";
import HotelCards from "../components/HotelCards";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      {/* <HotelCards /> */}
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
    </>
  );
}

export default Home;
