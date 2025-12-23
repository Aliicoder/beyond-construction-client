import Title from "@/components/fragments/Title";
import Slider from "@/components/sliders/Slider";
import partenrs from "@/constants/partenrs";
const SuccessPartners = () => {
  return (
    <section className="pt-[90px]">
      <Title text="شركاء النجاح" />
      <Slider data={partenrs} />
    </section>
  );
};

export default SuccessPartners;
