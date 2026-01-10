import { IRealEstate } from "@/types";

export const handleWhatsapp = ({ realEstate }: { realEstate: IRealEstate }) => {
  const { license_number, location, size, type, price } = realEstate;

  const message = `
مرحباً 👋
أرغب في حجز هذا العقار:

📌 رقم الترخيص: ${license_number ? license_number : "غير محدد"}
🏷️ النوع: ${type}
📍 الموقع: ${location}
📐 المساحة: ${size ? size : "غير محدد"}
💰 السعر: ${price ? price.toLocaleString() + " ر.س" : "حسب الطلب"}

🔗 رابط العقار:
${window.location.href}
  `.trim();

  const phone = "916366313572";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
