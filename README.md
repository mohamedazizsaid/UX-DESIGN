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
├── 📁 dist/ # Fichiers de production compilés
├── 📁 node_modules/ # Dépendances Node.js
├── 📁 src/ # Code source principal
│ ├── 📁 component/ # Composants réutilisables
│ │ └── 📄 header.html # Composant header
│ ├── 📁 images/ # Ressources images
│ ├── 📄 Commentaire.html # Page des commentaires
│ ├── 📄 Cours.html # Page des cours
│ ├── 📄 dash.html # Tableau de bord
│ ├── 📄 DetailCour.html # Détails d'un cours
│ ├── 📄 historique.html # Page historique
│ ├── 📄 index.html # Page d'accueil
│ ├── 📄 input.css # Fichier CSS Tailwind source
│ ├── 📄 profile.html # Page de profil
│ ├── 📄 profiling1.html # Étape 1 de profilage
│ ├── 📄 profiling2.html # Étape 2 de profilage
│ ├── 📄 screen5.html # Écran 5
│ ├── 📄 screen6.html # Écran 6
│ ├── 📄 stat.html # Page des statistiques
├── 📄 .gitignore # Fichiers ignorés par Git
├── 📄 package-lock.json # Verrouillage des dépendances
├── 📄 package.json # Configuration npm
├── 📄 postcss.config.js # Configuration PostCSS
└── 📄 tailwind.config.js # Configuration Tailwind CSS
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
