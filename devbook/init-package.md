# Dépendances du Projet

## Dépendances Principales
- `svelte`: ^5.0.0 - Framework Svelte (version 5)
- `vite`: ^5.1.4 - Outil de build et serveur de développement
- `@sveltejs/vite-plugin-svelte`: ^3.0.0 - Plugin Vite pour Svelte
- `typescript`: ^5.3.3 - Support TypeScript
- `@tsconfig/svelte`: ^5.0.2 - Configuration TypeScript pour Svelte

## Outils de Test
- `vitest`: ^1.3.1 - Framework de test
- `@testing-library/svelte`: ^5.0.0-beta.1 - Utilitaires de test pour Svelte
- `@testing-library/user-event`: ^14.5.2 - Simulation d'événements utilisateur
- `jsdom`: ^24.0.0 - Environnement DOM pour les tests
- `@vitest/coverage-v8`: ^1.3.1 - Couverture de code pour Vitest

## Outils de Développement
- `eslint`: ^8.56.0 - Linting
- `prettier`: ^3.2.5 - Formatage de code
- `svelte-check`: ^5.0.0 - Vérification statique pour Svelte
- `svelte-preprocess`: ^5.0.0 - Préprocesseur pour Svelte

## Types
- `@types/node`: ^20.11.19 - Types pour Node.js
- `@typescript-eslint/eslint-plugin`: ^7.0.1 - Plugin ESLint pour TypeScript
- `@typescript-eslint/parser`: ^7.0.1 - Parser ESLint pour TypeScript

## Scripts Recommandés
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage",
    "check": "svelte-check --tsconfig ./tsconfig.json",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```
