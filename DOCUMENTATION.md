# Carnet de bord — Site Chicken Ben's

> Making-of du projet : de la feuille blanche au site livré.
> Stack : **Astro 5 + Tailwind CSS 3** · Agence : **Microdidact**

---

## Le brief de départ

Au départ, deux éléments sur la table :

1. Un **logo** (un coq cartoon en médaillon noir, typo orange *CHICKEN BEN'S*, ruban "Restaurant").
2. Une demande claire : *« Fais-moi une DA complète à partir de ce logo, en Astro + Tailwind pour le SEO. Récupère tout sur Google : infos société, concurrents, avis, mentions légales. Je veux un site pro. »*

Pas de cahier des charges, pas de maquette, pas d'identité existante. Juste le logo et l'envie de faire un site qui tient la route.

---

## Étape 1 — L'enquête (avant de coder, je comprends)

Avant de poser une ligne de CSS, j'ai fait ce que je fais toujours en agence : j'ai enquêté.

### Ce que je suis allé chercher sur le web

| Source                                                                          | Ce que j'ai récupéré                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [chickenbens.fr](https://www.chickenbens.fr/)                                   | Site officiel, description, adresse Colomiers                |
| Uber Eats (fiche Colomiers)                                                     | Menu complet, vrais prix, notes des plats, 4.6 / 1000+ avis  |
| [societe.com](https://www.societe.com/)                                         | SIRET, SIREN, TVA, capital, forme juridique                  |
| [annuaire-entreprises.data.gouv.fr](https://annuaire-entreprises.data.gouv.fr/) | Vérification croisée des infos légales                       |
| Google / Yelp / RestaurantGuru                                                  | Avis clients, verbatim, horaires d'ouverture                 |
| Facebook                                                                        | Ton de la marque, photos, fréquence de publication           |

J'ai aussi jeté un œil aux concurrents (KFC, Popeyes, Krispy Krunchy) pour me positionner. Eux c'est corporate et très carré. Chicken Ben's, c'est plus street, plus local, plus chaleureux. J'allais partir dans cette direction.

### Les infos clés sorties de l'enquête

- **CHICKEN BEN'S 31** — SAS au capital de 500 € — SIRET 837 889 088 00014
- Siège : 1 Passage de la Margeride, 31770 Colomiers
- 05 67 11 53 23 — Halal certifié — 4.6/5 sur +1000 avis
- Menu : tacos, burgers, wraps, buckets, tenders tikka, crusty rice, desserts
- Accepte tous les titres-resto (Swile, Ticket Restaurant, Up, Bimpli, Pluxee)

Avec ça, j'avais de quoi faire un site **authentique**, pas une coquille vide.

---

## Étape 2 — La direction artistique (lire le logo pour faire parler le logo)

J'ai disséqué le logo pour en extraire la palette et l'univers :

| Élément du logo                | Décision DA                                         |
| ------------------------------ | --------------------------------------------------- |
| Fond noir profond du médaillon | `#0B0B0B` — base du site, sections sombres          |
| Crête rouge du coq             | `#E63328` — couleur d'accent / CTA principal        |
| Typo orange "CHICKEN BEN'S"    | `#F5A623` — accents, hover, badges                  |
| Poulet blanc cartoon           | Mascotte — je l'ai fait parler dans une bulle       |
| Ruban "Restaurant"             | Côté fun / americana — typos Bungee + Alfa Slab One |

### Les polices (mix 4 fontes, chacune avec un rôle)

- **Bungee** — les titres qui claquent, les boutons (énergie street)
- **Alfa Slab One** — les sous-titres style diner américain
- **Inter** — le corps de texte (lisibilité max)
- **Caveat** — le manuscrit pour la bulle du poulet, ça donne l'effet *"il te parle vraiment"*

L'idée : un site qui sent le fast-food décomplexé mais reste pro. Pas KFC. Pas Popeyes. Quelque chose entre les deux, plus local.

---

## Étape 3 — Poser les fondations techniques

J'ai choisi **Astro** parce que :

- HTML 100% statique par défaut — score Lighthouse au plafond
- SEO natif (sitemap, meta, JSON-LD faciles à injecter)
- Composants réutilisables comme en React, mais zéro JS envoyé au client
- Rapide à builder, rapide à déployer (Netlify, Vercel, OVH…)

J'y ai collé **Tailwind CSS** pour aller vite sur le design system, et j'ai créé un thème personnalisé directement dans `tailwind.config.mjs` : couleurs (`ink`, `rooster`, `mustard`, `cream`, `crust`…), polices (`display`, `heading`, `body`, `hand`), ombres type poster (`shadow-pop`) et animations (`wiggle`, `float`, `marquee`).

### Arborescence pensée dès le début

```
chickenbens/
├── public/images/     logo, mascotte, photo hero
├── public/cursors/    curseurs SVG custom
├── src/data/site.ts   TOUTES les données métier centralisées
├── src/layouts/       le SEO est dans le Layout
├── src/components/    1 composant = 1 section
└── src/pages/         index + mentions légales
```

Le choix fort : **`src/data/site.ts` centralise tout** (coordonnées, horaires, menu, FAQ, avis, mentions légales). Changer une info du resto = 1 seul endroit à toucher. Maintenance sans casse-tête pour le client.

---

## Étape 4 — Construire section par section

J'ai attaqué dans l'ordre du scroll, en traitant chaque section comme un mini-projet.

**Le Header** — sticky, semi-transparent (backdrop-blur), avec le logo + la nav + un CTA téléphone et un CTA "Commander". Menu burger responsive sur mobile avec un petit JS inline (pas besoin de React pour ça).

**Le Hero** — le morceau central. Typo énorme en 3 lignes (Juicy. Crispy. Ben's.) chacune dans une couleur de la DA. Ligne d'USP en bas avec les 4 arguments (halal, frais, minute, livré chaud). Étoiles + note 4.6/5 pour rassurer direct.

**La carte** — je n'ai rien inventé : j'ai pris le vrai menu Uber Eats avec les vrais prix. Chaque catégorie dans une carte "poster" (bordure noire + ombre décalée). Les plats à plus de 90% de satisfaction ont un badge "Top ventes" / "Épicé" / etc.

**L'histoire (About)** — un bloc storytelling en 3 paragraphes + 3 stats (+1K avis, 4.6 étoiles, 100% halal/frais) + photos de tenders en poster incliné. Ton direct, à la première personne, comme un patron qui te raconte son resto.

**Les avis** — 6 avis inspirés des vrais retours clients (Google, Uber Eats, Facebook, sources visibles). Fond noir, cartes sombres, étoiles jaunes. Plus un gros bouton final "Voir les avis Google" avec le vrai logo 4 couleurs de Google, qui redirige vers les avis triés par meilleure note.

**La mascotte qui parle** — l'image du poulet (thumbs up) avec une bulle de dialogue en police manuscrite : *« Et toi… quand est-ce que tu passes casser la graine chez Chicken Ben's ? »*. La bulle a une vraie petite flèche en CSS pur (`::before` + `::after` avec des `border` en triangle), pas d'image — ça reste net à toutes les tailles.

**La FAQ** — 8 questions / réponses qui reviennent tout le temps (où c'est, c'est halal, vous livrez, titres-resto, végétarien, groupes…). Balisées en JSON-LD `FAQPage`, donc éligibles aux rich snippets Google.

**Le contact** — infos resto + horaires + moyens de paiement + Google Maps intégré. Bouton "Itinéraire Google Maps" qui ouvre direct la navigation.

**Le footer** — 4 colonnes classiques (marque, nav, adresse, horaires) + barre légale en bas + signature agence discrète "Développée par [Microdidact](https://microdidact.com/)".

---

## Étape 5 — Le SEO, au niveau pro

Parce qu'un beau site que personne ne trouve, ça sert à rien.

### Balises meta & Open Graph
Titles, descriptions, canonical, robots, keywords, Open Graph, Twitter Cards, theme-color, favicon SVG, apple-touch-icon. Le kit complet.

### SEO local / GEO (essentiel pour un resto)
```html
<meta name="geo.region" content="FR-31">
<meta name="geo.placename" content="Colomiers, Toulouse, Occitanie">
<meta name="geo.position" content="43.6124;1.3367">
<meta name="ICBM" content="43.6124, 1.3367">
```

Un restaurant doit remonter sur *"poulet frit Colomiers"*, *"tacos Toulouse ouest"*, *"fast-food halal 31770"*. Les meta GEO + le JSON-LD `Restaurant` complet (adresse, geo, horaires, notes agrégées, moyens de paiement) disent explicitement à Google : *voici un resto, voici où il est, voici ses horaires, ses avis, sa carte*.

### Schema.org
Deux blocs JSON-LD injectés dans le `<head>` :
- `Restaurant` — la fiche complète qui alimente le Knowledge Panel
- `FAQPage` — les questions qui peuvent s'afficher directement dans les SERP

### Performance
- Polices Google avec `display=swap` + `preconnect`
- Preload du logo (LCP)
- `compressHTML` + `inlineStylesheets: 'auto'` dans la config Astro
- Images en `loading="lazy"` partout sauf hero

---

## Étape 6 — Les petits détails qui font la différence

**Le curseur hamburger.** Le client m'a demandé un curseur qui colle à la DA. J'ai fait deux SVG maison : un mini hamburger comme curseur global, et un pilon de poulet pour les liens et boutons (pointer). C'est ces détails qui transforment un site correct en site mémorable.

**Le bandeau marquee.** Un petit ruban défilant noir en haut avec les infos-clés ("Nouveau menu", "Halal", "Livraison Uber Eats", "+1000 avis"…). Effet fast-food sans être intrusif.

**Les micro-animations.** Le logo flotte doucement, la mascotte fait un wiggle (danse de gauche à droite), les CTA ont l'effet "sticker" (ombre décalée qui se déplace au survol).

---

## Étape 7 — Choix de design retravaillés en cours de route

Une partie du travail d'agence, c'est d'itérer. Certaines directions que j'avais prises ont été revues parce que le rendu ne correspondait pas à ce qu'attendait le client. Voici les plus marquantes, avec le **avant → après** et le **pourquoi**.

### 1. Les fonds des images (logo + mascotte poulet)

- **V1** : le logo et la mascotte étaient affichés à partir des PNG d'origine, qui avaient un fond blanc implicite (le damier visible dans les aperçus PNG = transparence, mais sur le site les wrappers avaient un fond coloré).
- **Retour client** : *« retire le background »*.
- **V2** : j'ai demandé au client les PNG détourés (versions "removebg"). Je les ai intégrés, et j'ai retiré tous les wrappers colorés (`bg-crust`, `drop-shadow` durs). Résultat : le poulet et le logo flottent proprement sur leur section.

### 2. Le cadre autour du logo dans le Hero

Un petit feuilleton en plusieurs temps :

- **V1** : pas de cadre, juste un halo lumineux radial flou. Le logo apparaissait "trop seul", un peu perdu sur le fond noir.
- **Retour client** : *« c'est un peu sombre, il faut un cadre un peu clair autour »*.
- **V2** : cadre **circulaire** (disque crème + anneau pointillé + ring doré). Effet "médaillon de bar à burger".
- **Retour client** : *« non, genre un rectangle »*.
- **V3** : cadre **rectangulaire** style poster, bordure moutarde 4px, ombre décalée rouge, liseré pointillé intérieur, légère rotation -2°.
- **Retour client** : *« au lieu du cadre blanc, mets cette image en background »* (photo de tenders dans des plateaux inox).
- **V4 (finale)** : j'ai gardé **le rectangle et sa bordure moutarde**, mais j'ai remplacé le fond crème par **la photo des tenders**. J'ai ajouté par-dessus un voile sombre en dégradé + un halo radial doré centré + une ombre portée sur le logo pour qu'il reste parfaitement lisible sur la photo.

**Pourquoi la V4 est meilleure** : la photo rend la zone **appétissante** dès le premier scroll. On ne montre plus juste une marque, on montre **le produit**. Le logo garde sa visibilité grâce à l'overlay, et le cadre garde son identité "sticker / affiche" avec la bordure moutarde et l'ombre rouge.

### 3. L'ordre des éléments dans la section "mascotte qui parle"

- **V1** sur mobile : Bulle → Boutons "On arrive !" + "Commander en livraison" → Poulet.
- **Retour client** : *« la bulle doit être au-dessus du poulet, pas avant les boutons »* (parce que visuellement les boutons coupaient le lien bulle-poulet, et on ne comprenait plus qui "parlait").
- **V2** : réorganisation en `order-1 / order-2 / order-3`. Ordre mobile : **Bulle → Poulet → Boutons**. Sur desktop le layout 2 colonnes est conservé (poulet à gauche, bulle + boutons à droite).

### 4. La barre des USP sur mobile

- **V1** : la grille des 4 arguments (100% Frais / Préparé minute / Halal certifié / Livré chaud) s'affichait aussi sur petit écran, ce qui chargeait visuellement le Hero mobile.
- **Retour client** : *« en version mobile retire ça »*.
- **V2** : `hidden md:block` sur le conteneur. La barre n'apparaît plus qu'à partir de 768px. Les 4 arguments restent mentionnés ailleurs (section About, chips) donc l'info n'est pas perdue.

### 5. L'ordre des sections de la page

- **V1** : Hero → Menu → About → Reviews → Bulle → FAQ → Contact → Footer.
- **Retour client** : *« la FAQ doit être à la fin, avant le footer »*.
- **V2** : Hero → Menu → About → Reviews → Bulle → **Contact → FAQ** → Footer. La FAQ termine la page, juste avant le footer. C'est stratégiquement mieux : elle lève les dernières objections avant le bas de page.

### 6. Le footer

- **V1** : barre du bas avec copyright + liens légaux + SIRET affiché.
- **Retours client successifs** :
  - *« ajoute "Développée par Microdidact" »* avec un lien vers microdidact.com → ajouté en bande dédiée sous la barre légale, typo Bungee, couleur moutarde.
  - *« retire le SIRET du footer »* → retiré (le SIRET reste dans la page `/mentions-legales` où il est obligatoire).

---

## Étape 8 — Difficultés rencontrées et corrections

### Problème 1 — Copies de fichiers qui échouent sur des chemins trop longs (Windows)

**Symptôme.** Quand j'ai voulu copier les images détourées et la photo hero depuis le dossier cache de Cursor (`C:\Users\PROBOOK 445 G7\.cursor\projects\...\assets\c__Users_PROBOOK_445_G7_AppData_Roaming_Cursor_...png`), PowerShell et `cmd copy` retournaient :
```
Le chemin d'accès spécifié est introuvable.
```
Pourtant `dir /b` listait bien les fichiers.

**Cause.** La limite `MAX_PATH` de Windows (260 caractères). Les chemins générés par Cursor dépassent largement cette limite.

**Correction.** J'ai utilisé **`robocopy`** qui, lui, gère nativement les chemins longs :
```powershell
robocopy "SOURCE_DIR" "DEST_DIR" "fichier_au_nom_long.png" /NJH /NJS /NP
Rename-Item "fichier_au_nom_long.png" "nom-propre.png"
```
J'ai ensuite renommé proprement en `chicken-thumbs.png`, `logo.png`, `hero-chicken-trays.png`.

**Leçon.** Sur Windows, dès qu'un chemin dépasse 260 caractères, oublier `copy` et `Copy-Item` classiques — passer direct à `robocopy`.

---

### Problème 2 — Push GitHub refusé (erreur 403)

**Symptôme.** Au premier `git push`, erreur :
```
remote: Permission to Team-MCD2/chikenbens.git denied to angoularaphael.
fatal: unable to access '...': The requested URL returned error: 403
```
Et au second essai, en plus :
```
error: remote origin already exists.
```

**Causes** (il y en avait trois en fait) :
1. Windows avait gardé en cache les identifiants d'un **ancien utilisateur GitHub** (`angoularaphael`) dans le Gestionnaire d'identifiants. Git les réutilisait automatiquement au lieu des nouveaux.
2. Le remote `origin` était déjà configuré, donc le second `git remote add` échouait.
3. Depuis 2021, **GitHub n'accepte plus le mot de passe de compte** pour l'authentification HTTPS. Il faut un **Personal Access Token (PAT)** ou passer par le navigateur.

**Correction.** Trois commandes :
```powershell
# 1. Supprimer le cache des anciens identifiants
cmdkey /delete:git:https://github.com

# 2. Corriger le remote (set-url au lieu de add)
git remote set-url origin https://github.com/Team-MCD2/chikenbens.git

# 3. Pousser. À l'invite, utiliser un PAT en mot de passe (ou "Sign in with browser")
git push -u origin main
```
Ou, plus simple : choisir *"Sign in with your browser"* dans le Credential Manager, qui gère tout automatiquement.

**Leçon.** Sur Windows, **toujours penser au Gestionnaire d'identifiants** quand un push est refusé sans raison apparente. Et retenir : **le mot de passe GitHub ne sert plus pour Git**, c'est le PAT ou rien.

---

### Problème 3 — Avertissements LF / CRLF au premier commit

**Symptôme.** Au `git add .` initial, une avalanche de :
```
warning: in the working copy of 'src/components/xxx.astro', LF will be replaced by CRLF the next time Git touches it
```

**Cause.** Conflit de fin de ligne entre les fichiers créés par l'éditeur (LF Unix-style) et la configuration Git par défaut sur Windows (CRLF).

**Correction / contournement.** Ce ne sont que des warnings, pas des erreurs. J'ai laissé Git convertir automatiquement, puisque le build Astro fonctionne identiquement avec LF ou CRLF. Pour un projet propre sur le long terme, je pourrais ajouter un `.gitattributes` à la racine :
```
* text=auto eol=lf
*.png binary
*.jpg binary
```

---

### Problème 4 — Filtrer les avis Google "positifs uniquement"

**Symptôme.** Le client voulait que le bouton "Voir les avis Google" redirige vers **uniquement les avis positifs**. Or Google ne propose pas d'URL-paramètre natif pour filtrer par note.

**Correction.** J'ai utilisé le tri par meilleure note (`sort=ratingHigh`) qui est le plus proche équivalent : les avis 5 et 4 étoiles remontent en premier. URL placée dans `site.ts` avec un TODO pour remplacer par le vrai Place ID de la fiche Google Business dès qu'il sera disponible.

**Leçon.** Quand un réseau externe ne propose pas exactement le filtre attendu, mieux vaut trouver le "presque équivalent" officiel plutôt que de bricoler.

---

### Problème 5 — Le logo se détachait mal du fond sombre

**Symptôme.** Sur le Hero, le logo (fond noir, texte jaune) posé sur la section noire du site se confondait par endroits avec le fond.

**Correction.** Voir le feuilleton de l'Étape 7 (V1 → V4). La solution finale (photo en background + voile sombre + halo doré) résout le problème tout en rendant la zone plus appétissante.

---

## Étape 9 — La conformité légale

J'ai créé une page `/mentions-legales` dédiée, en `noindex`, qui contient :

- Toutes les infos de la SAS CHICKEN BEN'S 31 vérifiées sur [societe.com](https://www.societe.com/societe/chicken-ben-s-31-837889088.html) et [pappers.fr](https://www.pappers.fr/entreprise/chicken-bens-31-837889088).
- Le bloc hébergement (OVH SAS, 2 rue Kellermann, Roubaix).
- Le bloc RGPD (droits d'accès, rectification, effacement, CNIL).
- Le bloc cookies.
- Le bloc propriété intellectuelle + responsabilité + droit applicable.

Un site pro, ça commence par une page de mentions légales conforme. C'est obligatoire en France, et ça rassure Google aussi.

---

## Résultat final

Un site vitrine léger, rapide, référencé, responsive et authentique :

- 8 sections stylées, toutes cohérentes avec la DA du logo
- SEO complet (meta, OG, JSON-LD Restaurant + FAQPage, sitemap, robots.txt)
- GEO tags pour le référencement local Colomiers / Toulouse
- Responsive mobile-first (testé de 375px à 1920px)
- Accessible (lang, aria-label, skip-link, focus visible, contraste AA)
- Page mentions légales conforme RGPD avec infos vérifiées
- Curseurs custom, animations douces, bulle de dialogue manuscrite
- Données centralisées dans 1 seul fichier pour une maintenance facile

Et surtout : un site qui a une âme. Qui ressemble à Chicken Ben's. Qui donne envie de passer commander.

---

## Ce que je retiens de ce projet

1. **La v1 n'existe pas.** Il n'y a que des versions successives qui convergent. Les gros changements de direction (cadre circulaire → rectangle → photo) ne sont pas des échecs, ce sont des étapes normales d'un travail agence.
2. **Un bon design système, c'est un système que je peux modifier en 2 minutes sans tout casser.** Le `site.ts` centralisé et le découpage en composants ont sauvé chaque aller-retour.
3. **Sur Windows, toujours anticiper** : chemins longs (robocopy au lieu de copy), cache d'identifiants Git, CRLF/LF.
4. **Un site vitrine resto = SEO local avant tout.** Les meta GEO et le JSON-LD `Restaurant` sont plus importants qu'un joli slider.

---

## Crédits

- **Direction artistique / Dev / SEO** : Microdidact
- **Client** : Chicken Ben's 31 (Colomiers)
- **Stack** : Astro 5, Tailwind CSS 3, Google Fonts
- **Sources** : [chickenbens.fr](https://www.chickenbens.fr/), [Uber Eats](https://www.ubereats.com/fr/store/chicken-bens-colomiers), [societe.com](https://www.societe.com/), [annuaire-entreprises.data.gouv.fr](https://annuaire-entreprises.data.gouv.fr/)

> *Site développé par **[Microdidact](https://microdidact.com/)** — Agence de communication à Toulouse.*
