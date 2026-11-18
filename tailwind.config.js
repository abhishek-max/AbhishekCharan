/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1B2D',
        'ink-2': '#18273D',
        paper: '#F5F7FA',
        mute: '#56657A',
        line: '#DDE3EB',
        brand: { DEFAULT: '#2457D6', dark: '#1A43AE', soft: '#E8EEFC' },
        gain: { DEFAULT: '#0FA37F', bright: '#2FD3A6' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        prose: '66ch',
      },
    },
  },
  plugins: [],
};
