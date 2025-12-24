import clsx from "clsx";
import Image from "next/image";
import BurgerMenu from "../fragments/BurgerMenu";
import NavBar from "../fragments/NavBar";

const Header = () => {
  return (
    <div
      className={clsx(
        "h-[85px] outline outline-black bg-white",
        "md:h-[130px]"
      )}
    >
      <div className="container mx-auto px-8 h-full flex justify-between items-center">
        <BurgerMenu />
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
    </div>
  );
};

export default Header;
