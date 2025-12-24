"use client";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import whatsappIconPath from "@/assets/icons/socialMedia/whatsapp.svg";
const ContactBar = () => {
  return (
    <Link
      href="https://wa.me/966920000015"
      className={clsx(
        "fixed p-4 z-50 left-0 bottom-0 cursor-pointer",
        "md:right-0"
      )}
    >
      <Image src={whatsappIconPath} alt="" width={40} height={40} />
    </Link>
  );
};

export default ContactBar;
