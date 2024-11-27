/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#11a3d4",
        secondaryColor: "#faf6f2",
      },
    },
  },
  plugins: [require("daisyui")],
};
