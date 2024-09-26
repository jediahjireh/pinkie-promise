import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const mouseMemoirs = localFont({
  src: "./fonts/MouseMemoirs-Regular.ttf",
  variable: "--font-mickey",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pinkie Promise?",
  description: "Virtual pinkie promise application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mouseMemoirs.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
