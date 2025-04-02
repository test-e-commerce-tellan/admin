module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E2753", // Main primary color
          dark: "#070B1D", // Darker shade of primary
        },
      },
    },
  },
  plugins: [],
};
