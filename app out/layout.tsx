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
  metadataBase: new URL("https://aerovisiondynamics.com"),
  title: {
    default: "Aerovision Dynamics",
    template: "%s | Aerovision Dynamics",
  },
  description:
    "Aerovision Dynamics is a student-led aerospace engineering Technasium division at Keizer Karel College focused on designing, prototyping, and testing next-generation flight projects.",
  keywords: [
    "Aerovision Dynamics",
    "student aerospace team",
    "Keizer Karel College",
    "Technasium",
    "aerospace engineering",
    "drone research",
    "student engineering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aerovisiondynamics.com/",
    title: "Aerovision Dynamics | Vision shapes the next leap.",
    description:
      "Discover how we design, simulate, and test cutting-edge flight projects at Keizer Karel College.",
    siteName: "Aerovision Dynamics",
    images: [
      {
        url: "/aerovision-dynamics-logo-new.png",
        width: 512,
        height: 512,
        alt: "Aerovision Dynamics logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerovision Dynamics | Vision shapes the next leap.",
    description:
      "Student-led aerospace engineers at Keizer Karel College building the next generation of flight projects.",
    images: ["/aerovision-dynamics-logo-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/aerovision-dynamics-logo-new.png", sizes: "32x32", type: "image/png" },
      { url: "/aerovision-dynamics-logo-new.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/aerovision-dynamics-logo-new.png",
    apple: "/aerovision-dynamics-logo-new.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
