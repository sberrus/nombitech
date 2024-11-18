import type { Config } from "tailwindcss";
import * as colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
        secondary: colors.amber
      },
    },
  },
  plugins: [],
};
export default config;
