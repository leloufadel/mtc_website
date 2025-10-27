

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
export const metadata = {
  title: "MTC",
  icons: {
    icon: [
      { url: "/mtc-logo-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/mtc-logo-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/mtc-logo-180x180.png",
  },
};


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
