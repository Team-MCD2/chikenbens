# 🐔 Chicken Ben's — Site officiel

Site vitrine du restaurant **Chicken Ben's** (Colomiers / Toulouse), spécialiste du poulet frit frais & halal.

Construit avec **Astro 5** + **Tailwind CSS 3** pour un référencement optimal (HTML statique, CSS inliné, JSON-LD, performance 100% mobile).

---

## 🚀 Lancement

```bash
cd chickenbens
npm install
npm run dev        # → http://localhost:4321
```

Build de production :

```bash
npm run build      # sortie dans /dist
npm run preview    # preview local du build
```

---

## 🧠 Stack & dépendances

| Rôle        | Techno                                     |
| ----------- | ------------------------------------------ |
| Framework   | [Astro 5](https://astro.build)             |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com)  |
| Sitemap     | `@astrojs/sitemap`                         |
| Fonts       | Google Fonts (Bungee, Alfa Slab One, Inter, Caveat) |

---

## 🎨 Direction artistique

Palette extraite directement du logo :

| Rôle        | HEX       | Usage                                    |
| ----------- | --------- | ---------------------------------------- |
| `ink`       | `#0B0B0B` | Fond logo, texte principal               |
| `mustard`   | `#F5A623` | Jaune de la typo "CHICKEN BEN'S"         |
| `rooster`   | `#E63328` | Rouge de la crête du coq                 |
| `cream`     | `#FFF8EC` | Fond de page chaleureux                  |
| `crust`     | `#F4E4C1` | Teinte "panure"                          |
| `beak`      | `#FFB703` | Jaune bec                                |
| `leaf`      | `#3FA34D` | Vert halal / salade                      |

**Typographies** (Google Fonts, swap pour perf) :
- **Bungee** → Display (titres, CTA, énergie street)
- **Alfa Slab One** → Heading (style americana / diner)
- **Inter** → Body (lisibilité max)
- **Caveat** → Accent manuscrit (bulle du poulet, citations)

---

## 🗂️ Arborescence

```
chickenbens/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── cursors/
│   │   ├── burger.svg        ← curseur hamburger global
│   │   └── drumstick.svg     ← curseur pointer (éléments cliquables)
│   └── images/
│       ├── logo.png
│       └── chicken-thumbs.png
└── src/
    ├── layouts/BaseLayout.astro      ← SEO + JSON-LD + fonts
    ├── pages/
    │   ├── index.astro
    │   └── mentions-legales.astro
    ├── components/
    │   ├── Announce.astro       (bandeau marquee)
    │   ├── Header.astro         (navbar sticky + mobile menu)
    │   ├── Hero.astro
    │   ├── Menu.astro
    │   ├── About.astro
    │   ├── Reviews.astro
    │   ├── ChickenBubble.astro  (image poulet + bulle de dialogue)
    │   ├── FAQ.astro
    │   ├── Contact.astro        (infos + Google Maps)
    │   └── Footer.astro
    ├── data/site.ts             ← toutes les données métier
    └── styles/global.css
```

---

## 🔍 SEO / GEO — ce qui est couvert

### Meta & perf
- `<title>`, `description`, `canonical`, `robots`, Open Graph, Twitter Card
- `theme-color`, `apple-touch-icon`
- Preload du logo (LCP), preconnect Google Fonts, `font-display: swap`
- HTML compressé + CSS inliné (`compressHTML`, `inlineStylesheets: 'auto'`)

### SEO local (GEO)
- Meta `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- **JSON-LD `Restaurant`** avec `address`, `geo`, `openingHoursSpecification`,
  `aggregateRating`, `hasMenu`, `paymentAccepted`, `sameAs`
- Google Maps embed dans la section contact
- Sitemap généré automatiquement + `robots.txt`

### Rich results
- **JSON-LD `FAQPage`** → éligible aux Rich Snippets Google Search

### Accessibilité
- `lang="fr"`, focus states, `sr-only` skip-link, `aria-label` / `aria-expanded`
- Contraste AA respecté sur les combinaisons utilisées

---

## 🍔 Curseurs personnalisés

Deux curseurs SVG fait maison correspondant à la DA :

- **`burger.svg`** → curseur global (un mini hamburger)
- **`drumstick.svg`** → curseur "pointer" sur tous les liens / boutons (pilon de poulet)

Définis dans `src/styles/global.css` :

```css
html { cursor: url('/cursors/burger.svg') 16 16, auto; }
a, button { cursor: url('/cursors/drumstick.svg') 14 4, pointer; }
```

---

## 📦 Données métier

Tout est centralisé dans `src/data/site.ts` :
- **SITE** : nom, description, coordonnées, horaires, paiements, note
- **LEGAL** : mentions légales (source [societe.com](https://www.societe.com/societe/chicken-ben-s-31-837889088.html) + [annuaire-entreprises.data.gouv.fr](https://annuaire-entreprises.data.gouv.fr))
- **MENU** : carte complète (Signatures, Burgers, Tacos, Wraps, Sides)
- **REVIEWS** : sélection d'avis clients
- **FAQ** : 8 questions / réponses
- **USPS** : arguments de vente (halal, frais, livraison...)

---

## 📝 Mentions légales (vérifiées)

- **Raison sociale** : CHICKEN BEN'S 31
- **Forme** : SAS, capital 500 €
- **SIRET** : 837 889 088 00014
- **SIREN** : 837 889 088
- **TVA** : FR61837889088
- **Siège** : 1 Passage de la Margeride, 31770 Colomiers
- **RCS** : Toulouse

Sources : [societe.com](https://www.societe.com/societe/chicken-ben-s-31-837889088.html),
[pappers.fr](https://www.pappers.fr/entreprise/chicken-bens-31-837889088),
[annuaire-entreprises.data.gouv.fr](https://annuaire-entreprises.data.gouv.fr).

---

## 📱 Responsive

Breakpoints Tailwind : `sm` (640), `md` (768), `lg` (1024), `xl` (1280).
Testé / pensé pour : **mobile-first**, desktop, tablette.

---

## ✅ Checklist de déploiement

- [ ] Remplacer les photos Unsplash du About par les vraies photos du resto
- [ ] Vérifier les liens Instagram / Facebook / Uber Eats / Deliveroo
- [ ] Générer une image OG `public/images/og-chickenbens.jpg` (1200×630)
- [ ] Connecter Google Search Console + Google Business Profile
- [ ] Ajouter un bandeau cookie conforme CNIL si tracking ajouté
- [ ] Faire la passe Lighthouse (cible : 95+ en Performance / SEO / Best Practices / Accessibilité)
