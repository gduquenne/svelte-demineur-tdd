# Démineur en Svelte + TypeScript

Ce projet est un jeu de démineur développé avec Svelte 5 et TypeScript, en suivant une approche TDD (Test-Driven Development).

## Description

Le Démineur est un jeu de logique où le joueur doit découvrir toutes les cases sans mines sur une grille. Chaque case révélée affiche un nombre indiquant combien de mines sont adjacentes à cette case.

## Fonctionnalités

- Différents niveaux de difficulté (débutant, intermédiaire, expert)
- Premier clic toujours sûr
- Marquage des mines avec un drapeau
- Compteur de mines et chronomètre
- Thème clair/sombre

## Installation

```bash
# Cloner le dépôt
git clone [url-du-depot]

# Accéder au répertoire
cd svelte-demineur-tdd

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Tests

Ce projet a été développé en suivant l'approche TDD (Test-Driven Development). Pour exécuter les tests :

```bash
# Exécuter les tests
npm test

# Exécuter les tests avec couverture
npm run test:coverage
```

## Structure du Projet

Le projet suit une structure modulaire pour faciliter la maintenance et les tests :

```
src/
├── lib/
│   ├── components/     # Composants réutilisables
│   ├── stores/         # Stores Svelte pour la gestion d'état
│   ├── types/          # Types TypeScript
│   └── utils/          # Fonctions utilitaires
└── routes/             # Routes de l'application
```

## Technologies Utilisées

- Svelte 5
- TypeScript
- Vite
- Vitest
