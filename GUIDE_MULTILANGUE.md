# 🌍 Guide Multilangue

Votre portfolio supporte maintenant **2 langues** : Français (FR) et Anglais (EN)

## ✨ Fonctionnalités

- 🔄 Changement de langue instantané
- 💾 Toutes les traductions centralisées
- 🎯 Bouton de changement de langue dans le header
- 🌐 Français par défaut

## 📝 Comment ça marche ?

### Bouton de changement de langue

Un bouton **FR/EN** est affiché dans le header en haut à droite. L'utilisateur peut cliquer pour changer la langue.

### Architecture

```
contexts/
  └── LanguageContext.tsx   ← Gestion de la langue et traductions
components/
  └── LanguageSwitcher.tsx  ← Bouton FR/EN
```

## 🔧 Personnalisation

### 1. Modifier les traductions existantes

Ouvrez `contexts/LanguageContext.tsx` et modifiez les traductions :

```typescript
const translations: Record<Language, Record<string, string>> = {
  fr: {
    'hero.name': 'Votre Nom',        // ← Changez ici
    'hero.title': 'Votre titre...',  // ← Changez ici
    // ...
  },
  en: {
    'hero.name': 'Your Name',
    'hero.title': 'Your title...',
    // ...
  }
}
```

### 2. Ajouter de nouvelles traductions

Dans `contexts/LanguageContext.tsx`, ajoutez vos nouvelles clés :

```typescript
const translations = {
  fr: {
    // Existant...
    'new.key': 'Nouvelle traduction',
  },
  en: {
    // Existant...
    'new.key': 'New translation',
  }
}
```

Puis utilisez dans vos composants :

```typescript
import { useLanguage } from '../contexts/LanguageContext';

export const MyComponent = () => {
  const { t } = useLanguage();
  
  return <p>{t('new.key')}</p>
}
```

### 3. Ajouter une nouvelle langue (ex: Espagnol)

**Étape 1** : Modifiez le type `Language` dans `contexts/LanguageContext.tsx` :

```typescript
type Language = 'fr' | 'en' | 'es';  // ← Ajoutez 'es'
```

**Étape 2** : Ajoutez les traductions espagnoles :

```typescript
const translations: Record<Language, Record<string, string>> = {
  fr: { /* ... */ },
  en: { /* ... */ },
  es: {
    'nav.home': 'Inicio',
    'hero.title': 'Desarrollador Full Stack...',
    // Ajoutez TOUTES les clés en espagnol
  }
}
```

**Étape 3** : Ajoutez le bouton ES dans `components/LanguageSwitcher.tsx` :

```typescript
export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};
```

### 4. Changer la langue par défaut

Dans `contexts/LanguageContext.tsx`, ligne 26 :

```typescript
const [language, setLanguage] = useState<Language>('en');  // ← Changez 'fr' en 'en'
```

## 📚 Liste des clés de traduction

Voici toutes les clés disponibles (organisées par section) :

### Navigation
- `nav.home`, `nav.about`, `nav.skills`, `nav.experience`, `nav.projects`, `nav.contact`

### Hero
- `hero.available`, `hero.greeting`, `hero.name`, `hero.title`, `hero.description`, `hero.contact`, `hero.projects`

### About
- `about.title`, `about.p1`, `about.years`, `about.projects`, `about.clients`

### Skills
- `skills.title`, `skills.subtitle`, `skills.frontend`, `skills.backend`, `skills.tools`

### Experience
- `experience.title`, `experience.subtitle`
- `experience.job1.title`, `experience.job1.company`, etc.
- `experience.job2.*`, `experience.job3.*`

### Projects
- `projects.title`, `projects.subtitle`, `projects.view`, `projects.viewMore`
- `projects.project1.title`,
- `projects.project2.*`, `projects.project3.*`

### Contact
- `contact.title`, `contact.subtitle`,
- `contact.name`, `contact.namePlaceholder`
- `contact.email`, `contact.emailPlaceholder`
- `contact.message`, `contact.messagePlaceholder`
- `contact.send`, `contact.sending`, `contact.success`, `contact.error`

### Footer
- `footer.rights`

## 💡 Conseils

1. **Gardez les clés cohérentes** : Utilisez toujours le format `section.element`
2. **Traduisez TOUT** : Chaque clé doit exister dans toutes les langues
3. **Testez les deux langues** : Assurez-vous que tout s'affiche bien dans les deux langues
4. **Longueur des textes** : Certaines traductions peuvent être plus longues (allemand, russe...)

## 🐛 Dépannage

**Problème** : Le texte ne change pas
- ✅ Vérifiez que vous utilisez `t('key')` dans le composant
- ✅ Vérifiez que la clé existe dans les deux langues
- ✅ Vérifiez que vous avez importé `useLanguage`

**Problème** : Erreur TypeScript
- ✅ Assurez-vous que toutes les langues ont les mêmes clés
- ✅ Vérifiez le type `Language` dans LanguageContext.tsx

---

Bon développement multilingue ! 🌍🚀
