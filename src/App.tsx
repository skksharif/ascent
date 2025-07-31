import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import PerfectFor from "./components/PerfectFor";
import WhatAwaits from "./components/WhatAwaits";
import QuoteBanner from "./components/QuoteBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplitHero from "./components/SplitHero";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <PerfectFor />
      <SplitHero />
      <WhatAwaits />
      <QuoteBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
