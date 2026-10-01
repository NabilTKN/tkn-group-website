# tkn-group-website
Site web TKN Technics (TKN Group SRL) : pages HTML statiques en français, néerlandais et anglais (`*.html`, `*-nl.html`, `*-en.html`), une feuille de style (`css/tkn.css`) et un script (`js/main.js`).

Pages juridiques : `mentions-legales*.html` et `politique-confidentialite*.html`. Les passages surlignés `<mark class="todo">` sont des informations à confirmer par TKN ; toute page qui en contient porte `<meta name="robots" content="noindex">` et ne doit pas être publiée en production.

Formulaire de candidature (`equipes*.html`) : envoi par FormSubmit vers info@tkn-technics.be, en arrière-plan sans pièce jointe, en envoi classique `multipart/form-data` avec pièce jointe (retour sur `?candidature=envoyee`). Le premier envoi déclenche un e-mail d'activation FormSubmit à valider.

## Assets et licences
- Photographies d'ouverture (`assets/hero-accueil.webp` : installations industrielles ; `assets/hero-nettoyage.webp` : hall de production avec pont roulant) : versions allégées des photos déposées avec le projet d'origine (dépôt initial du 13 juin 2026, fichiers `hero-industrial.jpg` et `nettoyage-industriel.jpg`). Source et licence à confirmer par TKN. Ce sont des photos d'ambiance : elles ne montrent pas de chantier réalisé par TKN.
- Image de partage `assets/og-tkn.jpg` : recadrage de la photo d'accueil, assombrie, avec le logo.
- Logo TKN Technics (`assets/tkn-logo*.png`, `assets/tkn-badge.png`) : fourni par l'entreprise. `tkn-logo-128.png` en est une copie réduite, dessin inchangé ; les autres variantes sont conservées comme fichiers source.
- Polices IBM Plex Sans (400, 500, 600) et IBM Plex Sans Condensed (600), © IBM Corp., licence SIL Open Font License 1.1 (`assets/fonts/LICENSE-IBM-Plex.txt`). Fichiers WOFF2 du sous-ensemble Latin1 issus des paquets officiels `@ibm/plex-sans` 1.1.0 et `@ibm/plex-sans-condensed` 2.0.0, servis par le site (aucun appel à un service de polices).
- Icônes (téléphone, flèches, envoi de fichier) : tracés SVG simples intégrés aux pages.
