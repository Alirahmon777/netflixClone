/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0 15px",
      screens: {
        sm: "325px",
        md: "400px",
        mobile: "635px",
        tablet: "960px",
        desktop: "1240px",
        "2xl": "1400px",
        "3xl": "1560px",
      },
    },
    extend: {},
  },
  plugins: [],
};
