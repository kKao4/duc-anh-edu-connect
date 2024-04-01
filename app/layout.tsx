import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/grid';
import { playfairDisplay, plusJakartaSans } from "./config/font";
import Header from "@/components/header";
import Footer from "@/components/footer";

// TODO: change metadata
export const metadata: Metadata = {
  title: "Đức Anh EduConnect",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vn" className={plusJakartaSans.variable + " " + playfairDisplay.variable}>
      <body className="font-plusJakartaSans overflow-x-hidden" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
