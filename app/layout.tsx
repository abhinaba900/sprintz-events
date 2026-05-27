import type { Metadata } from "next";
import { Lexend_Deca, Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sprintz-events.com"),
  title: "Sprintz Events | High-Energy Corporate & Sports Events",
  description: "From corporate offsites to large-scale sports tournaments, Sprintz Events delivers end-to-end event experiences with precision and energy.",
  openGraph: {
    images: [
      {
        url: "/Sprintz full logo.svg",
        width: 643,
        height: 284,
        alt: "Sprintz Events Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Sprintz full logo.svg"],
  },
};

import { ModalProvider } from "@/context/ModalContext";
import { QuoteModal } from "@/components/QuoteModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexendDeca.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ModalProvider>
          {children}
          <QuoteModal />
          <WhatsAppButton />
        </ModalProvider>
        {/* Tawk.to Chat Widget */}
        <Script id="tawk-chat" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6a13f51289bdfe1c3318db4d/1jpevakuo';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
