import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "var(--dark-blue)",
        moderateBlue: "var(--moderate-blue)",
        grayishBlue: "var(--grayish-blue)",
        lightGrayishBlue: "var(--light-grayish-blue)",
        softRed: "var(--soft-red)",
        paleRed: "var(--pale-red)",
        lightGray: "var(--light-gray)",
        veryLightGray: "var(--very-light-gray)",
        white: "var(--white)",
        black: "var(--black)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
