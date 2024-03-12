import "./globals.css";
import type { Metadata } from "next";
import { ptRootUI } from "./fonts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ptRootUI.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
