"use client";
import clsx from "clsx";
import Image from "next/image";
import BurgerMenu from "../fragments/BurgerMenu";
import NavBar from "../fragments/NavBar";
import burgerMenu from "@/assets/icons/burger-menu.png";
import close from "@/assets/icons/close-brown.svg";
import { useState } from "react";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const breakpoint = useTailwindBreakpoint();
  return (
    <div className="relative h-fit outline outline-black bg-white">
      <div className="relative z-10 container mx-auto py-4 px-8  flex justify-between items-center">
        {breakpoint === "sm" && (
          <Image
            onClick={() => setIsOpen(!isOpen)}
            width={isOpen ? 14 : 24}
            height={isOpen ? 4 : 24}
            src={isOpen ? close : burgerMenu}
            alt="burger-menu"
          />
        )}

        <Image
          width={144}
          height={42}
          className={clsx("md:w-[164px] md:h-[48px]")}
          src="/logo.png"
          alt="company-logo"
        />
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
