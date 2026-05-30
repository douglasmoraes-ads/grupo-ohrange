import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import ComoFunciona from "@/components/ComoFunciona";
import ProvasSocial from "@/components/ProvasSocial";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Solucao />
      <ComoFunciona />
      <ProvasSocial />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
