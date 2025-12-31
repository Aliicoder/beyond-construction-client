"use server";
import "server-only";

const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";

export const createMessage = async (data: any) => {
  const res = await fetch(`${baseUrl}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });
  if (!res.ok) throw new Error("خطاء في الاتصال بقاعدة البيانات ");
  return res.json();
};
