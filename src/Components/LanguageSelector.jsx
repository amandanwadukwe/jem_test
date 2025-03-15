import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }, // Fixed incorrect code 'yo' to 'ja'
  ];

  // Function to handle language change
  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    // Optionally store the language preference
    localStorage.setItem('preferredLanguage', langCode);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={i18n.language}
        className="
          appearance-none
          bg-white
          border border-gray-300
          rounded-lg
          py-2
          pl-3
          pr-8
          cursor-pointer
          hover:border-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-purple-500
          focus:border-transparent
          text-sm
        "
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
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;
