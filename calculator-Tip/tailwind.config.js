/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'strong-cyan': '#26c0ab',
        'very-DarkCyan': 'hsl(183, 100%, 15%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayishcyan': 'hsl(185, 41%, 84%)',
        'Very-lightgrayishcyan': ' hsl(189, 41%, 97%)',
      },
      fontFamily: {
        spaceMono: ['Space Mono', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
