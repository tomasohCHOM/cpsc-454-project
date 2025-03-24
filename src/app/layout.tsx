import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Cloud Video Converter App",
  description: "CPSC 454 Project (can change description later)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div id="top" style={{ scrollMarginTop: "8rem" }}></div>
          <div className="bg-sky-50 h-auto min-h-screen text-stone-950 snap-y">
            <div className="max-w-5xl py-12 px-6 justify-center mx-auto">
              {children}
            </div>
            <div className="h-12 flex italic text-sm text-stone-950 justify-center items-center">
              by @Colormak3r - March 2025
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
