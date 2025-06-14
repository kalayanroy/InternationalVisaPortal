import Header from "@/components/header";
import Hero from "@/components/hero";
import CountryCards from "@/components/country-cards";
import Services from "@/components/services";
import About from "@/components/about";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq-fixed";
import Contact from "@/components/contact-fixed";
import Footer from "@/components/footer";
import Universities from "@/components/universities";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Universities />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
