import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "العقارات المتاحة للبيع والإيجار ",
  description:
    "استعرض العقارات المتاحة للبيع والإيجار من شقق وفلل وعقارات تجارية مع تفاصيل كاملة وصور محدثة.",
  keywords: [
    "العقارات المتاحة",
    "عقارات للبيع",
    "عقارات للإيجار",
    "شقق للبيع",
    "فلل للإيجار",
    "عقارات تجارية",
    "Beyond Construction",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "العقارات المتاحة | Beyond Construction",
    description: "مجموعة مميزة من العقارات السكنية والتجارية للبيع والإيجار.",
    type: "website",
    locale: "ar_SA",
    siteName: "Beyond Construction",
  },
};

export default function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {modal}
      <Toaster position="top-center" />
    </>
  );
}
