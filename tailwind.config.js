/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        gradientHome: "linear-gradient(to right, #1e293b, #475569, #0f172a)",
        gradientPlayer: "linear-gradient(to right, #1e293b, #64748b, #1e293b)",
        gradientLoader: "linear-gradient(to right, #155e75, #0891b2, #164e63)",
      },
      colors: {
        primary: "#1e293b",
        textPrimary: "white",
        textSecondary: "rgba(255, 255, 255, 0.6)",
        lightWhite: "rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
