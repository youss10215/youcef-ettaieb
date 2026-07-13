import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <h2 className="section-title gradient-text text-center">{t('contact.title')}</h2>
        <p className="section-subtitle text-center">
          {t('contact.subtitle')}{' '}
          <a href="mailto:youcef.ettaieb@gmail.com" className="mymail text-blue-400 hover:underline">
            youcef.ettaieb@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
