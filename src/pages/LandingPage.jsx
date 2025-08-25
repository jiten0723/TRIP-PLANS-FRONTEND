import FamousTrips from "@/components/LandingComponents/FamousTrips";
import Features from "@/components/LandingComponents/FamousTrips";
import Hero from "@/components/LandingComponents/Hero";
import Navbar from "@/components/LandingComponents/Navbar";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FamousTrips />
    </>
  );
};

export default LandingPage;
