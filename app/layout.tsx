import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Uniwik — Save what you discover. Find it when you need it.",
  description:
    "Products, brands, ideas and useful content are discovered everywhere. Uniwik gives you one place to save, organize and revisit them.",
  icons: {
    icon: "/uniwik-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0084FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-[#0084ff] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}


