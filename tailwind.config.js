/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'playfair': '"Playfair Display", serif',
        'lato': "'Lato', sans-serif"
      },
      backgroundImage: {
        'about-hero': "linear-gradient(rgba(4, 23, 42, 0.8), rgba(4, 23, 42, 0.8)), url('./src/assets/about/about_bg1.png')",
        'about-2': "linear-gradient(rgba(222, 242, 245, 0.5), rgba(222, 242, 245, 0.5)), url('./src/assets/about/about_bg2.png')",
        'about-3': "linear-gradient(rgba(222, 242, 245, 0.5), rgba(222, 242, 245, 0.5)), url('./src/assets/about/about_bg3.png')",
        'arrowdownbg': "url('./src/assets/about/arrowdownbg.png')"
      }
    },
  },
  plugins: [],
};
