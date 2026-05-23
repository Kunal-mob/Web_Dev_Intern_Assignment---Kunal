import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Features from "./Components/Features/Features";
import Eligiblity from "./Components/Eligiblity/Eligiblity";
import LeadForm from "./Components/LeadForm/LeadForm";
import Footer from "./Components/Footer/Footer";
import CTA from "./Components/CTA/CTA.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CTA />
        <Features />
        <Eligiblity />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
};

export default App;
