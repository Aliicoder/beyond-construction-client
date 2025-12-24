import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FAQ from "@/components/sections/FAQ";
import Whatsapp from "@/components/buttons/ContactBar";
import ContactUs from "@/components/sections/ContactUs";

const page = () => {
  return (
    <main className="min-h-screen bg-second">
      <Whatsapp />
      <Header />
      <ContactUs />
      <FAQ />
      <Footer />
    </main>
  );
};
export default page;
