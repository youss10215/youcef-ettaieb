import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: '1',
      title: t('experience.job1.title'),
      company: t('experience.job1.company'),
      location: t('experience.job1.location'),
      period: t('experience.job1.period'),
      description: t('experience.job1.description'),
      technologies: ['React.js', 'React Styleguidist', 'Tailwind CSS', 'Laravel', 'GraphQL']
    },
    {
      id: '2',
      title: t('experience.job2.title'),
      company: t('experience.job2.company'),
      location: t('experience.job2.location'),
      period: t('experience.job2.period'),
      description: t('experience.job2.description'),
      technologies: ['React.js', 'React Styleguidist', 'Lararel', 'GraphQL']
    },
    {
      id: '3',
      title: t('experience.job3.title'),
      subtitle: t('experience.job3.subtitle'),
      company: t('experience.job3.company'),
      location: t('experience.job3.location'),
      period: t('experience.job3.period'),
      description: t('experience.job3.description'),
      technologies: ['JavaScript', 'HTML', 'CSS', 'SCSS', 'PHP', 'API REST', 'MySQL', 'Git', 'Visual Studio Code']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title gradient-text">{t('experience.title')}</h2>
        <p className="section-subtitle">
          {t('experience.subtitle')}
        </p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-line" />
              <div className="timeline-dot" />
              
              <div className="card experience-card">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h3 className="experience-subtitle">{exp?.subtitle}</h3>
                    <p className="experience-company">{exp.company}, {exp.location}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="tech-badges">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
