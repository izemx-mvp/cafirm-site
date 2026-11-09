import { Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PreFooterCTA } from "@/components/layout/PreFooterCTA";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Home } from "@/pages/Home";
import { Cabinet } from "@/pages/Cabinet";
import { Services } from "@/pages/Services";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { Investir } from "@/pages/Investir";
import { Actualites } from "@/pages/Actualites";
import { Article } from "@/pages/Article";
import { RendezVous } from "@/pages/RendezVous";
import { Contact } from "@/pages/Contact";
import { MentionsLegales } from "@/pages/MentionsLegales";
import { Confidentialite } from "@/pages/Confidentialite";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  const { pathname } = useLocation();
  const hidePreFooter = pathname === "/prendre-rendez-vous";

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-cabinet" element={<Cabinet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/investir-au-maroc" element={<Investir />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:slug" element={<Article />} />
          <Route path="/prendre-rendez-vous" element={<RendezVous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<Confidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hidePreFooter && <PreFooterCTA />}
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  );
}
