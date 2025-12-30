import "server-only";
import { IRealEstate } from "@/types";

const baseUrl = process.env.STRAPI_URL!
  ? process.env.STRAPI_URL
  : "http://localhost:1337";

export async function getRealEstates(): Promise<IRealEstate[]> {
  try {
    const res = await fetch(
      `${baseUrl}/api/real-estates` +
        `?fields[0]=location` +
        `&fields[1]=price` +
        `&fields[2]=width` +
        `&fields[3]=height` +
        `&fields[4]=type` +
        `&populate[images][fields][0]=url` +
        `&populate[images][fields][1]=formats`,
      {
        next: { revalidate: 300 }, // ✅ OPTION 3 APPLIED
      }
    );

    if (!res.ok) {
      throw new Error("could fetch the real estates");
    }

    const json = await res.json();
    return json.data;
  } catch (err) {
    // ✅ Silent fail for ISR revalidation
    console.warn("Strapi revalidation failed — using cached data");
    return [];
  }
}
