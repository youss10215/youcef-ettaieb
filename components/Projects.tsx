import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: '1',
      title: t('projects.project1.title'),
      emoji: '💡',
      link: 'https://yoomap.fr/',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: '2',
      title: t('projects.project2.title'),
      emoji: '🏠',
      link: 'https://sopeadeco.fr/',
      gradient: 'from-pink-500 to-orange-500'
    },
    // {
    //   id: '3',
    //   title: t('projects.project3.title'),
    //   emoji: '🏝️',
    //   link: 'https://cv-island.vercel.app/',
    //   gradient: 'from-green-500 to-teal-600'
    // }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title gradient-text">{t('projects.title')}</h2>
        <p className="section-subtitle">
          {t('projects.subtitle')}
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="card project-card">
              <div className={`project-image bg-gradient-to-br ${project.gradient}`}>
                <span className="project-emoji">{project.emoji}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <a className="btn-secondary btn-full see-project" href={project.link} target="_blank" rel="noopener noreferrer">
                  {t('projects.view')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
