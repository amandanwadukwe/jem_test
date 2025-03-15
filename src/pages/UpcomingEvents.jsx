import React from 'react';
import Uppic from '../Components/images/Image 5 (2).png';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UpcomingEvents = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl text-white font-medium">
            {t('upcoming_events_title')}
          </h2>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 flex items-center gap-2">
            {t('view_past_events')}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Event Card */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={Uppic}
                alt={t('event_image_alt')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-6">
              {t('event_date')}
            </div>

            <h3 className="text-3xl lg:text-4xl font-medium mb-6">
              {t('event_title')}
            </h3>

            <div className="space-y-4 text-white/90">
              <p>{t('event_description_1')}</p>
              <p>{t('event_description_2')}</p>
              <p>
                {t('event_invitation')}{' '}
                <span className="font-medium">{t('event_schedule')}</span>
              </p>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 mt-8 flex items-center gap-2">
              {t('register_button')}
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
