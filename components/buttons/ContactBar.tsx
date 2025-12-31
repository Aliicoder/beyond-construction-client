"use client";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import whatsappIconPath from "@/assets/icons/socialMedia/whatsapp.svg";
import callIconPath from "@/assets/icons/call-round.svg";
const ContactBar = () => {
  return (
    <div
      className={clsx(
        "fixed gap-2 flex flex-col p-4 z-40 left-0 bottom-0",
        "md:right-0"
      )}
    >
      <Link
        href="https://wa.me/966920000015"
        className={clsx("cursor-pointer")}
      >
        <Image
          src={whatsappIconPath}
          alt="whatsapp-button"
          width={40}
          height={40}
        />
      </Link>
      <Link
        href="tel:+966920000015"
        className={clsx("cursor-pointer", "md:hidde")}
      >
        <Image
          className="-rotate-90"
          src={callIconPath}
          alt="call-button"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};

export default ContactBar;
