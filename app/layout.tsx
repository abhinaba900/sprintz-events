import type { Metadata } from "next";
import { Lexend_Deca, Inter } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sprintz Events | High-Energy Corporate & Sports Events",
  description: "From corporate offsites to large-scale sports tournaments, Sprintz Events delivers end-to-end event experiences with precision and energy.",
};

import { ModalProvider } from "@/context/ModalContext";
import { QuoteModal } from "@/components/QuoteModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexendDeca.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ModalProvider>
          {children}
          <QuoteModal />
        </ModalProvider>
      </body>
    </html>
  );
}
