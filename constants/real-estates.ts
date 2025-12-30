import fakeImage from "@/assets/images/real-estates/1.jpg";
import { IRealEstate } from "@/types";

export const buildingTypes = {
  building: "عمارة",
  apartment: "شقة",
  villa: "فيلا",
};
export const fakeData: IRealEstate[] = [
  {
    id: 1,
    location: "الرياض - حي الروابي مخرج 15",
    type: "apartment",
    price: 7500,
    width: 10,
    height: 10,
    images: [{ url: fakeImage.src }],
  },
  {
    id: 2,
    location: "الرياض - حي الروابي مخرج 15",
    type: "apartment",
    price: 86000,
    width: 10,
    height: 10,
    images: [{ url: fakeImage.src }],
  },
  {
    id: 3,
    location: "الرياض - حي الروابي مخرج 15",
    type: "apartment",
    price: 86000,
    width: 10,
    height: 10,
    images: [{ url: fakeImage.src }],
  },
];
