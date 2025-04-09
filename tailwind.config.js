// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'zoom-pan': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.1) translate(-2%, -2%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
      },
      fontFamily: {
        codystar: ['"Codystar"'],
        dosis: ['"Dosis"', 'sans-serif'],
        pacifico: ['"Pacifico"', 'cursive'],
        fredericka: ['"Fredericka the Great"', 'cursive'],
      },
      animation: {
        'zoom-pan': 'zoom-pan 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};