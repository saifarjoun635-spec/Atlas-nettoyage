# ATLAS Nettoyage Multiservice — PRD

## Original Problem Statement
"fais moi un site web a partir de cette photo. Ne mets pas le truc made with emergent. oublie pas quand on envoie le liens sur message ou quoi ca dois montrer le truc atlas et non pas emergent. essaye de le rendre dynamique. Je veux 0 back end, que du front"

Photo de référence : carte de visite ATLAS Nettoyage Multiservice (Jarboui Fouad, Montréal QC).

## Architecture
- 100% frontend (React + Tailwind + framer-motion + Shadcn UI)
- Aucun backend, aucune base de données
- Site one-page avec scroll smooth entre sections
- Formulaire contact → ouvre `mailto:` vers atlasmultiservicenettoyage@gmail.com (pré-rempli)
- WhatsApp link direct (wa.me/15144760700)
- Appels téléphoniques `tel:` directs

## Personas
- **Particuliers** Montréal cherchant nettoyage résidentiel (ménage régulier, grand ménage, après rénovation)
- **PME / Commerces** cherchant entretien commercial régulier
- **Entrepreneurs / Constructeurs** après-chantier
- **Gestionnaires d'immeubles**

## Core Requirements (Static)
1. ✅ Aucun "Made with emergent" — badge retiré + CSS `display:none`
2. ✅ Métadonnées Open Graph "ATLAS Nettoyage Multiservice" (titre, description, OG image, favicon)
3. ✅ Site dynamique : animations framer-motion (scroll-reveal, stagger, hover, marquee, counter)
4. ✅ 100% frontend, pas de backend

## What's Been Implemented (2026-02-05)
- Header sticky avec navigation et CTA téléphone
- Hero immersif (image + overlay + titre 3 lignes animées + 2 CTA + badges trust)
- Stats animés (compteurs : 500+ clients, 6 services, 10 ans, 100% éco)
- 6 cartes Services en bento grid asymétrique avec images, icônes, hover
- Section "Pourquoi nous choisir" (6 raisons, fond sombre, ligne accent)
- Processus en 4 étapes (hover invert colors)
- Galerie 8 images masonry avec hover overlay
- Témoignages marquee infinie (6 témoignages, étoiles)
- Zones desservies (20 quartiers Montréal en grid hover-lime)
- FAQ accordion Shadcn (8 questions)
- Formulaire devis (nom, email, téléphone, service, adresse, message) → mailto
- WhatsApp CTA
- Footer complet (logo, navigation, contacts)
- Floating actions (scroll-top, WhatsApp, phone)
- Curseur custom halo
- Favicon SVG Atlas inline
- Police Outfit (headings) + DM Sans (body)

## Prioritized Backlog (Future)
- P1 : Section pricing/forfaits indicatifs
- P1 : Image OG personnalisée (au lieu de la carte de visite)
- P2 : Page legal (Politique de confidentialité, CGV)
- P2 : Blog SEO (conseils ménage, écologie)
- P2 : Multi-langue (FR/EN)
- P2 : Google Maps embed pour zones
- P2 : Avis Google intégrés via widget

## Next Tasks
- Recevoir feedback utilisateur sur design/contenu
- Personnaliser image OG si demandé
- Ajouter / ajuster sections selon retour
