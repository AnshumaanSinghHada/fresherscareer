import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAdsense from "./components/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freshers Career",
  description: "Welcome to Freshers Career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAdsense pId={"4830579227567887"}/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
