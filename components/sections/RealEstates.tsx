import React from "react";
import { realEstates } from "@/constants/real-estates";
import Title from "@/components/fragments/Title";
import RealEstate from "@/components/cards/RealEstate";
import clsx from "clsx";

const RealEstates = () => {
  return (
    <section
      className={clsx(
        "container mx-auto flex flex-col items-center gap-[90px] pt-[90px]"
      )}
    >
      <Title text="العقارات المتاحة " />
      <div
        className={clsx(
          "flex flex-wrap justify-center gap-[15px]",
          "md:gap-[30px] "
        )}
      >
        {realEstates.map((realEstate) => (
          <RealEstate key={realEstate.id} {...realEstate} />
        ))}
      </div>
    </section>
  );
};

export default RealEstates;
