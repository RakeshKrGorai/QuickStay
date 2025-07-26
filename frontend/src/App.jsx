import React from "react";
import Navbar from "./components/Navbar";
import { Routes, useLocation, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";
import HotelReg from "./components/HotelReg";

function App() {
  // checks whether the current path of the website has "owner" included within the url or not.
  const isOwnerPath = useLocation().pathname.includes("owner");
  // if there exists an "owner", then the navbar wont be shown in that page
  return (
    <div className="">
      {isOwnerPath ? "" : <Navbar />}
      {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBooking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
