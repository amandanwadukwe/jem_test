import React from 'react';
import Navbar from '../Components/Layout/Navbar';
import Hero from '../Components/Home/Hero';
import WhoWeAre from './Who-we-are';
import UpcomingEvents from './UpcomingEvents';
import Articles from './Articles';
import OurServices from './OurServicesPage';
import Footer from '../Components/Footer';
import { useEffect } from 'react';
const HomePage = () => {

  useEffect(() => {
    let ticking = false; // Flag to avoid multiple rAF calls

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth, throttled updates
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const elements = document.querySelectorAll("section");
          elements.forEach((el) => {
            const speedAttr = el.getAttribute("data-speed");
            const speed = speedAttr ? parseFloat(speedAttr) : 0;
            // Apply translateY based on scroll position and speed
            el.style.transform = `translateY(${scrollY * speed}px)`;
          });
          // Reset ticking after handling scroll
          ticking = false;
        });
        // Set flag to prevent new rAF until current one finishes
        ticking = true;
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white-50 to-white-100">
      {/* Navbar and Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Hero />
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <section data-speed="0.2"   id="who-we-are" className="py-10 bg-[#a961a9]">
          <WhoWeAre />
        </section>

        <section data-speed="0.4" id="upcoming-events" className="py-10 bg-gray-900 ">
          <UpcomingEvents />
        </section>

        <section id="articles" className="py-10">
          <Articles />
        </section>

        <section id="our-services" className="py-10 ">
          <OurServices />
        </section>

        
      </main>

     
        <Footer /> 
     
    </div>
  );
};

export default HomePage;
