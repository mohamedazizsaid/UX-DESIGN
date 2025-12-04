# Mon Projet - Template Tailwind CSS

## 📋 Description
Template de projet web moderne utilisant Tailwind CSS pour le développement front-end. Ce projet inclut une configuration optimale pour le développement rapide d'interfaces utilisateur.

## 👥 Équipe

| Nom | Rôle | Responsabilités |
|-----|------|-----------------|
| **Mohamed Aziz Said** | Fullstack Développeur | Architecture, configuration du projet |
| **Mohamed Salim Labbaoui** | Développeur Frontend | Intégration UI, composants Tailwind |
| **Rayen Ben Omrane** | Développeur Backend | Intégration backend, API |
| **Mohamed Amine Choukani** | Designer UI/UX | Conception, expérience utilisateur |
| **Hamza Sahli** | Développeur Fullstack | Fonctionnalités principales |
| **Mareiem Azzouz** | Développeuse Frontend | Tests, optimisation performance |

## 🚀 Installation et Exécution

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (généralement installé avec Node.js)

### Installation

1. **Cloner le projet**
```bash
git clone https://github.com/mohamedazizsaid/UX-DESIGN.git
cd nom-du-projet
npm install
```
2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
```

### Structure de projet
```markdown
UX-Design/
├── src/
│   ├── index.html          # Point d'entrée HTML
│   └── input.css           # Fichier CSS source avec directives Tailwind
├── dist/
│   └── output.css          # Fichier CSS généré (automatique)
├── package.json            # Dépendances et scripts
├── tailwind.config.js      # Configuration Tailwind
└── postcss.config.js       # Configuration PostCSS
```
### 🛠️ Problèmes rencontrés et solutions

Problème 1 : Configuration initiale de Tailwind
Symptôme : Les styles Tailwind ne s'appliquaient pas après installation.
Solution :  - Vérifier que le fichier input.css contient bien les directives @tailwind
            - S'assurer que la commande npm run dev est en cours d'exécution
            - Configurer correctement les chemins dans tailwind.config.js

Problème 2 : Taille du fichier CSS en production
Symptôme : Le fichier CSS généré était trop volumineux.
Solution : - Utiliser PurgeCSS via la configuration Tailwind
           - Limiter les variantes utilisées
           - Exécuter npm run build pour la version optimisée

Problème 3 : Compatibilité navigateur
Symptôme : Certains styles ne s'affichaient pas correctement sur les anciens navigateurs.
Solution : - Ajout d'Autoprefixer en dépendance
           - Configuration des cibles de navigateur dans .browserslistrc
