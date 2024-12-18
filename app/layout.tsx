import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "../components/main/StarBackground";
import "@/components/main/TeamMember.module.css"
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import YoutubePlayer from "@/components/main/videos";
import styles from "@/components/main/Navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matrixhive Innovations",
  description: "Transforming industries with cutting-edge technology and visionary solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <YoutubePlayer />
        <Footer />
      </body>
    </html>
  );
}
