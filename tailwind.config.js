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
      colors: {
        // Redirigimos 'nude' al negro para corregir componentes antiguos automáticamente
        nude: "#111111", 
        carbon: "#1A1A1A",
        // Paleta elegante: Negro, Dorados y Crema
        brand: {
          black: "#111111",       // Negro fondo mate
          gold: "#D4AF37",        // Oro base
          'gold-light': "#F3E5AB", // Oro claro/brillo
          text: "#EAE6DF",        // Crema lectura
        },
      },
      // Degradado dorado para títulos y botones
      backgroundImage: {
        'gold-gradient': "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)",
      },
    },
  },
  plugins: [],
};
