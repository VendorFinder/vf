/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: '"Playfair Display", serif',
        lato: "'Lato', sans-serif",
        sans: ["Playfair Display", "sans-serif"],
        serif: ["Lato", "serif"],
      },
      backgroundImage: {
        "home-hero":
          "linear-gradient(rgba(4, 23, 42, 0.8), rgba(4, 23, 42, 0.8)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1687944515/heroImg_gl2a4z.png')",
        "whyUs-hero":
          "radial-gradient(#04172a 0%, rgba(4, 23, 42, 0.9), rgba(4, 23, 42, 0.9)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1687945895/Mask_group_8_jslqad.png')",
        "about-hero":
          "linear-gradient(rgba(4, 23, 42, 0.8), rgba(4, 23, 42, 0.8)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1686141958/about_bg1_onmam1.png')",
          "cat-hero":
          "linear-gradient(rgba(4, 23, 42, 0.8), rgba(4, 23, 42, 0.8)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1687972333/Mask_group_17_oji2e7.png')",
          "cat-herosm":
          "linear-gradient(rgba(4, 23, 42, 0.8), rgba(4, 23, 42, 0.8)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1687972373/Mask_group_18_nvcl2g.png')",
        "about-2":
          "linear-gradient(rgba(222, 242, 245, 0.5), rgba(222, 242, 245, 0.5)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1686141957/about_bg2_pjhkyz.png')",
        "about-3":
          "linear-gradient(rgba(222, 242, 245, 0.5), rgba(222, 242, 245, 0.5)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1686141957/about_bg3_ni5yxp.png')",
        arrowdownbg: "url('https://res.cloudinary.com/dgizre0g1/image/upload/v1687944499/arrowdownbg_f5v6l9.png')",
        arrowdownsm: "url('https://res.cloudinary.com/dgizre0g1/image/upload/v1687944497/arrowdownsm_fxnimr.png')",
        whyusbg:
          "linear-gradient(rgba(222, 242, 245, 0.8s), rgba(222, 242, 245, 0.5)), url('https://res.cloudinary.com/dgizre0g1/image/upload/v1687945895/Mask_group_8_jslqad.png')",
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
        regular: "400",
      },
    },
    plugins: [],
  },
};
