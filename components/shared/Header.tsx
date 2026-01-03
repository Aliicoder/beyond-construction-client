"use client";
import clsx from "clsx";
import BurgerMenu from "@/components/fragments/BurgerMenu";
import NavBar from "@/components/fragments/NavBar";
import cross from "@/assets/icons/cross-brown.svg";
import { useState } from "react";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const breakpoint = useTailwindBreakpoint();
  return (
    <div className="outline outline-black bg-white">
      <div className="mx-auto py-4 px-8 container flex justify-between items-center">
        {breakpoint === "sm" && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "w-[16px] h-[16px] transition ease-in-out duration-300 cursor-pointer",
              isOpen && "rotate-45"
            )}
          >
            <img
              className="size-full object-contain"
              src={cross.src}
              alt="cross-menu"
            />
          </div>
        )}

        <div className={clsx("w-[144px] h-[42px]", "md:w-[164px] md:h-[48px]")}>
          <img
            className="size-full object-contain"
            src="/logo.png"
            alt="company-logo"
          />
        </div>

        <ul
          className={clsx(
            "gap-12 hidden flex-row items-center text-lg",
            "md:flex"
          )}
        >
          <NavBar />
        </ul>
      </div>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
