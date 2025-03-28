import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
        <main id="app" className="bg-sky-50">
          <Navbar />
          <div className="text-stone-950 snap-y">
            <div className="max-w-5xl py-12 px-6 justify-center mx-auto">
              {children}
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
