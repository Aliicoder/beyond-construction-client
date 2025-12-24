import Contact from "@/components/fragments/Contact";
import Title from "@/components/fragments/Title";

const ContactUs = () => {
  return (
    <section className="container mx-auto flex flex-col pt-16 gap-12 md:gap-16 md:pt-24">
      <Title text="التواصل و الاستفسار" />
      <Contact />
    </section>
  );
};

export default ContactUs;
