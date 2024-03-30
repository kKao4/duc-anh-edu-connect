import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plusJakartaSans: ["var(--font-plusJakartaSans)"],
        playFairDisplay: ["var(--font-playFairDisplay)"],
      },
      colors: {
        "primary-5": "#F0FAFF",
        "primary-10": "#B8DDFF",
        "primary-20": "#86BDFD",
        "primary-30": "#4E91F6",
        "primary-40": "#3468CD",
        "primary-50": "#2B46A8",
        "primary-60": "#132B7D",
        "primary-70": "#082072",
        "grayscaletext-10": "#C5C5C5",
        "grayscaletext-30": "#828282",
        "grayscaletext-40": "#6A6A6A",
        "grayscaletext-50": "#454545",
        "grayscaletext-80": "#262626",
        "gray-20": "#A9A9A9",
        "elevation-20": "#F8F8F8",
        "secondary-10": "#FFDDDE",
        "secondary-40": "#ED4343",
        "secondary-50": "#BE3136",
        "red-40": "#BE3136",
        "third-20": "#F1ECFA",
        "fourth-20": "#EBF5FA",
        "mobile-bg": "#f8f9ff",
        table: "rgba(134,189,253,0.10)",
      },
      boxShadow: {
        root: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        "section-1-mobile": "0px 0px 32px 0px rgba(0, 119, 229, 0.04), 0px 3px 24px 0px rgba(0, 132, 255, 0.04)",
        "section-1": "0px 0px 36px 0px rgba(0, 106, 218, 0.06), 2px 4px 32px 0px rgba(37, 168, 224, 0.04)",
        fourth: "0px 3px 24px 0px rgba(0, 132, 255, 0.04), 0px 0px 32px 0px rgba(0, 119, 229, 0.04)",
        "section-5-card":
          "0px -8px 24px 0px rgba(0, 0, 0, 0.08), 74px 151px 67px 0px rgba(158, 158, 158, 0.01), 42px 85px 57px 0px rgba(158, 158, 158, 0.05)",
      },
      backgroundImage: {
        "linear-1": "linear-gradient(95deg, #FC4D54 -29.92%, #CB2128 38.6%, #CB2128 85.49%)",
        "linear-4": "linear-gradient(180deg, #082072 0%, #2B46A8 100%)",
        "linear-5": "linear-gradient(95deg, #2E6BC6 9.83%, #2E6BC6 35.38%, #29A4EA 86.69%)",
        "linear-6": "linear-gradient(180deg, #173189 0%, #2742A2 97.76%)",
        "linear-7":
          "linear-gradient(77deg, #1A84D0 17.74%, rgba(26, 132, 208, 0.92) 57.79%, rgba(7, 78, 200, 0.65) 87.01%, rgba(11, 46, 170, 0.48) 100.45%)",
        "linear-8":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 2.47%, rgba(255, 255, 255, 0.85) 51.23%, rgba(255, 255, 255, 0.00) 95.12%)",
      },
      spacing: {
        "18": "4.5rem",
      },
      transitionDuration: {
        "400": "400ms",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.25,0.1,0.25,1)",
      },
    },
    fontSize: {
      "0.625": "0.625rem",
      "0.75": "0.75rem",
      "0.875": "0.875rem",
      "1": "1rem",
      "1.25": "1.25rem",
      "1.5": "1.5rem",
      "1.75": "1.75rem",
      "2": "2rem",
      "2.25": "2.25rem",
      "3": "3rem",
      "3.75": "3.75rem",
      "4": "4rem",
      "8.75": "8.75rem",
    },
    lineHeight: {
      "1": "100%",
      "1.2": "120%",
      "1.3": "130%",
      "1.4": "140%",
      "1.5": "150%",
      "1.6": "160%",
      "1.7": "170%",
    },
    letterSpacing: {
      "0.08": "0.08rem",
      "0.0625": "0.0625rem",
      "0.02": "0.02rem",
      "0.00875": "0.00875rem",
      "0.0075": "0.0075rem",
      "0.01313": "0.01313rem",
      "0.00375": "0.00375rem",
      "0.0025": "0.0025rem",
      "0.015": "0.015rem",
      "0.1875": "0.1875rem",
      "0.0125": "0.0125rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
