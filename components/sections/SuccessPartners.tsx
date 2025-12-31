import Title from "@/components/fragments/Title";
import Slider from "@/components/sliders/Slider";
import partenrs from "@/constants/success_partenrs";
const SuccessPartners = () => {
  return (
    <section className="container mx-auto pt-16 md:pt-24">
      <Title text="شركاء النجاح" />
      <Slider data={partenrs} />
    </section>
  );
};

export default SuccessPartners;
