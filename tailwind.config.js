/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,js,html,md,yml,yaml}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px black',
        'custom-small': '0px 3px black',
      },
    },
  },
  plugins: [require('daisyui')],
};
