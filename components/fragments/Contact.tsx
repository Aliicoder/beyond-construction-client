import Form from "@/components/forms/Contact";
import MapPath from "@/assets/images/map.svg";
import Image from "next/image";
import clsx from "clsx";
const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <Form />
      <div
        className={clsx(
          "relative hidden justify-center items-center",
          "md:flex"
        )}
      >
        <Image
          fill
          className="static! object-contain move-left-right"
          src={MapPath}
          alt="saudi arabia map"
        />
      </div>
    </div>
  );
};

export default Contact;
