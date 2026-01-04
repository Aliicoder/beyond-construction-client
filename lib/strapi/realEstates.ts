import "server-only";
import { IRealEstate } from "@/types";

const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";

export async function getRealEstates(): Promise<IRealEstate[]> {
  const res = await fetch(
    `${baseUrl}/api/real-estates` +
      `?fields[0]=location` +
      `&fields[1]=price` +
      `&fields[2]=width` +
      `&fields[3]=height` +
      `&fields[4]=type` +
      `&fields[5]=condition` +
      `&fields[6]=city` +
      `&populate[images][fields][0]=url` +
      `&populate[images][fields][1]=formats`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
      next: { revalidate: 300 },
    }
  );
  if (!res.ok) throw new Error("خطاء في الاتصال بقاعدة البيانات ");
  const json = await res.json();
  return json.data;
}
