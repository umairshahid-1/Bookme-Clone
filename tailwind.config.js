/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primaryColor: "#3d5cb8",
        yellowColor: "#334c99",
        purpleColor: "#64748b",
        irisBlueColor: "#01B5C5",
        headingColor: "#0f172a",
        textColor: "#4E545F",
      },

      boxShadow:
      {
        panelShadow: "rgb(17,12,46,0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

