import Title from "@/components/fragments/Title";
import Slider from "@/components/sliders/Slider";
import partenrs from "@/constants/partenrs";
const SuccessPartners = () => {
  return (
    <section className="py-[90px]">
      <Title text="شركاء النجاح" />
      <Slider
        className="container mx-auto"
        data={partenrs}
        direction={1}
        rtl
        scales={{
          large: { width: 200, height: 200 },
          medium: { width: 150, height: 150 },
          small: { width: 100, height: 100 },
        }}
      />
    </section>
  );
};

export default SuccessPartners;
