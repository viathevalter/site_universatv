"use client";

import { CheckCircle2, MessageSquare, CreditCard, Bot, TrendingUp, Grid3x3, Users2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FaqSection } from "@/components/FaqSection";
import { crmContent } from "@/data/crm-content";

export default function CrmPage() {
  const faqs = [
    { question: "Preciso ter conhecimento técnico para usar?", answer: "Não. A plataforma foi desenvolvida para ser intuitiva e fácil de usar. Toda a parte complexa fica nos bastidores, deixando para você apenas um painel limpo e direto." },
    { question: "Funciona para clientes no Brasil e na Europa?", answer: "Sim. O sistema foi preparado para operar de forma híbrida, lidando com diferentes métodos de pagamento, fusos horários e necessidades operacionais de ambos os mercados." },
    { question: "Como funciona a integração com o Asaas e Revolut?", answer: "Nós conectamos os gateways diretamente à plataforma. O sistema identifica pagamentos e atualiza assinaturas automaticamente, economizando dezenas de horas mensais." },
    { question: "É focado apenas em IPTV?", answer: "Embora excelente para revendedores de streaming, o CRM atende perfeitamente qualquer modelo de negócio baseado em assinaturas recorrentes e gestão de clientes." }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-orange-brand/30">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5 bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-brand/5 blur-[150px] pointer-events-none" />
        <div className="absolute grid grid-cols-6 md:grid-cols-12 gap-4 inset-0 opacity-[0.02] pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-b border-white/10" />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-brand/10 border border-orange-brand/20 mb-8">
                <span className="text-xs font-bold text-orange-brand uppercase tracking-wider">Premium Resellers CRM</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {crmContent.hero.headline}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                {crmContent.hero.subheadline}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#solucao" className="inline-block px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                Conhecer a Solução
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problemas vs Solução */}
      <section id="solucao" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="bg-[#111] border border-red-500/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl" />
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">✕</span>
                  A Operação Manual
                </h3>
                <ul className="space-y-4">
                  {crmContent.problems.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/50 text-sm">
                      <span className="text-red-500/50 mt-1">•</span> {prob}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#111] border border-orange-brand/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(249,115,22,0.05)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-orange-brand/10 blur-3xl" />
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange-brand/20 flex items-center justify-center text-orange-brand">✓</span>
                  A Plataforma CRM
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  {crmContent.solution}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {crmContent.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-white/80 text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Integrações e IA */}
      <section className="py-24 bg-card/50 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Poder que escala</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Integrações e automações desenhadas para multiplicar o resultado da sua equipe e da sua revenda.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-white/5 p-8 rounded-3xl h-full flex flex-col items-center text-center group hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
                  <CreditCard size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Múltiplos Pagamentos</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {crmContent.markets} Integração financeira para cobranças seguras.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {crmContent.integrations.payment.map(p => (
                    <span key={p} className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full">{p}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-orange-brand/20 p-8 rounded-3xl h-full flex flex-col items-center text-center shadow-[0_0_20px_rgba(249,115,22,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-brand/10 blur-2xl" />
                <div className="w-16 h-16 rounded-2xl bg-orange-brand/20 border border-orange-brand/30 flex items-center justify-center mb-6 text-orange-brand">
                  <Bot size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Inteligência Artificial</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {crmContent.ai}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-card border border-white/5 p-8 rounded-3xl h-full flex flex-col items-center text-center group hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Atendimento Integrado</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Centralize suas conversas e mantenha o histórico de mensagens vinculado aos clientes.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {crmContent.integrations.support.map(s => (
                    <span key={s} className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Perguntas Frequentes" subtitle="Mais detalhes sobre a arquitetura do CRM" />

      {/* CTA Final */}
      <section className="py-32 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-brand/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {crmContent.closing}
            </h2>
            <p className="text-xl text-white/50 mb-10">
              Profissionalize hoje sua operação de revenda com a plataforma líder em gestão e inteligência.
            </p>
            <a href="#" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 hover:scale-[1.02] transition-all">
              Falar com um Consultor
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
