import ContactForm from "@/components/forms/Contact";
import MapPath from "@/assets/images/map.svg";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="flex">
      <div className="flex-1/2 ">
        <ContactForm />
      </div>
      <div className="flex-1/2 hidden justify-center items-center md:flex">
        <Image width={500} height={500} src={MapPath} alt="saudi arabia map" />
      </div>
    </div>
  );
};

export default Contact;
