"use client";
import clsx from "clsx";
import Image from "next/image";
import BurgerMenu from "../fragments/BurgerMenu";
import NavBar from "../fragments/NavBar";
import burgerMenu from "@/assets/icons/burger-menu.png";
import close from "@/assets/icons/close-brown.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-full outline outline-black ">
      <div className="relative z-10 container mx-auto py-4 px-8  flex justify-between items-center bg-white">
        {isOpen ? (
          <Image
            onClick={() => setIsOpen(false)}
            width={14}
            height={4}
            src={close}
            alt="burger-menu"
          />
        ) : (
          <Image
            onClick={() => setIsOpen(true)}
            width={24}
            height={24}
            src={burgerMenu}
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
