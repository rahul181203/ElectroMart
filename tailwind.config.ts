import { gold, grass, indigo, ruby, sage, sky } from "@radix-ui/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      ...sage,
      ...ruby,
      ...grass,
      ...gold,
      ...sky,
      ...indigo
    }
  },
  plugins: [],
};
export default config;
