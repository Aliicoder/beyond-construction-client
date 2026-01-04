import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "تواصل معنا ",
  description:
    "تواصل مع Beyond Construction للاستفسار عن العقارات المتاحة أو للحصول على استشارة عقارية من فريقنا المتخصص.",
  keywords: [
    "تواصل معنا",
    "مكتب عقاري",
    "استشارة عقارية",
    "التواصل مع شركة عقارية",
    "Beyond Construction",
  ],

  openGraph: {
    title: "تواصل معنا | Beyond Construction",
    description: "نحن هنا للإجابة على استفساراتكم العقارية وتقديم أفضل الحلول.",
    type: "website",
    locale: "ar_SA",
    siteName: "Beyond Construction",
  },
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Toaster position="top-center" />
    </>
  );
}
