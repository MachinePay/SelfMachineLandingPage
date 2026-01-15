/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-900": "#685245", // marrom
        "brand-500": "#F3AC42", // laranja
        "cta-500": "#F3AC42", // laranja (botão principal)
        "cta-600": "#d18d1e", // laranja mais escuro para hover
        "sm-black": "#000000",
      },
    },
  },
  plugins: [],
};
