import Image from "next/image";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import SpecialOffers from "@/components/SpecialOffers";
import Services from "@/components/Services";
import SuperQuality from "@/components/SuperQuality";
import PopularProducts from "@/components/PopularProducts";
import Subscribe from "@/components/Subscribe";

const App =()=>(
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <HeroSection/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue ">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer/>
    </section>
  </main>
)


export default App;