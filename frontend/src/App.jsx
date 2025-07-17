import React from "react";
import Navbar from "./components/Navbar";
import { Routes, useLocation, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  // checks whether the current path of the website has "owner" included within the url or not.
  const isOwnerPath = useLocation().pathname.includes("owner");
  // if there exists an "owner", then the navbar wont be shown in that page
  return (
    <div className="">
      {isOwnerPath ? "" : <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
