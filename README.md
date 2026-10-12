# FindTechConsult — site vitrine

Site vitrine statique responsive, conçu pour GitLab Pages. Aucun framework ni build Node requis.

## Contenu
- `index.html` : contenu, SEO, sections et formulaire de contact
- `styles.css` : design responsive et animations
- `script.js` : menu mobile, animations au défilement, préparation du courriel
- `assets/` : favicon
- `.gitlab-ci.yml` : déploiement GitLab Pages

## Avant publication
1. Remplacez `CONTACT_EMAIL` dans `index.html` (lien en pied de page) par votre adresse e-mail professionnelle.
2. Remplacez aussi `CONTACT_EMAIL` dans `script.js` par la même adresse.
3. Si vous avez une adresse, un téléphone, des références ou des certifications à afficher, ajoutez uniquement les informations vérifiées.
4. Vérifiez les mentions légales et la politique de confidentialité adaptées à votre activité avant la mise en ligne.

Le formulaire ouvre le logiciel de messagerie du visiteur avec un message prérempli. Il ne transmet ni ne stocke les données sur un serveur. Pour un formulaire avec envoi direct, il faudra connecter un service tiers ou une API.

## Publier sur GitLab Pages
1. Créez un dépôt GitLab vide.
2. Ajoutez tous les fichiers du projet à la racine du dépôt, en conservant le dossier `assets`.
3. Poussez les fichiers sur la branche par défaut (souvent `main`).
4. Dans GitLab, ouvrez **Build > Pipelines** et vérifiez que le job `pages` réussit.
5. Ouvrez **Deploy > Pages** pour voir l'URL publiée.

## Domaine personnalisé
Dans **Deploy > Pages**, ajoutez votre domaine, puis configurez chez votre registrar les enregistrements DNS demandés par GitLab pour ce domaine. Activez ensuite HTTPS dans les paramètres Pages lorsque le domaine est vérifié et que le certificat est disponible. Les valeurs DNS exactes dépendent du domaine et de la configuration GitLab affichée pour le projet.

## Personnalisation
Les polices sont chargées depuis Google Fonts. En cas de besoin d'hébergement entièrement autonome, téléchargez les fichiers de police autorisés et adaptez le CSS.
