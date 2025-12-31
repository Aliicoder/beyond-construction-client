"use server";
import "server-only";

const baseUrl = "http://localhost:1337";

export const createBooking = async (data: any) => {
  console.log(data);
  const res = await fetch(`${baseUrl}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });
  console.log(res);
  if (!res.ok) throw new Error("خطاء في الاتصال بقاعدة البيانات ");
  return res.json();
};
