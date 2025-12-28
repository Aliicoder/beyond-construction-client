"use client";

import { createContext, useContext, useState } from "react";
import { IRealEstate } from "@/types";

interface ContextType {
  realEstates: IRealEstate[];
}

const RealEstateContext = createContext<ContextType | null>(null);

export function RealEstateProvider({
  initialData,
  children,
}: {
  initialData: IRealEstate[];
  children: React.ReactNode;
}) {
  const [realEstates] = useState(initialData);

  return (
    <RealEstateContext.Provider value={{ realEstates }}>
      {children}
    </RealEstateContext.Provider>
  );
}

export function useRealEstates() {
  const ctx = useContext(RealEstateContext);
  if (!ctx) {
    throw new Error("useRealEstates must be used inside RealEstateProvider");
  }
  return ctx;
}
