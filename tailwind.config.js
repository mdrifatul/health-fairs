/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue : '#025FD9',
        white : '#FFFFFF',
        red: "#F70000",
        black:"#191919"
      },
    },
    
  },
  plugins: [require("daisyui")],
}

