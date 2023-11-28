import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        counter: "counter 0.75s ease-in ",
        splash: "splash 1s ease forwards",
      },
      keyframes: {
        counter: {
          "0%": {
            opacity: "0",
            transform: "translateY(-15px)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(-24px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-40px)",
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        splash: {
          "0%": {
            opacity: "0",
            transform: "translateY(30%)",
          },
          "3%, 70%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
