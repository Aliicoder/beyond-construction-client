import fakeImage from "@/assets/images/real-estates/1.jpg";
import { IRealEstate } from "@/types";

export const buildingTypes = {
  building: "عمارة",
  apartment: "شقة",
  villa: "فيلا",
};
export const emptyEstate: IRealEstate = {
  documentId: "",
  location: "",
  type: "building",
  price: 0,
  width: 0,
  height: 0,
  images: [],
};
