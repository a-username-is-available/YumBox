/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,htm,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        black: '#111827',
        dark: '#1f2937',
        gray: '#6b7280',
        light: '#d1d5db',
        white: '#f9fafb',
        primary: '#f97316',
        'primary-light': '#fed7aa',
        'primary-dark': '#9a3412',
        secondary: '#eab308',
        'secondary-light': '#fefce8',
        'secondary-dark': '#a16207'
      }
    },
  },
  plugins: [],
}
