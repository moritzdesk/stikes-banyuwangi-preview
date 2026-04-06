/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './sanity.config.ts',
    './components/**/*.{js,ts,jsx,tsx}',
    './schemaTypes/**/*.{js,ts,jsx,tsx}',
  ],
  // Sanity Studio tidak menggunakan Tailwind CSS secara default
  // File ini hanya untuk suppress warning dari build tool
  theme: {
    extend: {},
  },
  plugins: [],
}

