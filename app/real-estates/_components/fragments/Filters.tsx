import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

type TConditions = "all" | "sale" | "rent";
type TCities = "all" | "riyadh" | "jeddah";

export interface IFilterProps {
  setCondition: Dispatch<SetStateAction<TConditions>>;
  setCity: Dispatch<SetStateAction<TCities>>;
  setPage: (page: number) => void;
}

const Filters = ({ setCondition, setCity, setPage }: IFilterProps) => {
  return (
    <div className="p-8 w-full flex flex-wrap gap-4 justify-center border-b md:justify-start">
      <Select
        onValueChange={(value) => {
          setCondition(value as any);
          setPage(1);
        }}
      >
        <SelectTrigger className="w-[180px] border border-black bg-white">
          <SelectValue placeholder="النوع" />
        </SelectTrigger>

        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectLabel>النوع</SelectLabel>
            <SelectItem value="all">الكل</SelectItem>
            <SelectItem value="sale">للبيع</SelectItem>
            <SelectItem value="rent">للإيجار</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => {
          setCity(value as any);
          setPage(1);
        }}
      >
        <SelectTrigger className="w-[180px] border border-black bg-white">
          <SelectValue placeholder="الموقع" />
        </SelectTrigger>

        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectLabel>الموقع</SelectLabel>
            <SelectItem value="all">الكل</SelectItem>
            <SelectItem value="riyadh">الرياض</SelectItem>
            <SelectItem value="jeddah">جدة</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
