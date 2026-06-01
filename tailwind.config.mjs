/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Neurosage Hub brand palette
        // Primary: royal/cobalt blue (logo text colour)
        brand: {
          50:  '#eef2ff',
          100: '#d9e2ff',
          200: '#b3c5ff',
          300: '#809fff',
          400: '#4d78ff',
          500: '#2952f0',
          600: '#1e3fd4',  // ← closest to logo blue
          700: '#1730a8',
          800: '#12257c',
          900: '#0d1a58',
        },
        // Neutral dark backgrounds (black-based, matches site)
        dark: {
          DEFAULT: '#0a0a0a',
          soft:    '#111111',
          card:    '#181818',
          border:  '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Calm, readable type scale
      fontSize: {
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display':    ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};
