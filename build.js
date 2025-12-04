const fs = require('fs-extra');
const { execSync } = require('child_process');

// Nettoyer le dossier dist
fs.emptyDirSync('./dist');

// Copier tous les fichiers HTML
fs.copySync('./src', './dist', {
  filter: (src) => {
    return src.endsWith('.html') || 
           src.includes('/images/') || 
           src.includes('/component/');
  }
});

// Générer le CSS avec Tailwind
try {
  execSync('npx tailwindcss -i ./src/input.css -o ./dist/output.css');
  console.log('✅ Tailwind CSS généré avec succès!');
} catch (error) {
  console.error('❌ Erreur lors de la génération du CSS:', error.message);
}