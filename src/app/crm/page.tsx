"use client";

import { MessageSquare, CreditCard, Bot } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FaqSection } from "@/components/FaqSection";
import { MockupDashboard } from "@/components/Mockups";

export default function CrmPage() {
  const faqs = [
    { question: "O que a plataforma centraliza?", answer: "Clientes, assinaturas, vencimentos, cobranças, atendimento e visão operacional." },
    { question: "A plataforma atende Brasil e Europa?", answer: "Sim. A proposta é oferecer uma estrutura preparada para operações em ambos os mercados." },
    { question: "Há integração com meios de pagamento?", answer: "A plataforma é pensada para trabalhar com integrações como Asaas, Revolut, PayPal e Efí." },
    { question: "Existe integração com canais de atendimento?", answer: "Sim. A proposta inclui integração com API oficial da Meta e outras soluções como Uazapi e Z-API." },
    { question: "A plataforma usa IA?", answer: "Sim. O posicionamento inclui atendimento com agentes de IA para aumentar velocidade, organização e escala." }
  ];

  const dorItems = [
    "clientes espalhados em planilhas e conversas",
    "vencimentos sem controle",
    "cobrança manual",
    "atendimento desorganizado",
    "dificuldade para acompanhar pagamentos",
    "pouca visão de crescimento",
    "excesso de dependência de processos manuais"
  ];

  const recursosItems = [
    "cadastro de clientes",
    "controle de assinaturas",
    "gestão de vencimentos",
    "histórico de atendimento",
    "painel administrativo",
    "visão operacional",
    "acompanhamento financeiro",
    "organização de processos",
    "base preparada para escalar"
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
                Controle, automatize e escale sua revenda em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">único ecossistema.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-10 max-w-4xl mx-auto font-medium">
                Gerencie clientes, assinaturas, cobranças, atendimento e crescimento da sua operação com mais organização, automação e visão estratégica.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#solucao" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold tracking-wide hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                  Quero conhecer a plataforma
                </a>
                <a href="#solucao" className="inline-block px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-wide hover:bg-white/10 transition-all">
                  Solicitar demonstração
                </a>
              </div>
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
                <p className="text-white/60 mb-2 font-medium">Quando a operação cresce, o improviso começa a limitar o negócio</p>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 tracking-tight">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">✕</span>
                  A Operação Manual
                </h3>
                <ul className="space-y-6">
                  {dorItems.map((prob, idx) => (
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
                <p className="text-orange-brand mb-2 font-medium relative z-10">Transforme sua revenda em uma operação mais profissional</p>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 tracking-tight relative z-10">
                  <span className="w-10 h-10 rounded-full bg-orange-brand/20 flex items-center justify-center text-orange-brand shadow-inner">✓</span>
                  O Universo Controlado
                </h3>
                <p className="text-white/70 leading-relaxed mb-10 font-medium relative z-10">
                  Centralize sua gestão em uma plataforma pensada para acompanhar o dia a dia da operação, reduzir falhas e dar mais controle sobre clientes, pagamentos e atendimento.
                </p>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {recursosItems.map((feat, idx) => (
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
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Uma estrutura pensada para operar no Brasil e na Europa</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              A plataforma foi idealizada para apoiar operações em diferentes mercados, com foco em gestão, cobrança, atendimento e crescimento.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#111] border border-white/5 p-10 rounded-3xl h-full flex flex-col group hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-white/10 transition-colors">
                  <CreditCard size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Cobrança integrada para uma operação mais eficiente</h3>
                <p className="text-white/50 leading-relaxed mb-10 font-medium">
                  Estruture sua operação para acompanhar pagamentos, vencimentos e rotinas financeiras com mais clareza.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Asaas", "Revolut", "PayPal", "Efí"].map(p => (
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
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Atendimento com apoio de IA</h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  Use agentes inteligentes para agilizar respostas, aumentar a produtividade e dar mais velocidade ao suporte sem perder controle da operação.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#111] border border-white/5 p-10 rounded-3xl h-full flex flex-col group hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-white/10 transition-colors">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Atendimento centralizado e mais organizado</h3>
                <p className="text-white/50 leading-relaxed mb-10 font-medium">
                  Conecte sua operação a canais estratégicos e tenha mais controle sobre conversas, suporte e relacionamento com seus clientes.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["API oficial da Meta", "Uazapi", "Z-API"].map(s => (
                    <span key={s} className="text-xs font-bold tracking-wide uppercase bg-black/50 border border-white/10 text-white/50 px-4 py-2 rounded-lg">{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ideal Para Quem */}
      <section className="py-24 relative bg-[#020202]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ideal para quem quer começar melhor ou escalar com mais controle</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
               {["quem quer organizar a operação desde o início", "quem já vende e precisa profissionalizar a gestão", "quem quer reduzir falhas operacionais", "quem quer estruturar cobrança e atendimento", "quem quer crescer com mais previsibilidade"].map((item, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 text-white/70 px-6 py-3 rounded-full text-sm font-medium">{item}</span>
               ))}
            </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="FAQ CRM" />

      {/* CTA Final */}
      <section className="py-48 relative text-center bg-[#020202] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-orange-brand/10 blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-orange-brand/5 to-transparent pointer-events-none" />
        
        {/* Abstract Grid Elements */}
        <div className="absolute inset-0 grid grid-cols-12 gap-px opacity-10">
          {Array.from({ length: 12 }).map((_, i) => <div key={i} className="h-full border-r border-white/20" />)}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="inline-block mb-6 relative">
              <div className="absolute inset-0 bg-orange-brand blur-2xl opacity-20" />
              <span className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 shadow-2xl">
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">U</span>
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
              Venda com mais estrutura. <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Cresça com mais controle.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/40 mb-16 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight">
              Saia do improviso e entre em um modelo de gestão mais profissional, organizado e preparado para evoluir.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#" className="w-full sm:w-auto px-12 py-5 rounded-full bg-white text-black font-black text-lg tracking-wide hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all">
                Quero conhecer a plataforma
              </a>
              <a href="#solucao" className="w-full sm:w-auto px-12 py-5 rounded-full bg-transparent text-white font-bold text-lg tracking-wide border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                Solicitar demonstração
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer locale="crm" />
    </div>
  );
}
