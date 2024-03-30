import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["vietnamese"],
  display: "swap",
  variable: "--font-plusJakartaSans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["vietnamese"],
  display: "swap",
  variable: "--font-playFairDisplay",
});

export { plusJakartaSans, playfairDisplay };
