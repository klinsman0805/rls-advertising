import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutUs from '../AboutUs';
import Service from '../Service';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Service />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
