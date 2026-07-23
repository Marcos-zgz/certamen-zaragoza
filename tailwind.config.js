/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        xxs: "18rem",
      },
      // Definimos los colores de Mayka para poder usarlos en toda la web
      colors: {
        nude: "#F5E1D7",
        carbon: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
