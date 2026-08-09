import React from "react";
import NavigationBar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Gallery from "../components/Gallery/Gallery";
import Reviews from "../components/Reviews/Reviews";
import Location from "../components/Location/Location";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AIChat from "../components/AIChat/AIChat";
import AnimatedBg from "../components/AnimatedBg";

const Home = () => {
  return (
    <>
      <AnimatedBg />
      <NavigationBar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <AIChat />
    </>
  );
};

export default Home;
