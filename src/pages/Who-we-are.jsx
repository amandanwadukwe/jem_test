import React from 'react';
import who from '../Components/images/Image 5.png';
import { useTranslation } from 'react-i18next';
import Avata1 from '../Components/images/image 32 (1).png';
import Avata2 from '../Components/images/image 33.png';
import Avata3 from '../Components/images/image 31 (1).png';
import Avata4 from '../Components/images/image 34 (1).png';
import Avata5 from '../Components/images/image 35 (1).png';
import Avata6 from '../Components/images/image 36 (1).png';
import { useEffect } from 'react';

const WhoWeAre = () => {
  useEffect(() => {
    let ticking = false; // Flag to avoid multiple rAF calls

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth, throttled updates
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const elements = document.querySelectorAll(".box");
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
  const { t } = useTranslation();
  const avatars = [Avata1, Avata2, Avata3, Avata4, Avata5, Avata6];   

  return (
    <div data-speed="0.2" className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-8 py-12 lg:py-16 max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="flex-1">
        <div className="relative">
          <img
            src={who}
            alt="Student writing"
            className="w-full h-[600px] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 lg:pl-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          {t('about_us_title')}
        </h2>

        <div className="space-y-6">
          <p>{t('about_us_description')}</p>

          <div>
            <h3 className="text-xl font-medium mb-3">{t('vision_title')}</h3>
            <p className="leading-relaxed">{t('vision_description')}</p>
          </div>
        </div>

        {/* Navigation Avatars */}
        <div className="mt-8 flex items-center gap-2">
          <div className="flex -space-x-2">
            {avatars.map((avata, index) => (
              <img
                key={index}
                src={avata}
                alt={`Avatar ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
              />
            ))}
          </div>
        </div>

        <button className="bg-[#a961a9] mt-[100px] text-white px-6 py-3 rounded-full flex items-center gap-2 border border-white hover:bg-purple-700 transition-colors">
          {t('button_text')}
          <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default WhoWeAre;
