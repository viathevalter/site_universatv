"use client";

import { CheckCircle2, MonitorSmartphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PricingCard } from "@/components/PricingCard";
import { FaqSection } from "@/components/FaqSection";
import { MockupTV } from "@/components/Mockups";
import { pricingBR, extraPointBR, globalFeaturesBR } from "@/data/pricing-br";

export default function BrazilPage() {
  const faqs = [
    { question: "Como funciona a ativação?", answer: "A ativação é rápida e prática. Após a escolha do plano e confirmação do pagamento, você receberá seus dados de acesso imediatamente via WhatsApp ou email, junto com instruções detalhadas para configurar em qualquer dispositivo." },
    { question: "Posso usar em diferentes dispositivos?", answer: "Sim! Nossa plataforma é totalmente compatível com Smart TVs, celulares, tablets, TV Box, computadores e outros dispositivos conectados. A estrutura foi pensada para você assistir onde quiser." },
    { question: "E se eu precisar de mais acessos?", answer: "Sem problemas! Você pode adicionar pontos extras à sua assinatura por apenas R$ 18/mês por cada acesso adicional simultâneo." },
    { question: "Qual plano vale mais a pena?", answer: "O Plano Anual oferece o maior desconto proporcional. Porém, muitos clientes optam pelo Trimestral ou Semestral para um bom equilíbrio entre economia e flexibilidade." },
    { question: "Existe suporte?", answer: "Sim, oferecemos suporte contínuo para garantir que sua experiência seja a melhor possível. Qualquer dúvida na instalação ou uso, nossa equipe estará pronta para ajudar." }
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                A liberdade de assistir o que você quiser, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">onde quiser.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                Sua TV transformada. Uma experiência moderna e flexível pensada para acompanhar sua rotina em todos os seus dispositivos.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#plans" className="inline-flex items-center px-8 py-4 rounded-full bg-orange-brand text-white font-bold tracking-wide hover:bg-orange-brand/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
                Ver Planos Disponíveis
              </a>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.3}>
            <div className="-mb-32">
              <MockupTV />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefícios Globais (Destacados dos Cards) */}
      <section className="pt-48 pb-24 relative bg-[#020202]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Tudo que você precisa</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Independente do plano escolhido, você garante acesso à nossa infraestrutura completa.
            </p>
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

      {/* Pricing / Planos */}
      <section id="plans" className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-brand/5 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Escolha seu plano</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Nossos planos dão acesso total. A diferença é apenas o tempo que você economiza.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {pricingBR.map((plan, idx) => (
              <PricingCard
                key={plan.id}
                {...plan}
                delay={idx * 0.1}
                ctaText="Assinar Plano"
                popularText="Mais Popular"
                isPopular={plan.id === "trimestral" || plan.id === "semestral"}
              />
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl mx-auto bg-[#111] border border-orange-brand/20 shadow-[0_0_30px_rgba(249,115,22,0.05)] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-brand/20 blur-3xl pointer-events-none" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Ponto adicional de acesso</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">{extraPointBR.text}</p>
              </div>
              <div className="shrink-0 bg-black/50 px-6 py-4 rounded-2xl border border-white/10 text-center relative z-10">
                <span className="block text-3xl font-bold text-orange-brand">{extraPointBR.price}</span>
                <span className="text-sm text-white/40 font-medium">{extraPointBR.period}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      <Footer locale="pt-br" />
    </div>
  );
}
