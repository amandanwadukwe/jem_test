import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../images/JEM_logo 1.png';
import { ArrowUpRight } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'so', name: 'Soomaali', flag: '🇸🇴' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'yo', name: 'Yorùbá', flag: '🇳🇬' },
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={i18n.language}
        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
      >
        {languages.map(({ code, name, flag }) => (
          <option key={code} value={code}>
            {flag} {name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-4 w-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full relative">
      <div className="flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-18 h-12" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center justify-center flex-grow"
          style={{
            gap: '75px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
           <Link to="/HomePage" className="text-gray-700 hover:text-purple-600">
            {t('Home')}
          </Link>
          
          <Link to="/services" className="text-gray-700 hover:text-purple-600">
            {t('Services')}
          </Link>

          <Link to="/resources" className="text-gray-700 hover:text-purple-600">
            {t('Resources')}
          </Link>

          <Link to="/about" className="text-gray-700 hover:text-purple-600">
            {t('About Us')}
          </Link>
        </div>

        {/* Contact Button and Language Selector */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          <Link
            to="/contact"
            className="flex items-center text-white border bg-[#a96a91] px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white hover:border-purple-500 transition duration-300"
          >
            {t('Contact Us')}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden flex items-center z-50"
          onClick={() => setIsOpen(true)}
        >
          <button className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Modal Popup */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            ref={modalRef}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white w-[90%] max-w-sm p-6 rounded-[20px] shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center">
                  <img src={Logo} alt="Logo" className="w-12 h-12" />
                  <span className="ml-2 text-lg font-semibold text-gray-800">{t('Menu')}</span>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <Link
                  to="/services"
                  className="block text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Services')}
                </Link>
                <Link
                  to="/resources"
                  className="block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Resources')}
                </Link>
               
                <Link
                  to="/about"
                  className="block text-center bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t('About Us')}
                </Link>
                <Link
                  to="/contact"
                  className="block text-center text-gray-800 py-2 rounded-lg hover:bg-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Contact Us')}
                </Link>
                <div className="flex justify-center pt-2">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
