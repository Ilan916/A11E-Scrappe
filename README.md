# Nom du Projet

Une brève description de ce que fait votre projet.

## Architecture

Le projet est structuré en deux dossiers principaux :

- `front`: Contient tout le code source lié à l'interface utilisateur de l'application, développé avec [React](https://reactjs.org/).
- `back`: Contient le code source pour le serveur backend, qui utilise [Node.js](https://nodejs.org/) et [Express](https://expressjs.com/).

## Technologie Utilisée

### Front-End

- [React](https://reactjs.org/): Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- [Tailwind CSS](https://tailwindcss.com/): Un framework CSS pour un design rapide et réactif.
- [Axios](https://github.com/axios/axios): Une bibliothèque cliente HTTP basée sur les promesses pour faire des requêtes.
- [Headless UI](https://headlessui.dev/): Une collection entièrement non stylisée, composants d'interface utilisateur accessibles.
- [Heroicons](https://heroicons.com/): Des icônes SVG de qualité librement utilisables.

### Back-End

- [Node.js](https://nodejs.org/): Environnement d'exécution pour JavaScript côté serveur.
- [Express](https://expressjs.com/): Infrastructure web rapide, non-opinionnée et minimaliste pour Node.js.
- [Puppeteer](https://pptr.dev/): Une bibliothèque qui offre une API de haut niveau pour contrôler Chrome ou Chromium sur le serveur.
- [Cors](https://www.npmjs.com/package/cors): Un package pour fournir un middleware Connect/Express qui peut être utilisé pour activer CORS.

## Installation

Détails de l'installation du projet pour les développements et déploiements locaux.

### Prérequis

- Node.js
- npm ou yarn

### Configuration

Expliquez comment configurer l'environnement de développement.

```bash
# Cloner le dépôt
git clone votre_url_de_dépôt

# Installer les dépendances pour le serveur
cd back
npm install

# Installer les dépendances pour le client
cd ../front
npm install

# Démarrer le serveur backend
cd ../back
npm start

# Démarrer l'application frontend dans un nouveau terminal
cd ../front
npm start
