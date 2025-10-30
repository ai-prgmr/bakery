// pages/index.tsx (Revised)
"use client";
import React from "react";

// --- Homepage Section Components (Only need the content now) ---
import HeroSection from "../components/home/HeroSection";
import SignatureCollection from "../components/home/SignatureCollection";
import CustomOrderCTA from "../components/home/CustomOrderCTA";
import BakingPromise from "../components/home/BakingPromise";
import Testimonials from "../components/home/Testimonials";
import MeetBaker from "../components/home/MeetBaker";
import SeasonalSpecials from "../components/home/SeasonalSpecials";
// import BlogSocial from "../components/home/BlogSocial";

// Define the component type
const HomePage: React.FC = () => {
  return (
    // Note: No <Header /> or <Footer /> here anymore!
    <>
      <HeroSection />
      <SignatureCollection />
      <SeasonalSpecials />
      <CustomOrderCTA />
      <BakingPromise />
      <Testimonials />
      <MeetBaker />

      {/* <BlogSocial /> */}
    </>
  );
};

export default HomePage;
