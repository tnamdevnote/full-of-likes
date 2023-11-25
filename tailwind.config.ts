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
      },
    },
  },
  plugins: [],
};
export default config;
