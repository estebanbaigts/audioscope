/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Body text → Helvetica (clean, neutral)
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
        // Display / large titles → Platypi (wedge-serif, editorial)
        display: ['Platypi', 'Times New Roman', 'Georgia', 'serif'],
      },
      colors: {
        // Palette — marron / sable / beige + un fond profond pour l'éditorial sombre
        coal: '#0e0a06',     // fond hero — chaud, presque noir
        ink: '#1a1410',      // marron-noir
        coffee: '#3d2818',   // marron sombre
        mocha: '#6b4226',    // marron mid
        clay: '#a87a4f',     // marron clair / cuir
        warm: '#d8c39a',     // sable saturé
        sand: '#e8dcc6',     // beige clair
        cream: '#f4ece0',    // crème
        bone: '#fafaf7',     // blanc cassé
        chalk: '#ffffff',
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 9vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(2.25rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        'editorial': '0.32em',
        'tight2': '-0.04em',
      },
      transitionTimingFunction: {
        'silk': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
