import Header from "@/components/shared/Header";
import Hero from "@/components/sections/Hero";
import SuccessPartners from "@/components/sections/SuccessPartners";
import Prototypes from "@/components/sections/Prototypes";
import Services from "@/components/sections/Services";
import Footer from "@/components/shared/Footer";
import Whatsapp from "@/components/buttons/ContactBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-second">
      <Whatsapp />
      <Header />
      <Hero />
      <SuccessPartners />
      <Prototypes />
      <Services />
      <Footer />
    </main>
  );
}
