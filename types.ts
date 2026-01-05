import { Dispatch, SetStateAction } from "react";

type Type = "building" | "apartment" | "villa" | "warehouse" | "land";
type City = "riyadh" | "jeddah";
type Condition = "sale" | "rent";

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
  condition: Condition;
  city: City;
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

export interface IThirdButtonProps {
  text?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  className?: string;
  width?: "full" | "fit";
  onClick?: () => void;
  type?: "button" | "submit";
}
export interface IFourthButtonProps {
  text?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  className?: string;
  width?: "full" | "fit";
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit";
}
export interface ISecondButtonProps {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  className?: string;
  width?: "full" | "fit";
  onClick?: () => void;
  type?: "button" | "submit";
}

export interface IFirstButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
  href?: string;
  onClick?: () => void;
}
