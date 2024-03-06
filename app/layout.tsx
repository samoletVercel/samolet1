import "./globals.css";
import type { Metadata } from "next";
import { ptRootUI } from "./fonts";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Главная",
  description: "дизайн-студия Самолет",
};

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
      </body>
    </html>
  );
}
