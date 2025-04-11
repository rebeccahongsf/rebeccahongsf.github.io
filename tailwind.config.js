module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sage green color variations
        sage: {
          50: '#f4f7f1',
          100: '#e6ede0',
          200: '#cfdbc2',
          300: '#b3c7a0',
          400: '#96b37e',
          500: '#799f5a',
          600: '#608047',
          700: '#4d6639',
          800: '#3d4f2d',
          900: '#2b3820',
        },
        // Lilac color variations
        lilac: {
          50: '#f7f4fa',
          100: '#efe8f4',
          200: '#ded1e9',
          300: '#c8b0da',
          400: '#b18fcb',
          500: '#9a6dbc',
          600: '#8157a7',
          700: '#684686',
          800: '#523768',
          900: '#3d284d',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#608047',
              '&:hover': {
                color: '#4d6639',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
