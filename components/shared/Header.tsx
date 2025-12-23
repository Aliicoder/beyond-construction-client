import clsx from "clsx";
import Link from "next/link";
import burgerMenu from "@/assets/icons/burger-menu.png";
import Image from "next/image";
import navs from "@/constants/navs";

const Header = () => {
  return (
    <div
      className={clsx(
        "h-[85px] outline-[1px] outline-black bg-white",
        "md:h-[130px]"
      )}
    >
      <div className="container mx-auto px-[30px] h-full flex justify-between items-center">
        <Image
          width={24}
          height={24}
          className={clsx("md:hidden")}
          src={burgerMenu}
          alt="company logo"
        />
        <Image
          width={144}
          height={42}
          className={clsx("md:w-[164px] md:h-[48px]")}
          src="/logo.png"
          alt="company logo"
        />
        <ul
          className={clsx(
            "gap-[60px] hidden flex-row items-center text-lg",
            "md:flex"
          )}
        >
          {navs.map((nav) => (
            <li key={nav.name}>
              <Link href={""}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
