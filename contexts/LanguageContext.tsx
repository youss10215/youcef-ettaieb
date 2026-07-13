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
    'about.p1': 'Je suis développeur Full Stack passionné, issu d’une reconversion professionnelle il y a un peu plus de cinq ans. Depuis, j’ai eu l’opportunité de travailler sur plusieurs applications SaaS pour lesquelles j’ai conçu et développé de nombreuses fonctionnalités, en contribuant activement à leur évolution et à leur performance.',
    'about.p2': 'Je suis spécialisé en React et plus largement dans l’écosystème JavaScript, tout en étant également à l’aise avec Laravel et GraphQL. J’accorde une attention particulière à la création d’interfaces utilisateur harmonieuses, intuitives et élégantes, tout en construisant des backends robustes et évolutifs qui s’intègrent naturellement à l’expérience globale.',
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
    'experience.job1.description': 'Développeur Full Stack avec une spécialisation React, je prends part au développement de plusieurs applications SaaS dans le domaine de l\'Open Innovation et de la propriété intellectuelle, du front-end jusqu\'au back-end.',
    'experience.job2.title': 'Développeur Frontend',
    'experience.job2.company': 'Yoomap',
    'experience.job2.location': 'Paris',
    'experience.job2.period': '2020 - 2021',
    'experience.job2.description': 'Travaillé en tant que développeur Frontend avec React.js. Contribution au développement d’un logiciel SaaS d’Open Innovation et d’innovation participative, hautement paramétrable, permettant aux organisations de collaborer, structurer et piloter leurs projets d’innovation via une plateforme interactive et évolutive.',
    'experience.job3.title': 'Concepteur et Développeur d\'Applications',
    'experience.job3.subtitle': 'Titre professionnel RNCP niveau 6',
    'experience.job3.company': 'AP Formation',
    'experience.job3.location': 'Toulouse',
    'experience.job3.period': '2019 - 2020',
    'experience.job3.description': 'Formation intensive de reconversion professionnelle qui m’a permis de découvrir l’univers du développement, d’acquérir de solides bases en programmation et de construire les fondations de mon parcours dans la tech.',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Projets sur lesquels j\'ai travaillé, chacun contenant sa propre étude de cas',
    'projects.view': 'Voir le Projet',
    'projects.viewMore': 'Voir Plus de Projets',
    'projects.project1.title': 'Yoomap',
    'projects.project1.description': 'Plateforme d\'innovation ouverte, spécialement conçu pour aider les entreprises, organisations et institutions à gérer leurs relations avec des startups agiles',
    'projects.project2.title': 'Sopea Deco',
    'projects.project2.description': 'Designer d\'intérieur, spécialisée dans l\'optimisation de l\'espace.',
    'projects.project3.title': 'Three JS Islands',
    'projects.project3.description': 'Un projet de démonstration de mes compétences en Three.js et React Three Fiber, mettant en scène une île interactive avec des éléments 3D et des animations fluides.',
    
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
    'about.p1': 'I’m a Full Stack Developer who transitioned into tech a little over five years ago. Since then, I’ve worked on several SaaS products, building and shipping a wide range of features and playing an active role in their evolution and performance.',
    'about.p2': 'My main focus is React and the broader JavaScript ecosystem, but I’m also comfortable working with Laravel and GraphQL. I care deeply about crafting clean, intuitive, and well-balanced user interfaces, and about building solid, scalable backends that support a seamless overall experience.',
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
    'experience.job2.description': 'Worked as a Frontend Developer with React.js, contributing to the development of a highly customizable SaaS Open Innovation platform that enables organizations to collaborate, structure ideas, and drive innovation projects through an interactive and scalable solution.',
    'experience.job3.title': 'Application Designer and Developer',
    'experience.job3.subtitle': 'Professional title level 6 RNCP',
    'experience.job3.company': 'AP Formation',
    'experience.job3.location': 'Toulouse',
    'experience.job3.period': '2019 - 2020',
    'experience.job3.description': 'Intensive career transition program that allowed me to discover the world of software development, build strong programming foundations, and lay the groundwork for my journey in tech.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Projects I\'ve worked on, each with its own case study',
    'projects.view': 'View Project',
    'projects.viewMore': 'View More Projects',
    'projects.project1.title': 'Yoomap',
    'projects.project1.description': 'Open innovation platform, specifically designed to help companies, organizations, and institutions manage their relationships with agile startups.',
    'projects.project2.title': 'Sopea Deco',
    'projects.project2.description': 'Interior designer, specializing in space optimization.',
    'projects.project3.title': 'Project Name 3',
    'projects.project3.description': 'A showcase project demonstrating my skills in Three.js and React Three Fiber, featuring an interactive island with 3D elements and smooth animations.',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Contact me directly at',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  }
};
