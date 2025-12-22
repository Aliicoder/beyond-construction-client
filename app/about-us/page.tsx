import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Compaines";

const page = () => {
  return (
    <main className="min-h-screen bg-second">
      <Header />
      <About />
      <Companies />
      <Footer />
    </main>
  );
};

export default page;
