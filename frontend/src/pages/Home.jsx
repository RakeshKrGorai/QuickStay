import React from "react";
import Hero from "../components/Hero";
import HotelCards from "../components/HotelCards";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";

function Home() {
  return (
    <>
      <Hero />
      {/* <HotelCards /> */}
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
    </>
  );
}

export default Home;
