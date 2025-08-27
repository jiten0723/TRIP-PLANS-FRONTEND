import FamousTrips from "@/components/LandingComponents/FamousTrips";
import Features from "@/components/LandingComponents/Features";
import Hero from "@/components/LandingComponents/Hero";
import Navbar from "@/components/LandingComponents/Navbar";
import Testimonials from "@/components/LandingComponents/Testimonials";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FamousTrips />
      <Testimonials />
    </>
  );
};

export default LandingPage;
