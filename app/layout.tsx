import "./globals.css";

import { ptRootUI } from "./fonts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/animations/Preloader/Preloader";
import RouteChange from "./components/animations/RouteChange/RouteChange";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ptRootUI.className}`}>
        {/* <RouteChange /> */}
        {/* <Preloader /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
