/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/images/hero.svg')",
      },
      fontFamily: {
        Aeonik: "Aeonik",
        HelveticaNeue: "HelveticaNeue",
        Ramabhadra: "Ramabhadra",
        Inter: "Inter",
      },
      fontSize: {
        sm: [".875rem", { lineHeight: "1.25", fontWeight: "400" }],
        base: ["1rem", { lineHeight: "1.25", fontWeight: "400" }],
        lg: ["1.5rem", { lineHeight: "1.25", fontWeight: "500" }]
      },
      colors: { 

      }
    }
  },
  plugins: [],
}

