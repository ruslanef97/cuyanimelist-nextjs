/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      color: {
        primary: '#eeeeee',
        third: '#ffc639',
        accent: '#b434eb',
        secondary: '#393e46',
        dark: '#222831'
      }
    }
  },
  plugins: [],
};
