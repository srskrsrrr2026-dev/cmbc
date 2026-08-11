// src/pages/Home.jsx
import React from "react";
import SEO from "../components/SEO/SEO";
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "CMBC Healthcare Co. (Chennai Medical Book Centre)",
    "image": "https://www.cmbchealthcareco.in/assets/cmbc.png",
    "@id": "https://www.cmbchealthcareco.in/#organization",
    "url": "https://www.cmbchealthcareco.in",
    "telephone": "+918124127608",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.22 CLC Works Road, Opp. Rela Hospital, Chrompet",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600044",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9536111,
      "longitude": 80.1353351
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://maps.app.goo.gl/EAPxvuCthTuTS1m9A",
      "https://wa.me/918056095445"
    ],
    "department": [
      {
        "@type": "Store",
        "name": "Medical & Nursing Textbooks Section"
      },
      {
        "@type": "Store",
        "name": "Medical Equipment & Clinical Attire"
      }
    ]
  };

  return (
    <>
      <SEO
        title="CMBC Health Care & Co Store in Chennai | Medical Books & Supplies Chennai"
        description="Buy MBBS, BDS & Nursing textbooks, Doctor Lab Coats, Stethoscopes, BP Monitors & Lab Record Books at CMBC Healthcare Co. Located opposite Rela Hospital, Chrompet, Chennai."
        canonical="/"
        keywords="medical books Chennai, medical book shop Chrompet, buy MBBS books online, nursing textbooks Chennai, stethoscope shop Chennai, doctor apron Chrompet, CMBC Healthcare"
        jsonLd={localBusinessSchema}
      />
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