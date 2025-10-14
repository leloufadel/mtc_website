

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-surface text-neutral-dark antialiased">
        <AOSInit />
        <Navbar />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
