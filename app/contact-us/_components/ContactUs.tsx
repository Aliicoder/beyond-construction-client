import Title from "@/components/shared/Title";
import clsx from "clsx";
import Form from "@/components/forms/Contact";
import map from "@/assets/images/map.svg";

const ContactUs = () => {
  return (
    <section
      className={clsx(
        "gap-12 pt-16 mx-auto container flex flex-col",
        "md:gap-16 md:pt-24"
      )}
    >
      <Title text="التواصل و الاستفسار" />
      <div className="flex justify-center items-center">
        <Form />
        <div
          className={clsx(
            "relative hidden justify-center items-center",
            "md:flex"
          )}
        >
          <div className="move-left-right">
            <img
              className="size-full object-contain"
              src={map.src}
              alt="saudi arabia map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
