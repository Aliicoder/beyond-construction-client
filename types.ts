type Type = "building" | "apartment" | "villa";
type Image = {
  url: string;
};
export interface IRealEstate {
  documentId: string;
  location: string;
  type: Type;
  price: number;
  width: number;
  height: number;
  images: Image[];
}
