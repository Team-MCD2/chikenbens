/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Extraits directement du logo Chicken Ben's
        ink: {
          DEFAULT: '#0B0B0B', // Noir profond (fond logo)
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        cream: '#FFF8EC', // Fond clair chaleureux
        crust: '#F4E4C1', // Pain / panure
        mustard: {
          DEFAULT: '#F5A623', // Jaune moutarde du texte "CHICKEN BEN'S"
          500: '#F5A623',
          600: '#E08E0B',
          700: '#B56E05',
        },
        rooster: {
          DEFAULT: '#E63328', // Rouge crête du coq
          500: '#E63328',
          600: '#C2271D',
          700: '#9B1C14',
        },
        beak: '#FFB703', // Jaune bec
        leaf: '#3FA34D', // Vert salade / halal
      },
      fontFamily: {
        // Typo d'affichage ultra-lisible, forte personnalité (style cartoon bold)
        display: ['"Bungee"', '"Bebas Neue"', 'Impact', 'sans-serif'],
        // Sous-titre western / americain (burger joint)
        heading: ['"Alfa Slab One"', '"Rubik Mono One"', 'serif'],
        // Corps de texte propre pour la lisibilité
        body: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Accent manuscrit pour les bulles / citations (côté street/fun)
        hand: ['"Caveat"', '"Patrick Hand"', 'cursive'],
      },
      backgroundImage: {
        'diag-stripes':
          'repeating-linear-gradient(45deg, rgba(230,51,40,0.08) 0 12px, transparent 12px 24px)',
        'checker':
          'repeating-conic-gradient(#fff 0 25%, #f4e4c1 0 50%) 50% / 24px 24px',
      },
      boxShadow: {
        pop: '6px 6px 0 0 #0B0B0B',
        'pop-red': '6px 6px 0 0 #E63328',
      },
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        pop: 'pop .6s ease-out both',
      },
    },
  },
  plugins: [],
};
