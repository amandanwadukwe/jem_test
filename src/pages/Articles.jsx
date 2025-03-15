import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import articlepic from '../Components/images/Image 2 (1).png';
import image1 from '../Components/images/Image 2 (1).png';
import image2 from '../Components/images/Image 2 (1).png';
import { useTranslation } from 'react-i18next';

const Articles = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-12">  
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            {t('articles_title')}
          </h1>
          <p className="text-gray-600 text-base">
            {t('articles_intro_text')}
          </p>
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
          {t('view_past_events')}
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Article Image */}
      <div className="mb-8">
        <img
          src={articlepic}
          alt={t('article_image_alt')}
          className="w-full h-[300px] object-cover rounded-3xl"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          {t('article_title')}
        </h2>
        <p className="text-gray-600 text-sm mb-2">{t('article_summary')}</p>
        <p className="text-gray-600 text-sm mb-4">{t('article_details')}</p>
        <p className="text-gray-500 text-sm mb-6">{t('article_author')}</p>

        {/* Interactive Elements */}
        <div className="flex items-center gap-4">
          <button className="border border-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>{t('download_button')}</span>
          </button>
        </div>
      </div>

      {/* Two Side-by-Side Pictures Section */}
      <div className="flex gap-6 mb-24">
        {/* Picture 1 */}
        <div className="flex-1 text-center">
          <img
            src={image1}
            alt={t('related_content_image_alt_1')}
            className="w-[500px] h-[280px] object-cover rounded-3xl mb-4"
          />
          <div className="mb-6">
            <p className="text-gray-700 text-2xl font-semibold mb-2 text-left">
              {t('related_content_title_1')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              {t('related_content_details_1')}
            </p>
          </div>
          <button className="border border-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>{t('download_button')}</span>
          </button>
        </div>

        {/* Picture 2 */}
        <div className="flex-1 text-center">
          <img
            src={image2}
            alt={t('related_content_image_alt_2')}
            className="w-[500px] h-[280px] object-cover rounded-3xl mb-4"
          />
          <div className="mb-6">
            <p className="text-gray-700 text-2xl font-semibold mb-2 text-left">
              {t('related_content_title_2')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              {t('related_content_details_2')}
            </p>
          </div>
          <button className="border border-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>{t('download_button')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
