import Form from "@/components/forms/Contact";
import map from "@/assets/images/map.svg";
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
        <div className="w-[500px] h-[500px] move-left-right">
          <img
            className="size-full object-contain"
            src={map.src}
            alt="saudi arabia map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
