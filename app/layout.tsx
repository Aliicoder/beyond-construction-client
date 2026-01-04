import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ContactBar from "@/components/buttons/ContactBar";

export const metadata: Metadata = {
  title: {
    default: "Beyond Construction | شركة عقارية لبيع وتأجير العقارات",
    template: "%s | Beyond Construction",
  },
  description:
    "Beyond Construction شركة عقارية متخصصة في بيع وتأجير العقارات السكنية والتجارية، نقدم فرصًا استثمارية موثوقة وخدمات عقارية احترافية.",
  keywords: [
    "شركة عقارية",
    "عقارات للبيع",
    "عقارات للإيجار",
    "استثمار عقاري",
    "شقق للبيع",
    "فلل للإيجار",
    "Beyond Construction",
  ],
  openGraph: {
    title: "Beyond Construction | شركة عقارية",
    description:
      "حلول عقارية متكاملة تشمل بيع وتأجير العقارات السكنية والتجارية باحترافية عالية.",
    type: "website",
    locale: "ar_SA",
    siteName: "Beyond Construction",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`antialiased font-janna min-h-screen bg-second`}>
        <Header />
        <ContactBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
