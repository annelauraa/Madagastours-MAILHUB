/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'mono': ['Menlo', 'Monaco', 'monospace'],
      },
      backgroundColor: {
        'custom-bg': '#505050',
        'mdt-bg': '#ed6a06'
      },
    },
  },
  content: [
        './src/**/*.vue',
        './public/index.html',
      ],
  theme: {
    extend: {},
  },
  plugins: [],
}

