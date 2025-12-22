import Title from "@/components/fragments/Title";
import clsx from "clsx";

const About = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-[90px] pt-[90px]">
      <Title text="من نحن" />
      <p
        className={clsx(" max-w-[920px] px-[30px] text-center", "md:text-2xl")}
      >
        شركة سعودية ذات مسؤولية محدودة انطلقت في مطلع عام 2012م تأسست على أيدي
        ذوي الخبرة والاختصاص في المجال العقاري، حيث ولدت فكرة إنشاء الشركة من
        خلال دراسة السوق العقاري في المملكة العربية السعودية وتلبية الاحتياجات
        التي تساعد في تطوير النشاط العقاري.
      </p>
    </section>
  );
};

export default About;
