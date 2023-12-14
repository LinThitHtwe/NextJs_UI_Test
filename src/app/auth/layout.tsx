import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
