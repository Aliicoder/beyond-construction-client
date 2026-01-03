import Contact from "@/components/fragments/Contact";
import Title from "@/components/fragments/Title";
import clsx from "clsx";

const ContactUs = () => {
  return (
    <section
      className={clsx(
        "gap-12 pt-16 mx-auto container flex flex-col",
        "md:gap-16 md:pt-24"
      )}
    >
      <Title text="التواصل و الاستفسار" />
      <Contact />
    </section>
  );
};

export default ContactUs;
