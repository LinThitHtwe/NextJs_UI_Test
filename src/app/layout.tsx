"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/provider";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en" className="dark">
        <body
          className={`${inter.className} bg-lightmode-background overflow-x-hidden transition-all duration-75 dark:bg-background`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
