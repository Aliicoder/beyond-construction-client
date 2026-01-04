import { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن ",
  description:
    "تعرف على Beyond Construction، شركة عقارية متخصصة في بيع وتأجير وإدارة العقارات بخبرة واحترافية عالية.",
  keywords: [
    "من نحن",
    "شركة عقارية موثوقة",
    "خبرة عقارية",
    "إدارة أملاك",
    "Beyond Construction",
  ],

  openGraph: {
    title: "من نحن | Beyond Construction",
    description:
      "شركة عقارية بخبرة في بيع وتأجير وإدارة العقارات مع التزام كامل بالجودة والشفافية.",
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
  return children;
}
