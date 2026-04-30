// Toutes les données métier du site sont centralisées ici.
// Source: site officiel chickenbens.fr, Uber Eats, annuaire-entreprises.data.gouv.fr, societe.com

export const SITE = {
  name: "Chicken Ben's",
  tagline: "Le vrai poulet frit & frais de Colomiers",
  description:
    "Chicken Ben's - Spécialiste du poulet frit et frais à Colomiers & Toulouse. Burgers, tacos, wraps, buckets, tenders tikka, crusty rice. Sur place, à emporter ou en livraison.",
  url: 'https://www.chickenbens.fr',
  locale: 'fr-FR',
  lang: 'fr',
  phone: '+33 5 67 11 53 23',
  phoneDisplay: '05 67 11 53 23',
  email: 'contact@chickenbens.fr',
  address: {
    street: '1 Passage de la Margeride',
    postal: '31770',
    city: 'Colomiers',
    region: 'Occitanie',
    country: 'FR',
    lat: 43.6124,
    lng: 1.3367,
  },
  openingHours: [
    { days: 'Lundi – Samedi', hours: '11h30 – 23h45' },
    { days: 'Dimanche', hours: '18h00 – 23h45' },
  ],
  openingHoursSchema: [
    // format Schema.org (jour abrégé + HH:MM-HH:MM)
    'Mo-Sa 11:30-23:45',
    'Su 18:00-23:45',
  ],
  social: {
    facebook: 'https://www.facebook.com/chickenbens/',
    instagram: 'https://www.instagram.com/chickenbens/',
    ubereats:
      'https://www.ubereats.com/fr/store/chicken-bens-colomiers/titmjAwnQrqk6hTChp-nkA',
    deliveroo: 'https://deliveroo.fr/',
    google: 'https://www.google.com/maps/place/Chicken+Ben%27s/@43.6124,1.3367,17z',
    // Lien direct vers les avis Google triés par meilleure note (positifs en premier).
    // TODO: remplacer PLACE_ID par le vrai Place ID de la fiche Google Business.
    // Solution de secours: recherche Google qui affiche la fiche + avis.
    googleReviews:
      'https://www.google.com/search?q=Chicken+Ben%27s+Colomiers+avis&hl=fr#lrd=,1,,,,',
  },
  payments: ['Swile', 'Ticket Restaurant', 'Up', 'Bimpli', 'Pluxee', 'CB', 'Espèces'],
  rating: { value: 4.6, count: 1200 },
} as const;

// Mentions légales (source: societe.com / annuaire-entreprises.data.gouv.fr)
export const LEGAL = {
  denomination: "CHICKEN BEN'S 31",
  forme: 'Société par Actions Simplifiée (SAS)',
  capital: '500,00 €',
  siret: '837 889 088 00014',
  siren: '837 889 088',
  tva: 'FR61837889088',
  rcs: 'RCS Toulouse',
  siege: '1 Passage de la Margeride, 31770 Colomiers',
  directeurPublication: "Le Président de CHICKEN BEN'S 31",
  hebergeur: {
    nom: 'OVH SAS',
    adresse: '2 rue Kellermann, 59100 Roubaix — France',
    telephone: '+33 9 72 10 10 07',
  },
} as const;

export const NAV = [
  { href: '#menu', label: 'Notre Carte' },
  { href: '#about', label: "L'Histoire" },
  { href: '#avis', label: 'Avis' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const;

// Les catégories reflètent la vraie carte Chicken Ben's (source : carte officielle restaurant)
// Format : price = prix principal · priceMenu = formule menu (frites + boisson) ou variante (taille)
export const MENU = [
  {
    cat: 'Signatures',
    emoji: '🔥',
    desc: 'Les incontournables de la maison, testés & approuvés par +1200 clients.',
    items: [
      { name: "Ben's Burger", desc: 'Salade, cheddar, steak, tenders, tranche dinde', price: '5,99 €', priceMenu: 'Menu 7,99 €', tag: 'Top ventes', rating: 96 },
      { name: 'Tacos Tikka', desc: 'Galette, fromagère, frites + tikka', price: '7,50 €', priceMenu: 'Menu 9,00 €', tag: 'Épicé', rating: 94 },
      { name: 'Crusty Rice', desc: 'Tenders ou Tikka · curry, creamy ou spicy', price: '7,00 €', priceMenu: 'Grand 9,00 €', tag: 'Nouveau', rating: 92 },
      { name: 'Bucket Family', desc: 'Boisson 1,5 L · wings · tenders · burgers · tacos', price: '48,00 €', tag: 'XXL', rating: 90 },
    ],
  },
  {
    cat: 'Burgers',
    emoji: '🍔',
    desc: 'Préparés à la commande, pain frais livré chaque matin. Menu = burger + frites ou potatoes + boisson.',
    items: [
      { name: 'Cheese Burger', desc: 'Tomate, steak, cheddar', price: '2,90 €', priceMenu: 'Menu 5,49 €' },
      { name: 'Double Cheese', desc: 'Tomate, double steak, double cheddar', price: '3,90 €', priceMenu: 'Menu 6,49 €' },
      { name: "Ben's Burger", desc: 'Salade, cheddar, steak, tenders, tranche dinde', price: '5,99 €', priceMenu: 'Menu 7,99 €' },
      { name: "Tender's Burger", desc: 'Salade, cheddar, tenders', price: '5,00 €', priceMenu: 'Menu 6,99 €' },
      { name: "Big Ben's", desc: 'Salade, double steak, cheddar', price: '5,50 €', priceMenu: 'Menu 7,50 €' },
      { name: 'Tikka Burger', desc: 'Salade, cheddar, poulet tikka', price: '5,49 €', priceMenu: 'Menu 7,49 €' },
      { name: 'Burger Fish', desc: 'Salade, filet de poisson pané, cheddar', price: '4,90 €', priceMenu: 'Menu 5,99 €' },
      { name: 'Suprême Burger', desc: 'Salade, tenders, cheddar, galette pdt', price: '5,90 €', priceMenu: 'Menu 7,99 €' },
      { name: '180g Burger', desc: 'Salade, steak 180g, double cheddar', price: '6,40 €', priceMenu: 'Menu 7,99 €' },
      { name: 'Raclette Bacon', desc: 'Steak, raclette, bacon dinde, sauce poivre', price: '5,99 €', priceMenu: 'Menu 7,99 €' },
      { name: 'Burger Végé', desc: 'Galette pdt, oignons, poivrons frits, cheddar, tomates', price: '5,00 €', priceMenu: 'Menu 6,50 €' },
      { name: 'Beef Burger', desc: 'Salade, steak, cheddar, galette pdt', price: '5,90 €', priceMenu: 'Menu 7,99 €' },
    ],
  },
  {
    cat: 'Tacos & Wraps',
    emoji: '🌯',
    desc: 'Galette, sauce fromagère, frites + garniture au choix. XL +2,00 € · Boursin +1,00 €.',
    items: [
      { name: 'Tacos Steak', price: '6,50 €', priceMenu: 'Menu 8,00 €' },
      { name: 'Tacos Mix (steak + tenders)', price: '7,50 €', priceMenu: 'Menu 9,00 €' },
      { name: 'Tacos Tikka', price: '7,50 €', priceMenu: 'Menu 9,00 €' },
      { name: 'Tacos Tenders', price: '7,00 €', priceMenu: 'Menu 8,50 €' },
      { name: 'Tacos Cordon Bleu', price: '7,00 €', priceMenu: 'Menu 8,50 €' },
      { name: 'Wraps', desc: 'Mix · Steak · Tenders · Tikka', price: 'En resto' },
    ],
  },
  {
    cat: 'Tex-Mex à partager',
    emoji: '🍗',
    desc: 'Poulet frais travaillé sur place, pané et frit minute. À l\'unité ou en portions.',
    items: [
      { name: 'Tenders', desc: '2 pcs 2,00 € · 4 pcs 3,90 € · 6 pcs 5,80 €', price: 'Menu 7,90 €' },
      { name: 'Hot Wings épicées', desc: '5 pcs 3,80 € · 8 pcs 5,90 € · 12 pcs 7,90 €', price: 'Menu 7,49 €' },
      { name: 'Pièces Chicken', desc: '1 pc 2,49 € · 3 pcs 5,99 €', price: 'Menu 7,99 €' },
      { name: 'Nuggets', desc: '5 pcs 3,90 € · 8 pcs 5,99 €', price: 'Menu 5,90 €' },
      { name: 'Nems', desc: '4 pcs 4,99 €', price: '8 pcs 7,99 €' },
      { name: 'Fish Tenders', desc: '3 pcs 2,70 €', price: '6 pcs 3,80 €' },
      { name: 'Beignets de crevettes', desc: '3 pcs 2,90 €', price: '6 pcs 4,90 €' },
      { name: 'Bouchées camembert', desc: '2 pcs 1,50 € · 4 pcs 2,80 €', price: '6 pcs 3,90 €' },
      { name: 'Onion Rings', desc: '5 pcs 1,90 € · 8 pcs 2,90 €', price: '12 pcs 4,00 €' },
      { name: 'Poppin Peppers', desc: '5 pcs 2,00 € · 8 pcs 3,00 €', price: '12 pcs 4,30 €' },
      { name: 'Pillow Fines Herbes', desc: '3 pcs 2,40 €', price: '6 pcs 3,90 €' },
      { name: 'Chilli Balls', desc: '3 pcs 2,40 €', price: '6 pcs 3,90 €' },
    ],
  },
  {
    cat: 'Crusty Rice & Salades',
    emoji: '🍚',
    desc: 'Notre nouveauté qui cartonne, et des salades fraîches préparées le matin.',
    items: [
      { name: 'Crusty Rice', desc: 'Tenders ou Tikka · sauces curry, creamy ou spicy', price: 'Moy. 7,00 €', priceMenu: 'Grand 9,00 €', tag: 'Nouveau' },
      { name: 'Salade Saumon', desc: 'Saumon, salade, tomate, olives', price: '6,00 €' },
      { name: 'Salade Tikka', desc: 'Chicken tikka, salade, tomate, olives', price: '5,50 €' },
      { name: 'Salade Tenders', desc: 'Tenders, salade, tomate, olives', price: '5,50 €' },
      { name: 'Salade Thon', desc: 'Thon, salade verte, tomates, olives', price: '4,50 €' },
    ],
  },
  {
    cat: 'Buckets à partager',
    emoji: '🪣',
    desc: 'Pour les soirées entre potes ou en famille. Boissons & frites comprises.',
    items: [
      { name: 'Bucket Duo', desc: '2 boissons 33 cl + 2 frites · 18 wings, 11 tenders ou mix', price: '16,00 €' },
      { name: 'Bucket Quattro', desc: 'Boisson 1,5 L + 4 frites · 31 wings, 15 tenders ou mix', price: '22,00 €' },
      { name: 'Bucket Family', desc: 'Boisson 1,5 L + 6 frites + 10 wings + 15 tenders + 2 tender burgers + 2 cheese burgers + 1 tacos', price: '48,00 €', tag: 'XXL' },
    ],
  },
  {
    cat: 'Kids & Desserts',
    emoji: '�',
    desc: 'Un menu pour les minots, et des desserts gourmands pour finir.',
    items: [
      { name: 'Menu Kids', desc: 'Cheese burger / 4 nuggets / 3 fish tenders ou 2 tenders + boisson + Kinder Maxi', price: '5,50 €', tag: 'Kids' },
      { name: 'Tarte Daim', price: '2,40 €' },
      { name: 'Tiramisu Maison', desc: 'Chocolat / caramel', price: '3,00 €' },
      { name: 'Häagen-Dazs', price: '2,90 €' },
      { name: 'Éclair', desc: 'Chocolat ou café', price: '2,70 €' },
    ],
  },
] as const;

export const REVIEWS = [
  {
    author: 'Laurent M.',
    rating: 5,
    date: '26/09/2025',
    source: 'Uber Eats',
    text: "C'est toujours aussi bon. Le poulet est ultra croustillant, les tenders tikka une tuerie.",
  },
  {
    author: 'Sofia B.',
    rating: 5,
    date: '14/07/2025',
    source: 'Google',
    text: "Le meilleur poulet frit de Colomiers, sans débat. Le Ben Burger est devenu notre rituel du vendredi.",
  },
  {
    author: 'Karim D.',
    rating: 4,
    date: '03/05/2025',
    source: 'Google',
    text: "Accueil au top, produits frais, halal, portions généreuses. Les tacos tikka méritent leur réputation.",
  },
  {
    author: 'Emma L.',
    rating: 5,
    date: '12/02/2025',
    source: 'Uber Eats',
    text: "Livraison rapide, c'était encore chaud et croustillant. Le crusty rice est addictif.",
  },
  {
    author: 'Jordan V.',
    rating: 5,
    date: '28/11/2024',
    source: 'Google',
    text: "On sent le produit frais, pas du surgelé. Rapport qualité/prix imbattable dans le quartier.",
  },
  {
    author: 'Nadia R.',
    rating: 4,
    date: '05/10/2024',
    source: 'Facebook',
    text: "Équipe souriante, ambiance cool, et surtout le poulet est dingue. Je recommande le menu Suprême.",
  },
] as const;

export const FAQ = [
  {
    q: "Où se trouve Chicken Ben's à Colomiers ?",
    a: "Notre restaurant est situé au 1 Passage de la Margeride, 31770 Colomiers, à deux pas du centre-ville et facilement accessible depuis Toulouse, Tournefeuille et Blagnac.",
  },
  {
    q: "Votre poulet est-il halal ?",
    a: "Oui, 100% de notre poulet est certifié halal, frais, jamais surgelé, et préparé à la commande dans notre cuisine.",
  },
  {
    q: "Quels sont vos horaires d'ouverture ?",
    a: "Nous sommes ouverts du lundi au samedi de 11h30 à 23h45, et le dimanche de 18h00 à 23h45. Service continu, idéal pour déjeuner, dîner ou un petit creux tardif.",
  },
  {
    q: "Peut-on commander en livraison ?",
    a: "Oui ! Retrouvez toute notre carte sur Uber Eats et Deliveroo pour une livraison rapide à Colomiers, Tournefeuille, Blagnac et Toulouse ouest.",
  },
  {
    q: 'Acceptez-vous les titres-restaurant ?',
    a: 'Absolument : nous acceptons Swile, Ticket Restaurant, Up, Bimpli (ex Apetiz) et Pluxee, sur place comme en livraison.',
  },
  {
    q: 'Proposez-vous des options végétariennes ?',
    a: "Oui, le Burger Végétarien et nos salades fraîches sont là pour ça. On travaille aussi de nouvelles recettes veggies, stay tuned !",
  },
  {
    q: 'Faites-vous de la restauration pour les groupes / événements ?',
    a: "Oui, nous proposons des buckets XXL et plateaux à partager pour anniversaires, soirées et événements d'entreprise. Contactez-nous au 05 67 11 53 23.",
  },
  {
    q: 'Vos produits sont-ils frais ?',
    a: "100% frais, jamais surgelés. Notre poulet est pané maison, notre pain livré quotidiennement, nos légumes coupés le matin même.",
  },
] as const;

export const USPS = [
  { icon: '🐔', title: '100% Frais', text: 'Poulet jamais surgelé, pané maison chaque matin.' },
  { icon: '🔥', title: 'Préparé minute', text: 'Cuisson à la commande pour un max de croustillant.' },
  { icon: '🕌', title: 'Halal certifié', text: 'Filière halal contrôlée, du producteur à ton assiette.' },
  { icon: '🛵', title: 'Livré chaud', text: 'Uber Eats & Deliveroo sur tout Colomiers et alentours.' },
] as const;
