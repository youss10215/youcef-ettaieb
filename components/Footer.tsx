import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} <span className="text-blue-400">{t('hero.name')}</span>. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};
