import { IRealEstate } from "@/types";

export const buildingTypes = {
  apartment: "شقة",
  floor: "دور",
  shop: "محل",
  showroom: "معرض",
  office: "مكتب",
  villa: "فيلا",
  warehouse: "هنجر",
  workshop: "ورشة",
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
  type: "apartment",
  price: 0,
  size: 0,
  city: "jeddah",
  condition: "sale",
  images: [],
  license_number: "",
};
