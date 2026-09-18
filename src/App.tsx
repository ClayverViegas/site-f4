import { BadgeCheck, ClipboardList, HardHat } from "lucide-react";
import { About } from "./components/About";
import { ContactSection } from "./components/ContactSection";
import { FeatureBar } from "./components/FeatureBar";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProgramSection } from "./components/ProgramSection";
import { Services } from "./components/Services";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { WhyF4 } from "./components/WhyF4";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white bg-decoration">
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <About />
        <Services />
        <WhyF4 />

        <ProgramSection
          id="treinamentos"
          eyebrow="CIPA / CIPATR"
          title="Implantação completa da CIPA e CIPATR"
          description="Soluções completas para implantação, organização e acompanhamento da CIPA/CIPATR, do cronograma à posse dos representantes."
          Icon={HardHat}
          items={[
            "Elaboração do cronograma completo",
            "Apoio no processo eleitoral",
            "Editais, atas e formulários",
            "Apoio na eleição e posse",
            "Treinamento dos representantes",
            "Certificados e documentação",
            "Orientação sobre funcionamento e reuniões",
          ]}
        />

        <ProgramSection
          id="sipat"
          eyebrow="SIPAT"
          title="Execução completa da SIPAT"
          description="Planejamento e execução de ações voltadas à prevenção de acidentes, saúde, ergonomia e qualidade de vida."
          Icon={ClipboardList}
          align="right"
          items={[
            "Planejamento diário",
            "Palestras",
            "Dinâmicas",
            "Ações interativas",
            "Cronograma personalizado",
            "Material de apoio",
            "Sugestões de brindes e campanhas internas",
          ]}
        />

        <ProgramSection
          id="cas-epi"
          eyebrow="EPIs / CAs"
          title="Indicação de CAs de EPIs conforme atividade da função"
          description="Análise técnica e orientação para escolher os EPIs certos, com CAs válidos e conformes ao risco de cada função."
          Icon={BadgeCheck}
          items={[
            "Análise técnica das atividades",
            "Identificação dos riscos",
            "Indicação dos EPIs adequados",
            "Listagem de CAs válidos",
            "Verificação de conformidade",
            "Relatório técnico personalizado",
            "Orientações de uso e conservação",
          ]}
        />

        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
