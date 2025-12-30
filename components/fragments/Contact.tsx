import Form from "@/components/forms/Contact";
import MapPath from "@/assets/images/map.svg";
const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-row">
      <Form />
      <div className="hidden md:flex justify-center items-center">
        <img
          className="size-full object-contain"
          src={MapPath.src}
          alt="saudi arabia map"
        />
      </div>
    </div>
  );
};

export default Contact;
