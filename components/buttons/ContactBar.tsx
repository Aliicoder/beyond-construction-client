"use client";
import Link from "next/link";
import clsx from "clsx";
import whatsappIcon from "@/assets/icons/socialMedia/whatsapp.svg";
import callIcon from "@/assets/icons/call-rounded.svg";
const ContactBar = () => {
  return (
    <div
      className={clsx(
        "fixed gap-2 flex flex-col items-end p-4 z-40 left-0 bottom-0",
        "md:right-0"
      )}
    >
      <Link
        href="tel:+966920000015"
        className={clsx("cursor-pointer", "md:hidden")}
      >
        <div className="size-[35px]">
          <img
            src={callIcon.src}
            alt="call-button"
            className="size-full object-contain"
          />
        </div>
      </Link>
      <Link
        href="https://wa.me/966920000015"
        className={clsx("cursor-pointer")}
      >
        <div className="size-[40px]">
          <img
            className="size-full object-contain"
            src={whatsappIcon.src}
            alt="whatsapp icon"
          />
        </div>
      </Link>
    </div>
  );
};

export default ContactBar;
