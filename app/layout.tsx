import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAdsense from "./components/GoogleAdsense";
import { GoogleAnalytics } from '@next/third-parties/google'


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
      <GoogleAdsense pId={"4830579227567887"} />
      <GoogleAnalytics gaId={"G-XDR1S8HECY"} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
