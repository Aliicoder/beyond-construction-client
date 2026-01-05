import { IRealEstate } from "@/types";

export const buildingTypes = {
  building: "عمارة",
  apartment: "شقة",
  villa: "فيلا",
  land: "أرض",
  warehouse: "هنجر",
};
export const conditionTypes = {
  sale: "للبيع",
  rent: "للإيجار",
};
export const cityTypes = {
  jeddah: "جدة",
  riyadh: "الرياض",
};
export const emptyEstate: IRealEstate = {
  documentId: "",
  location: "",
  type: "building",
  price: 0,
  width: 0,
  height: 0,
  city: "jeddah",
  condition: "sale",
  images: [],
};
