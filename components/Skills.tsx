import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Skill } from '../types';

const skillsData: Skill[] = [
  { name: 'React.js', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'React Styleguidist', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Three.js', category: 'frontend' },
  { name: 'React Three Fiber', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'PHP', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Visual Studio Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Wordpress', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'Visual Studio Code', category: 'tools' },
];

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryLabels: Record<string, string> = {
    frontend: t('skills.frontend'),
    backend: t('skills.backend'),
    tools: t('skills.tools'),
    other: 'Other'
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title gradient-text">{t('skills.title')}</h2>
        <p className="section-subtitle">
          {t('skills.subtitle')}
        </p>

        <div className="skills-container">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">
                {categoryLabels[category]}
              </h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <span key={skill.name} className="tech-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
