import fakeImage from "@/assets/images/real-estates/1.jpg";
import { IRealEstate } from "@/types";

export const buildingTypes = {
  building: "عمارة",
  apartment: "شقة",
  villa: "فيلا",
};
export const fakeData: IRealEstate[] = [
  {
    documentId: "dfscwerewr",
    location: "الرياض - حي الروابي مخرج 15",
    type: "apartment",
    price: 7500,
    width: 10,
    height: 10,
    images: [{ url: fakeImage.src }],
  },
  {
    documentId: "dfscwerewr",
    location: "الرياض - حي الروابي مخرج 15",
    type: "apartment",
    price: 86000,
    width: 10,
    height: 10,
    images: [{ url: fakeImage.src }],
  },
  {
    documentId: "dfscwerewr",
    location: "الرياض - حي الروابي مخرج 15",
    type: "apartment",
    price: 86000,
    width: 10,
    height: 10,
    images: [{ url: fakeImage.src }],
  },
];
