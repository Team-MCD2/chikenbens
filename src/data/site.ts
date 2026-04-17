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

// Les catégories reflètent la vraie carte Chicken Ben's (source Uber Eats)
export const MENU = [
  {
    cat: 'Signatures',
    emoji: '🔥',
    desc: 'Les incontournables de la maison, testés & approuvés par +1000 clients.',
    items: [
      { name: 'Menu Ben Burger', price: '11,77 €', tag: 'Top ventes', rating: 96 },
      { name: 'Menu Tacos Tikka', price: '13,26 €', tag: 'Épicé', rating: 94 },
      { name: 'Menu Tacos Tenders', price: '12,52 €', tag: 'Croustillant', rating: 90 },
      { name: 'Menu Burger Raclette Bacon', price: '11,77 €', tag: 'Ultra fondant', rating: 85 },
    ],
  },
  {
    cat: 'Burgers',
    emoji: '🍔',
    desc: 'Du simple cheese au Ben burger maison, tout est préparé à la commande.',
    items: [
      { name: 'Cheese Burger', price: '6,61 €' },
      { name: 'Double Cheese', price: '8,08 €' },
      { name: 'Tikka Burger', price: '11,03 €' },
      { name: 'Suprême Burger', price: '11,03 €' },
      { name: 'Tenders Burger', price: '10,29 €' },
      { name: 'Burger Beef', price: '11,05 €' },
      { name: 'Fish Burger', price: '8,82 €' },
      { name: 'Burger Végétarien', price: '8,85 €' },
    ],
  },
  {
    cat: 'Tacos',
    emoji: '🌯',
    desc: 'Tacos French style, viande au choix, fromagère onctueuse, sauces maison.',
    items: [
      { name: 'Tacos Tenders', price: '12,52 €' },
      { name: 'Tacos Mix', price: '13,26 €' },
      { name: 'Tacos Tikka', price: '13,26 €' },
      { name: 'Tacos Steak', price: '11,79 €' },
      { name: 'Tacos Cordon', price: '12,52 €' },
    ],
  },
  {
    cat: 'Wraps & Buckets',
    emoji: '🍗',
    desc: 'À partager ou pour les gros appétits : tenders, wings, nuggets, onion rings.',
    items: [
      { name: 'Menu Wrap Tenders', price: '10,89 €' },
      { name: 'Menu Wrap Mix (steak + tenders)', price: '11,70 €' },
      { name: 'Menu 6 Tenders', price: '10,90 €' },
      { name: 'Bucket Mix (à partager)', price: 'Dès 18,90 €' },
    ],
  },
  {
    cat: 'Sides & Desserts',
    emoji: '🍟',
    desc: 'Salades fraîches, crusty rice, frites maison et desserts gourmands.',
    items: [
      { name: 'Crusty Rice 🍚', price: '7,90 €' },
      { name: 'Salade Chicken Caesar', price: '9,50 €' },
      { name: 'Onion Rings', price: '3,90 €' },
      { name: 'Donut glacé', price: '2,50 €' },
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
