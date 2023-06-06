/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Playfair Display", "sans-serif"],
      serif: ["Lato", "serif"],
    },
    extend: {
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
