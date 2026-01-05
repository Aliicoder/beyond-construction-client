import Questions from "./fragments/Questions";
import Title from "@/components/shared/Title";
const FAQs = () => {
  return (
    <section className="container mx-auto flex flex-col gap-12 pt-16 md:gap-16 md:pt-24">
      <Title text="الأسئلة الشائعة" />
      <Questions />
    </section>
  );
};

export default FAQs;
