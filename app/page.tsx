import Hero from "@/components/ui//Hero";
import Cards from "@/components/ui/cards/cards";
import Carousel from "@/components/ui/carousel/Carousel";
import Footer from "@/components/ui/footer/Footer";
import Navbar from "@/components/ui/header/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />  
    </>
  );
}
