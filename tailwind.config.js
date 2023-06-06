/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'playfair': '"Playfair Display", serif',
        'lato': "'Lato', sans-serif",
        sans: ["Playfair Display", "sans-serif"],
        serif: ["Lato", "serif"],
      },
      backgroundImage: {
        'about-hero': "linear-gradient(rgba(4, 23, 42, 0.8), rgba(4, 23, 42, 0.8)), url('./src/assets/about/about_bg1.png')",
        'about-2': "linear-gradient(rgba(222, 242, 245, 0.5), rgba(222, 242, 245, 0.5)), url('./src/assets/about/about_bg2.png')",
        'about-3': "linear-gradient(rgba(222, 242, 245, 0.5), rgba(222, 242, 245, 0.5)), url('./src/assets/about/about_bg3.png')",
        'arrowdownbg': "url('./src/assets/about/arrowdownbg.png')",
        'arrowdownsm': "url('./src/assets/about/arrowdownsm.png')"
      },
      colors: {
        primary: "#0C4E8B",
        secondary: "#04172A",
        "body-text-1": "#191A26",
        "body-text-2": "#555C69",
        "background-1": "#DEF2F5",
        "background-2": "#F7ECE1",
        neutral: "#FFFFFF",
        success: "#296D18",
        error: "#AE1A1A",
      },
      fontSize: {
        "heading-1": "3.125rem",
        "heading-2": "2.813rem",
        "heading-3": "2.188rem",
        "heading-4": "1.875rem",
        "heading-5": "1.688rem",
        "subHeading-1": "1.563rem",
        "subHeading-2": "1.25rem",
        "body-1": "1.125rem",
        "body-2": "1rem",
        "Button-1": "1rem",
        "Button-1": "0.875rem",
      },
      fontWeight: {
        bold: "700",
        semiBold: "600",
        regular:"400",
      },
    },
    plugins: [],
  },
}; 
