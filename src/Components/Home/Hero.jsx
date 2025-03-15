import React from 'react';
import Heroimg from '../images/Hero.png';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Avatar1 from '../images/image 28.png';
import Avatar2 from '../images/image 29.png';
import Avatar3 from '../images/image 30.png';
import Avatar4 from '../images/image 31 (1).png';
import Avatar5 from '../images/image 32 (1).png';
import HouseIcon from '../images/5762.png';
import SmileIcon from '../images/5761.png';
import FiveStar from '../images/Frame 427321000.png';

const Hero = () => {
  const { t } = useTranslation();
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

  return (
    <div className="relative bg-white w-full min-h-screen">
      {/* Navigation Avatars - Hidden on mobile, visible on sm and up */}
      <div className="hidden sm:flex absolute top-8 left-4 mt-[200px] ml-[30px] flex-col items-start gap-2">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
            />
          ))}
        </div>
        <div className="ml-[150px] mt-[-30px] text-sm text-gray-600 flex items-center gap-2">
          <img
            src={FiveStar}
            alt="Five Star Rating"
            className="absolute top-[-20px] left-[-10px] w-25 h-6"
          />
          {t('community-text')}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 relative">
            <span className="block">{t('title-main')}</span>
            <span className="text-purple-600 font-semibold italic">
              {t('title-highlight')}
            </span>
            <span className="block">{t('title-secondary')}</span>
            <img
              src={HouseIcon}
              alt="House Icon"
              className="absolute top-12 right-24 w-15 h-15"
            />
          </h1>

          <p className="text-gray-600 mb-8 max-w-lg">{t('hero-description')}</p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors">
              {t('get-started-button')}
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
            <button className="px-6 py-3 text-gray-700 bg-gray-100 rounded-full border-l-2 transition-colors">
              {t('learn-more-button')}
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 relative bg-white rounded-3xl p-8">
          <img src={SmileIcon} alt="Smile Icon" className="absolute top-4 right-4 w-15 h-15" />
          <img src={Heroimg} alt="Child playing with building blocks" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;