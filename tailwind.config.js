/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          black: '#000000',
          prussian: '#14213d',
          orange: '#fca311',
          alabaster: '#e5e5e5',
          white: '#ffffff',
        },
      },
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
        'grid-pattern':
          'linear-gradient(rgba(252,163,17,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(252,163,17,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 40px 4px rgba(252,163,17,0.3)',
        card: '0 0 0 1px rgba(252,163,17,0.12)',
        'card-hover': '0 0 0 1px rgba(252,163,17,0.5), 0 8px 32px rgba(252,163,17,0.1)',
      },
    },
  },
  plugins: [],
}
