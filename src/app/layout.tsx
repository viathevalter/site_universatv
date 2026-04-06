import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | UniversaTV",
    default: "UniversaTV | O seu entretenimento premium",
  },
  description: "Acesse uma experiência moderna, flexível e pensada para acompanhar sua rotina em diferentes dispositivos compatíveis.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://universatv.com/",
    siteName: "UniversaTV",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} dark antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
