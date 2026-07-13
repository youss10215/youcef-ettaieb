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

            {/* <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number gradient-text">5+</div>
                <div className="stat-label">{t('about.years')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number gradient-text">50+</div>
                <div className="stat-label">{t('about.projects')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number gradient-text">30+</div>
                <div className="stat-label">{t('about.clients')}</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
