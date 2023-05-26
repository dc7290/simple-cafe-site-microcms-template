/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        md: "8rem",
        lg: "10rem",
        xl: "16rem",
        "2xl": "12rem",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    letterSpacing: {
      xs: "-.1em",
      sm: "-.05em",
      normal: "0",
      lg: ".05em",
      xl: ".1em",
      "2xl": ".15em",
      "3xl": ".2em",
    },
    extend: {
      colors: {
        main: "#2B1205",
        secondary: "#1F0C02",
      },
      fontFamily: {
        serif: ["Shippori Mincho", "serif"],
        english: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
