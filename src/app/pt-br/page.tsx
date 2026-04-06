"use client";

import { CheckCircle2, MonitorSmartphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PricingCard } from "@/components/PricingCard";
import { FaqSection } from "@/components/FaqSection";
import { pricingBR, extraPointBR } from "@/data/pricing-br";

export default function BrazilPage() {
  const faqs = [
    { question: "Como funciona a ativação?", answer: "A ativação é rápida e prática. Após a escolha do plano e confirmação do pagamento, você receberá seus dados de acesso imediatamente via WhatsApp ou email, junto com instruções detalhadas para configurar em qualquer dispositivo." },
    { question: "Posso usar em diferentes dispositivos?", answer: "Sim! Nossa plataforma é totalmente compatível com Smart TVs, celulares, tablets, TV Box, computadores e outros dispositivos conectados. A estrutura foi pensada para você assistir onde quiser." },
    { question: "E se eu precisar de mais acessos?", answer: "Sem problemas! Você pode adicionar pontos extras à sua assinatura por apenas R$ 18/mês por cada acesso adicional simultâneo." },
    { question: "Qual plano vale mais a pena?", answer: "O Plano Anual oferece o maior desconto proporcional. Porém, muitos clientes optam pelo Trimestral ou Semestral para um bom equilíbrio entre economia e flexibilidade." },
    { question: "Existe suporte?", answer: "Sim, oferecemos suporte contínuo para garantir que sua experiência seja a melhor possível. Qualquer dúvida na instalação ou uso, nossa equipe estará pronta para ajudar." }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-orange-brand/30">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-brand/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Seu entretenimento com mais <span className="text-orange-brand">praticidade</span>, variedade e liberdade para assistir.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                Acesse uma experiência moderna, flexível e pensada para acompanhar sua rotina em diferentes dispositivos compatíveis.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#plans" className="inline-block px-8 py-4 rounded-full bg-orange-brand text-white font-bold hover:bg-orange-brand/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                Ver Planos Disponíveis
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Como funciona & Benefícios (Grid) */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Como funciona</h2>
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                Comece em poucos passos. Escolha o plano ideal para você, receba a ativação e aproveite uma experiência pensada para ser prática, organizada e fácil de usar.
              </p>
              
              <div className="flex items-start gap-4 mb-10 p-6 rounded-2xl bg-white/5 border border-white/5">
                <MonitorSmartphone className="text-orange-brand shrink-0" size={32} />
                <div>
                  <h3 className="font-medium text-white mb-2">Compatível com o seu jeito de assistir</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Aproveite em Smart TV, celular, tablet, TV Box e outros dispositivos compatíveis, com mais liberdade para acompanhar sua programação onde quiser.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Planos para diferentes necessidades",
                  "Mais liberdade para assistir",
                  "Compatibilidade com vários dispositivos",
                  "Ativação prática",
                  "Estrutura pensada para facilitar o uso",
                  "Experiência moderna e organizada"
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-card border border-white/5 p-6 rounded-2xl flex flex-col gap-4 group hover:border-orange-brand/30 transition-colors">
                    <CheckCircle2 className="text-orange-brand" size={24} />
                    <span className="text-white/80 font-medium text-sm leading-tight group-hover:text-white transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing / Planos */}
      <section id="plans" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Escolha seu plano</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Opções flexíveis para você curtir sem preocupações.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {pricingBR.map((plan, idx) => (
              <PricingCard
                key={plan.id}
                {...plan}
                delay={idx * 0.1}
                isPopular={plan.id === "trimestral-1" || plan.id === "semestral-1"}
              />
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500/10 to-orange-700/10 border border-orange-brand/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ponto adicional de acesso</h3>
                <p className="text-white/70">{extraPointBR.text}</p>
              </div>
              <div className="shrink-0 bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-center">
                <span className="block text-2xl font-bold text-orange-brand">{extraPointBR.price}</span>
                <span className="text-sm text-white/50">{extraPointBR.period}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      {/* Final CTA */}
      <section className="py-32 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-orange-brand/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
              Escolha seu plano e tenha uma experiência mais <span className="text-orange-brand">prática, flexível e moderna</span>.
            </h2>
            <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-orange-brand border-2 border-orange-brand text-white font-bold text-lg hover:bg-transparent hover:text-orange-brand transition-all">
              Começar Agora
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
