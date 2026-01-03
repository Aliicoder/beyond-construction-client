import { Dispatch, SetStateAction } from "react";

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
export interface IPaginationBar {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export interface RealEstateProps {
  realEstate: IRealEstate;
  className?: string;
}

interface IBlock {
  question: string;
  answer: string;
}
export interface IFAQProps {
  index: number;
  block: IBlock;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

interface IService {
  title: string;
  description: string;
}
export interface IServiceProps {
  index: number;
  service: IService;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export interface TitleProps {
  text: string;
}
