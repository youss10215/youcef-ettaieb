import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.available': 'Disponible pour des opportunités',
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Youcef Ettaieb',
    'hero.title': 'Développeur Full Stack passionné par la création d\'expériences web exceptionnelles',
    'hero.description': 'Je suis un développeur Full Stack spécialisé en React, je conçois des applications web performantes, modernes et orientées utilisateur.',
    'hero.contact': 'Me Contacter',
    'hero.projects': 'Voir Mes Projets',
    
    // About
    'about.title': 'À Propos de Moi',
    'about.p1': 'Développeur Full Stack avec plus de 6 ans d’expérience, spécialisé en React et dans l’écosystème JavaScript.',
    'about.p2': 'J’ai contribué à la conception et à l’évolution de plusieurs applications SaaS, aussi bien côté Front-End que Back-End avec Laravel et GraphQL.',
    'about.p3': 'Attentif à la qualité du code et à l’expérience utilisateur, j’intègre également l’IA comme outil de travail pour gagner en efficacité et optimiser mon développement.',
    'about.years': 'Années d\'Expérience',
    'about.projects': 'Projets Complétés',
    'about.clients': 'Clients Satisfaits',
    
    // Skills
    'skills.title': 'Mes Compétences',
    'skills.subtitle': 'Technologies et outils que j\'utilise pour créer des applications web',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Outils & Technologies',
    
    // Experience
    'experience.title': 'Mon Expérience',
    'experience.subtitle': 'Mon parcours professionnel et les projets sur lesquels j\'ai travaillé',
    'experience.job1.title': 'Développeur Full Stack',
    'experience.job1.company': 'Questel',
    'experience.job1.location': 'Full Remote',
    'experience.job1.period': '2021 - Présent',
    'experience.job1.description': 'Développement d’applications SaaS – Open Innovation & Propriété Intellectuelle.',
    'experience.job2.title': 'Développeur Frontend',
    'experience.job2.company': 'Yoomap',
    'experience.job2.location': 'Paris',
    'experience.job2.period': '2020 - 2021',
    'experience.job2.description': 'Développement Front-End en React d’une plateforme SaaS dédiée à l’Open Innovation.',
    'experience.job3.title': 'Concepteur et Développeur d\'Applications',
    'experience.job3.subtitle': 'Titre professionnel RNCP niveau 6',
    'experience.job3.company': 'AP Formation',
    'experience.job3.location': 'Toulouse',
    'experience.job3.period': '2019 - 2020',
    'experience.job3.description': 'Formation intensive en développement web dans le cadre d’une reconversion professionnelle.',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Projets sur lesquels j\'ai travaillé, chacun contenant sa propre étude de cas',
    'projects.view': 'Démo',
    'projects.viewMore': 'Voir Plus de Projets',
    'projects.project1.title': 'Yoomap',
    'projects.project2.title': 'Sopea Deco',
    'projects.project3.title': 'Three JS Islands',
    
    // Contact
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Contactez-moi directement à',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.available': 'Available for work',
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Youcef Ettaieb',
    'hero.title': 'Full Stack Developer passionate about creating exceptional web experiences',
    'hero.description': 'I\'m a Full Stack Developer with a strong focus on React, crafting modern, high-performance web applications centered on user experience.',
    'hero.contact': 'Get in Touch',
    'hero.projects': 'View Projects',
    
    // About
    'about.title': 'About Me',
    'about.p1': 'Full Stack Developer with over 6 years of experience, specializing in React and the JavaScript ecosystem.',
    'about.p2': 'I have contributed to the design and evolution of several SaaS applications, working on both Front-End and Back-End development with Laravel and GraphQL.',
    'about.p3': 'Focused on code quality and user experience, I also use AI as a development tool to improve efficiency and streamline my workflow.',
    'about.years': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.clients': 'Satisfied Clients',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies and tools I use to create web applications',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Technologies',
    
    // Experience
    'experience.title': 'My Experience',
    'experience.subtitle': 'My professional journey and the projects I\'ve worked on',
    'experience.job1.title': 'Full Stack Developer',
    'experience.job1.company': 'Questel',
    'experience.job1.location': 'Full Remote',
    'experience.job1.period': '2021 - Present',
    'experience.job1.description': 'Full Stack Developer with a React specialization, I contribute to the development of several SaaS applications in the field of Open Innovation and Intellectual Property, from front-end to back-end.',
    'experience.job2.title': 'Frontend Developer',
    'experience.job2.company': 'Yoomap',
    'experience.job2.location': 'Paris',
    'experience.job2.period': '2020 - 2021',
    'experience.job2.description': 'React-based front-end development of a SaaS platform dedicated to open innovation',
    'experience.job3.title': 'Application Designer and Developer',
    'experience.job3.subtitle': 'Professional title level 6 RNCP',
    'experience.job3.company': 'AP Formation',
    'experience.job3.location': 'Toulouse',
    'experience.job3.period': '2019 - 2020',
    'experience.job3.description': 'Intensive training in web development as part of a career change.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Projects I\'ve worked on, each with its own case study',
    'projects.view': 'Demo',
    'projects.viewMore': 'View More Projects',
    'projects.project1.title': 'Yoomap',
    'projects.project2.title': 'Sopea Deco',
    'projects.project3.title': 'Project Name 3',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Contact me directly at',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  }
};
