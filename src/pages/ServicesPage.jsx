import React from 'react';
import { ChevronRight } from 'lucide-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Layout/Navbar';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('service_advice_title'),
      description: t('service_advice_description'),
      link: '/advice',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('services_page_title')}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {t('services_page_description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm flex-grow mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm font-medium">
                    {t('find_out_more')}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
