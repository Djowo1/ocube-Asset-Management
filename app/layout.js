import "./globals.css";
import Loader from "@/components/Loader";
import CubeDropSequence from "@/components/CubeDropSequence";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "O.CUBE Asset Management Ltd. | Verification, Tagging & Inventory Management",
  description: "CAC RC 1247860. Professional fixed asset physical verification, barcode, QR & RFID tagging, register reconciliation and inventory management software in Nigeria.",
};
export const viewport = { themeColor: "#000000", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Loader />
        <CubeDropSequence />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
