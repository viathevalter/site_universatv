"use client";

import Link from "next/link";
import { MonitorPlay, Globe, Presentation, PlayCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MockupTV } from "@/components/Mockups";

function NavCard({ href, title, description, icon: Icon, badge }: { href: string; title: string; description: string; icon: any; badge?: string }) {
  return (
    <Link href={href} className="group relative h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
      <div className="relative h-full bg-[#111] border border-white/5 group-hover:border-orange-brand/30 rounded-3xl p-8 transition-all duration-300 flex flex-col items-start overflow-hidden shadow-2xl">
        {badge && (
          <span className="absolute top-6 right-6 bg-orange-brand/10 text-orange-brand text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
            {badge}
          </span>
        )}
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-orange-brand/10 group-hover:border-orange-brand/20 transition-colors shadow-inner">
          <Icon className="text-white/70 group-hover:text-orange-brand transition-colors" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-brand transition-colors tracking-tight">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">{description}</p>
        <div className="flex items-center text-sm font-bold text-white/40 group-hover:text-orange-brand transition-colors mt-auto uppercase tracking-wide">
          Acessar Portal <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="global" />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-brand/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute grid grid-cols-6 md:grid-cols-12 gap-4 inset-0 opacity-[0.02] pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-b border-white/10" />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-orange-brand animate-pulse" />
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Global Entertainment</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                O Seu Portal <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700">
                  Definitivo
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                Escolha o seu destino. Oferecemos a experiência de streaming mais completa para usuários e a plataforma de gestão definitiva para revendedores.
              </p>
            </AnimatedSection>

            {/* Navigation Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left relative z-20">
              <AnimatedSection delay={0.3}>
                <NavCard 
                  href="/es" 
                  title="España" 
                  description="Planes en euros. Accede a canales, películas y series premium para toda Europa."
                  icon={Globe}
                  badge="Streaming"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <NavCard 
                  href="/pt-br" 
                  title="Brasil" 
                  description="A melhor programação ao vivo e on-demand, com planos e suporte dedicados em Reais."
                  icon={PlayCircle}
                  badge="Streaming"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <NavCard 
                  href="/crm" 
                  title="CRM Plattform" 
                  description="Gestão de clientes, cobranças automatizadas e IA para donos de revendas B2B."
                  icon={Presentation}
                  badge="Resellers"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Depth Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection delay={0.2}>
            <div className="pt-10">
              <MockupTV />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer locale="global" />
    </div>
  );
}
