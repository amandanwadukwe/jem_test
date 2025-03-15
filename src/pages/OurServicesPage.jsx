import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import services1 from '../Components/images/Image 2.png';
import services2 from '../Components/images/Image 4.png';
import services3 from '../Components/images/Img5.png';

const OurServices = () => {
  const { t } = useTranslation();
  const [expandedService, setExpandedService] = useState({});
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const toggleServiceText = (index) => {
    setExpandedService((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    {
      title: t('services.advice.title'),
      description: t('services.advice.description'),
      extraText: t('services.advice.extraText'),
      image: services1,
      alt: t('services.advice.alt'),
    },
    {
      title: t('services.advocacy.title'),
      description: t('services.advocacy.description'),
      extraText: t('services.advocacy.extraText'),
      image: services2,
      alt: t('services.advocacy.alt'),
    },
    {
      title: t('services.forums.title'),
      description: t('services.forums.description'),
      extraText: t('services.forums.extraText'),
      image: services3,
      alt: t('services.forums.alt'),
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <div className="mb-6">
        <span className="text-purple-600 border border-purple-600 rounded-full px-8 py-3 text-base font-semibold">
          {t('services.tag')}
        </span>
      </div>

      <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('services.heading')}</h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        {t('services.description')}
      </p>

      <div className="grid gap-12 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="text-left">
            <img
              src={service.image}
              alt={service.alt}
              className="w-[500px] h-[280px] object-cover rounded-3xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            {expandedService[index] && (
              <p className="text-gray-600 mb-6">{service.extraText}</p>
            )}

            {!expandedService[index] ? (
              <button
                onClick={() => toggleServiceText(index)}
                className="border border-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors ml-[100px]"
              >
                <span>{t('services.seeMore')}</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                onClick={openModal}
                className="bg-purple-600 text-white rounded-full px-6 py-2 mt-4 ml-[100px]"
              >
                {t('services.requestService')}
              </button>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-4">{t('modal.title')}</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('modal.fullName')}</label>
                <input type="text" className="w-full border-gray-300 rounded-md p-2" placeholder={t('modal.fullNamePlaceholder')} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('modal.email')}</label>
                <input type="email" className="w-full border-gray-300 rounded-md p-2" placeholder={t('modal.emailPlaceholder')} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('modal.phone')}</label>
                <input type="tel" className="w-full border-gray-300 rounded-md p-2" placeholder={t('modal.phonePlaceholder')} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('modal.serviceType')}</label>
                <input type="text" className="w-full border-gray-300 rounded-md p-2" placeholder={t('modal.serviceTypePlaceholder')} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('modal.message')}</label>
                <textarea className="w-full border-gray-300 rounded-md p-2" placeholder={t('modal.messagePlaceholder')} rows="4"></textarea>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  {t('modal.cancel')}
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  {t('modal.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServices;