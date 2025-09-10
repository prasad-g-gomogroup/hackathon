import "./globals.css";
import Header from "@/components/Header";
import { Archivo } from "next/font/google";
import Footer from "@/components/Footer";
//import Header from "@/components/HeaderServer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400","500"], // pick what you actually use
  style: ["normal","italic"],
  variable: "--font-archivo",     // exposes a CSS var
  display: "swap",
});

export const metadata = { title: "One platform group", description: "Hackathon project" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable}`}>
        <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
