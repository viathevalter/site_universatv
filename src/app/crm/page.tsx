"use client";

import { MessageSquare, CreditCard, Bot } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FaqSection } from "@/components/FaqSection";
import { MockupDashboard } from "@/components/Mockups";
import { crmContent } from "@/data/crm-content";

export default function CrmPage() {
  const faqs = [
    { question: "Preciso ter conhecimento técnico para usar?", answer: "Não. A plataforma foi desenvolvida para ser intuitiva e fácil de usar. Toda a parte complexa fica nos bastidores, deixando para você apenas um painel limpo e direto." },
    { question: "Funciona para clientes no Brasil e na Europa?", answer: "Sim. O sistema foi preparado para operar de forma híbrida, lidando com diferentes métodos de pagamento, fusos horários e necessidades operacionais de ambos os mercados." },
    { question: "Como funciona a integração com o Asaas e Revolut?", answer: "Nós conectamos os gateways diretamente à plataforma. O sistema identifica pagamentos e atualiza assinaturas automaticamente, economizando dezenas de horas mensais." },
    { question: "É focado apenas em IPTV?", answer: "Embora excelente para revendedores de streaming, o CRM atende perfeitamente qualquer modelo de negócio baseado em assinaturas recorrentes e gestão de clientes." }
  ];

  return (
    <div className="min-h-screen bg-[#020202] selection:bg-orange-brand/30">
      <Navbar locale="crm" />

      {/* Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden border-b border-white/5 bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-brand/10 blur-[150px] pointer-events-none mix-blend-screen" />
        
        {/* SaaS Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute grid grid-cols-6 md:grid-cols-12 gap-4 inset-0 opacity-[0.02] pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-b border-white/10" />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Premium Resellers Framework</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Acelere e controle sua revenda em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">único ecossistema.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
                {crmContent.hero.subheadline}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#solucao" className="inline-flex px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                Conhecer a Plataforma
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="-mb-48 relative z-20">
              <MockupDashboard />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problemas vs Solução */}
      <section id="solucao" className="pt-56 pb-24 relative bg-[#020202]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <AnimatedSection>
              <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 relative overflow-hidden h-full">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 tracking-tight">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">✕</span>
                  A Operação Manual
                </h3>
                <ul className="space-y-6">
                  {crmContent.problems.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/40 font-medium">
                      <span className="text-white/20 mt-1">—</span> {prob}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#111] border border-orange-brand/30 rounded-3xl p-10 shadow-[0_0_40px_rgba(249,115,22,0.05)] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-brand/10 blur-[80px] pointer-events-none" />
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 tracking-tight">
                  <span className="w-10 h-10 rounded-full bg-orange-brand/20 flex items-center justify-center text-orange-brand shadow-inner">✓</span>
                  O Universo Controlado
                </h3>
                <p className="text-white/70 leading-relaxed mb-10 font-medium">
                  {crmContent.solution}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {crmContent.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="bg-white/5 px-4 py-3 rounded-xl border border-white/5 flex items-center">
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
      <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-brand/5 mix-blend-overlay" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Poder que escala</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              Automações desenhadas para multiplicar o resultado da sua equipe e da sua revenda.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#111] border border-white/5 p-10 rounded-3xl h-full flex flex-col group hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-white/10 transition-colors">
                  <CreditCard size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Múltiplos Pagamentos</h3>
                <p className="text-white/50 leading-relaxed mb-10 font-medium">
                  {crmContent.markets} Gateway unificado para cobranças automáticas.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {crmContent.integrations.payment.map(p => (
                    <span key={p} className="text-xs font-bold tracking-wide uppercase bg-black/50 border border-white/10 text-white/50 px-4 py-2 rounded-lg">{p}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-b from-orange-500/20 to-[#111] border border-orange-brand/30 p-10 rounded-3xl h-full flex flex-col shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-orange-brand/20 border border-orange-brand/30 flex items-center justify-center mb-8 text-orange-brand shadow-inner">
                  <Bot size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Inteligência Artificial</h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  {crmContent.ai}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#111] border border-white/5 p-10 rounded-3xl h-full flex flex-col group hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-white/10 transition-colors">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Atendimento Integrado</h3>
                <p className="text-white/50 leading-relaxed mb-10 font-medium">
                  Centralize conversas e mantenha o histórico de mensagens colado ao perfil de cada cliente.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {crmContent.integrations.support.map(s => (
                    <span key={s} className="text-xs font-bold tracking-wide uppercase bg-black/50 border border-white/10 text-white/50 px-4 py-2 rounded-lg">{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Dúvidas Frequentes" subtitle="Mais detalhes sobre a arquitetura do software" />

      {/* CTA Final */}
      <section className="py-40 relative text-center bg-[#020202]">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-orange-brand/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              {crmContent.closing}
            </h2>
            <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-medium">
              Profissionalize hoje sua operação com a plataforma líder global em gestão em entretenimento.
            </p>
            <a href="#" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
              Falar com um Executivo
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer locale="crm" />
    </div>
  );
}
