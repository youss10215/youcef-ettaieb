import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title gradient-text">{t('about.title')}</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="text-lg mb-6">
              {t('about.p1')}
            </p>
            <p className="text-lg mb-6">
              {t('about.p2')}
            </p>
            <p className="text-lg mb-6">
              {t('about.p3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
