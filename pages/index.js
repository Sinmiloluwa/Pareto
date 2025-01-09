import Disclaimer from "@/components/disclaimer";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";


export default function Home() {
  return (
    <div>
     <Navbar/>
     <Disclaimer/>
     <HeroSection/>
     <Services/>
     <FAQ/>
     <Footer/>

    </div>
  );
}
