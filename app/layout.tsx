import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Farida's Bakery",
  description: "The best bakery in Indore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen bg-pink-200">
          {/* The Header is always visible at the top */}
          <Header />

          {/* The main content area where the page components will be rendered */}
          <main className="grow">{children}</main>

          {/* The Footer is always visible at the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
