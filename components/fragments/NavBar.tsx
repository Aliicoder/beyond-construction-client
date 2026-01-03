"use client";
import navs from "@/constants/navs";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <>
      {navs.map((nav) => {
        const isActive =
          nav.href === pathname ||
          (pathname.startsWith(nav.href) && nav.href !== "/");
        return (
          <li key={nav.name}>
            <Link
              className={clsx(
                "text-lg cursor-pointer transition-all ease-in-out duration-300",
                "hover:font-bold",
                isActive && "font-bold"
              )}
              href={nav.href}
            >
              {nav.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavBar;
