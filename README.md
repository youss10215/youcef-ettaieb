# Portfolio React 19 + TypeScript

Un portfolio moderne et élégant développé avec React 19 et TypeScript.

## 🚀 Fonctionnalités

- ⚡ React 19 avec les dernières fonctionnalités
- 🎯 TypeScript pour un typage fort
- 🎨 Design moderne avec animations fluides
- 📱 Entièrement responsive
- 🌙 Thème sombre élégant
- ⚡ Vite pour un build ultra-rapide
- 🎭 Composants modulaires et réutilisables

## 📦 Technologies Utilisées

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool moderne
- **CSS3** - Styling avec animations
- **Google Fonts** - Typographie (Manrope & Space Mono)

## 🛠️ Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur `http://localhost:3000`

## 📝 Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 📂 Structure du Projet

```
portfolio-react/
├── components/          # Composants React
│   ├── Header.tsx      # En-tête avec navigation
│   ├── Hero.tsx        # Section d'accueil
│   ├── About.tsx       # Section à propos
│   ├── Skills.tsx      # Compétences techniques
│   ├── Experience.tsx  # Expérience professionnelle
│   ├── Projects.tsx    # Projets réalisés
│   ├── Contact.tsx     # Formulaire de contact
│   ├── Footer.tsx      # Pied de page
│   └── ScrollProgress.tsx # Barre de progression
├── types/              # Types TypeScript
│   └── index.ts        # Définitions des types
├── styles/             # Fichiers CSS
│   └── global.css      # Styles globaux
├── App.tsx             # Composant principal
├── main.tsx            # Point d'entrée
├── index.html          # HTML de base
├── package.json        # Dépendances
├── tsconfig.json       # Configuration TypeScript
└── vite.config.ts      # Configuration Vite
```

## 🎨 Personnalisation

### Modifier les informations personnelles

1. **Hero Section** (`components/Hero.tsx`) :
   - Changez "Votre Nom" par votre nom
   - Mettez à jour votre description
   - Modifiez les liens des réseaux sociaux

2. **About Section** (`components/About.tsx`) :
   - Personnalisez votre présentation
   - Ajustez les statistiques

3. **Skills** (`components/Skills.tsx`) :
   - Ajoutez ou supprimez des compétences dans `skillsData`

4. **Experience** (`components/Experience.tsx`) :
   - Modifiez `experiencesData` avec vos expériences

5. **Projects** (`components/Projects.tsx`) :
   - Mettez à jour `projectsData` avec vos projets

6. **Contact** (`components/Contact.tsx`) :
   - Changez l'adresse email
   - Configurez l'envoi de formulaire

### Modifier les couleurs

Les couleurs principales sont définies dans `styles/global.css` :

```css
/* Couleurs du gradient principal */
background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%);

/* Couleur de fond */
background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
```

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Déployez le dossier 'dist'
```

### Build manuel

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`

## 🔧 Configuration Avancée

### Ajouter un nouveau composant

1. Créez un fichier dans `components/`
2. Définissez les types dans `types/index.ts` si nécessaire
3. Importez et utilisez dans `App.tsx`

### Ajouter des animations

Les animations sont gérées avec CSS dans `global.css`. Exemple :

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints à :
- Mobile : < 480px
- Tablette : < 768px
- Desktop : > 768px

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 💬 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue.

---

Développé avec ❤️ en utilisant React 19 et TypeScript
