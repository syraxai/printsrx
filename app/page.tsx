import { Header, Hero } from "@/src/components/site";
import {
  About,
  BusinessSection,
  Categories,
  Contact,
  CustomProjects,
  FAQ,
  Footer,
  HowItWorks,
  Portfolio,
  Products,
  Reviews,
  WhatsAppButton,
} from "@/src/components/sections";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <div id="inicio">
          <Hero />
        </div>
        <Categories />
        <BusinessSection />
        <Products />
        <Portfolio />
        <HowItWorks />
        <CustomProjects />
        <About />
        <FAQ />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
