"use client";
import { useEffect } from "react";
import clsx from "clsx";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import navs from "@/constants/navs";
import { usePathname } from "next/navigation";
import Link from "next/link";
const BurgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const breakpoint = useTailwindBreakpoint();
  useEffect(() => {
    if (breakpoint === "md") setIsOpen(false);
  }, [breakpoint]);
  return (
    <ul
      className={clsx(
        "max-h-0 gap-8 flex flex-col items-center text-white bg-first",
        "transition-all ease-in-out duration-700 pointer-events-none opacity-0",
        isOpen &&
          breakpoint !== "md" &&
          "max-h-[400px] p-8 opacity-1 pointer-events-auto"
      )}
    >
      {navs.map((nav) => {
        const isActive =
          pathname === nav.href ||
          (pathname.startsWith(nav.href) && nav.href !== "/");
        return (
          <li key={nav.name}>
            <Link
              href={nav.href}
              className={clsx("text-lg text-center", isActive && "font-bold")}
            >
              {nav.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerMenu;
