type Type = "building" | "apartment" | "villa";
type Image = {
  url: string;
};
export interface IRealEstate {
  id: number;
  location: string;
  type: Type;
  price: number;
  width: number;
  height: number;
  images: Image[];
}
