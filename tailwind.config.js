/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}",],
  screens:{
      sm: "480px",
      md: '768px',
      lg: '1028px'
    },
  theme: {
    extend: {
      container:{
        center : true,
        padding:{
          DEFAULT: "1rem",
          sm: "1.5rem"
        }
      },
    },
  },
  plugins: [],
}

