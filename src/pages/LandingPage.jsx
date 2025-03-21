import React, { useEffect, useState } from "react";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import UserData from "../components/UserData";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <UserData />
    </div>
  );
};

export default LandingPage;
