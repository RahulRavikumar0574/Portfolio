import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Ravikumar - Full Stack Developer",
  description: "Portfolio of Rahul Ravikumar, a passionate Full Stack Developer specializing in modern web technologies, React, Node.js, and innovative solutions.",
  keywords: ["Rahul Ravikumar", "Full Stack Developer", "React", "Node.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Rahul Ravikumar" }],
  openGraph: {
    title: "Rahul Ravikumar - Full Stack Developer",
    description: "Portfolio showcasing innovative web development projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
