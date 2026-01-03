import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FAQs from "@/components/sections/FAQs";
import ContactUs from "@/components/sections/ContactUs";
import ContactBar from "@/components/buttons/ContactBar";

const page = () => {
  return (
    <main className="min-h-screen bg-second">
      <ContactBar />
      <Header />
      <ContactUs />
      <FAQs />
      <Footer />
    </main>
  );
};
export default page;
