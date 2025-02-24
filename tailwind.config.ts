import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md:"770px",
      },
      colors: {
        lightSky:"#71ced0",
        customGray:"#4c4c4c",
        customRed:"#d01314",
        customGreen:"#00c11f",
      }
    },
  },
  plugins: [],
} satisfies Config;
