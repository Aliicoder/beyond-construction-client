"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import burgerMenu from "@/assets/icons/burger-menu.png";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import navs from "@/constants/navs";
import closeIconPath from "@/assets/icons/close.svg";
import patternPath from "@/assets/patterns/pattern.png";
import { usePathname, useRouter } from "next/navigation";
const BurgerMenu = () => {
  const pathname = usePathname();
  const breakpoint = useTailwindBreakpoint();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const navigate = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };
  useEffect(() => {
    if (breakpoint === "lg") setIsOpen(false);
  }, [breakpoint]);
  return (
    <>
      <Image
        onClick={() => setIsOpen(true)}
        width={24}
        height={24}
        className={clsx("md:hidden")}
        src={burgerMenu}
        alt="burger-menu"
      />
      {isOpen && (
        <div className="z-40 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-first text-white">
          <Image
            className="z-50 absolute top-12 right-12 cursor-pointer "
            onClick={() => setIsOpen(false)}
            width={16}
            height={16}
            src={closeIconPath}
            alt="close-icon"
          />
          <ul className="flex flex-col gap-8 items-center">
            {navs.map((nav) => {
              const isActive = pathname === nav.href;
              return (
                <li key={nav.name}>
                  <button
                    className={clsx(
                      "text-lg text-center",
                      "md:text-lg",
                      isActive && "font-bold"
                    )}
                    onClick={() => navigate(nav.href)}
                  >
                    {nav.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <Image
            width={215}
            height={197}
            className={clsx(
              "z-0 absolute object-contain left-0 bottom-0 -translate-y-1/3 -translate-x-1/3 rotate-90",
              "md:w-[390px] md:h-[360] md:bottom-0 md:top-auto md:translate-y-1/3  md:rotate-0"
            )}
            src={patternPath}
            alt="pattern"
          />
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
