import { Approach } from "@/components/Approach";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SalonJsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { Services } from "@/components/Services";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Services />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <SalonJsonLd />
    </>
  );
}
