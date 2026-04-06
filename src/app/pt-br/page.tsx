"use client";

import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PricingCard } from "@/components/PricingCard";
import { FaqSection } from "@/components/FaqSection";
import { MockupTV } from "@/components/Mockups";
import { pricingBR, extraPointBR, globalFeaturesBR } from "@/data/pricing-br";

export default function BrazilPage() {
  const faqs = [
    { question: "Como funciona a ativação?", answer: "Depois de escolher seu plano, você recebe as informações necessárias para começar de forma simples e rápida." },
    { question: "Posso usar em diferentes dispositivos?", answer: "Sim. A experiência é pensada para funcionar em diferentes dispositivos compatíveis." },
    { question: "E se eu precisar de mais acessos?", answer: "Você pode adicionar pontos extras por R$ 18/mês cada." },
    { question: "Qual plano vale mais a pena?", answer: "Se você quer mais flexibilidade, o mensal pode ser ideal. Se busca melhor custo-benefício, os planos com maior duração costumam ser mais vantajosos." },
    { question: "Existe suporte?", answer: "Sim. A experiência foi pensada para oferecer atendimento mais claro e organizado." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="pt-br" />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-brand/10 to-transparent pointer-events-none" />
        
        {/* Abstract Shapes */}
        <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-orange-brand/10 blur-[150px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Seu entretenimento com mais liberdade, praticidade e variedade.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
                Acesse uma experiência moderna, flexível e pensada para acompanhar sua rotina em diferentes dispositivos compatíveis.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#plans" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-orange-brand text-white font-bold tracking-wide hover:bg-orange-brand/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
                  Ver planos
                </a>
                <a href="#plans" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-wide hover:bg-white/10 transition-all">
                  Contratar agora
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.3}>
            <div className="-mb-32">
              <MockupTV />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="pt-48 pb-20 relative bg-[#020202]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Comece em poucos passos</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Escolha o plano ideal para você, receba a ativação e aproveite uma experiência mais prática, organizada e fácil de usar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Beneficios Globais */}
      <section className="pb-24 relative bg-[#020202]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16 md:mt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Mais conforto, mais flexibilidade e uma experiência melhor organizada</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {globalFeaturesBR.map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex items-center gap-4 group hover:border-orange-brand/30 hover:bg-[#151515] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-brand/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-orange-brand" size={20} />
                  </div>
                  <span className="text-white/70 font-medium text-sm leading-tight group-hover:text-white transition-colors">{feature}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibilidad */}
      <section className="py-20 relative bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Compatível com o seu jeito de assistir</h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Aproveite em Smart TV, celular, tablet, TV Box e outros dispositivos compatíveis, com mais liberdade para acompanhar sua programação onde quiser.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing / Planos */}
      <section id="plans" className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-brand/5 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Escolha o plano ideal para o seu momento</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <PricingCard
                 name="Mensal"
                 price="R$ 35"
                 period=""
                 paymentLink="#"
                 delay={0.1}
                 ctaText="Contratar agora"
                 desc="Ideal para começar com mais flexibilidade."
            />
            <PricingCard
                 name="Trimestral"
                 price="R$ 90"
                 period=""
                 paymentLink="#"
                 delay={0.2}
                 ctaText="Contratar agora"
                 desc="Uma opção prática para aproveitar por mais tempo com melhor custo-benefício."
                 isPopular
                 popularText="Recomendado"
            />
            <PricingCard
                 name="Semestral"
                 price="R$ 170"
                 period=""
                 paymentLink="#"
                 delay={0.3}
                 ctaText="Contratar agora"
                 desc="Equilíbrio entre economia, conforto e continuidade."
            />
            <PricingCard
                 name="Anual"
                 price="R$ 300"
                 period=""
                 paymentLink="#"
                 delay={0.4}
                 ctaText="Contratar agora"
                 desc="A melhor escolha para quem busca o melhor valor no longo prazo."
            />
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl mx-auto bg-[#111] border border-orange-brand/20 shadow-[0_0_30px_rgba(249,115,22,0.05)] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-brand/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Precisa de mais acessos?</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">Adicione um ponto extra por apenas R$ 18/mês e adapte seu plano à sua necessidade.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Perguntas frequentes" />
      
      {/* Final CTA */}
      <section className="py-32 relative text-center bg-[#020202]">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-orange-brand/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter max-w-4xl mx-auto">
              Escolha seu plano e tenha uma experiência mais prática, flexível e moderna.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                Ver planos
              </a>
              <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-orange-brand text-white font-bold text-lg hover:bg-orange-brand/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all">
                Contratar agora
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer locale="pt-br" />
    </div>
  );
}
