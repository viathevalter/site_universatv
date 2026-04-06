"use client";

import Link from "next/link";
import { MonitorPlay, Globe, Presentation, Zap, Shield, PlayCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

function NavCard({ href, title, description, icon: Icon, badge }: { href: string; title: string; description: string; icon: any; badge?: string }) {
  return (
    <Link href={href} className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="relative h-full bg-card border border-white/5 group-hover:border-orange-brand/30 rounded-3xl p-8 transition-all duration-300 flex flex-col items-start overflow-hidden">
        {badge && (
          <span className="absolute top-6 right-6 bg-orange-brand/20 text-orange-brand text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-orange-brand/10 group-hover:border-orange-brand/20 transition-colors">
          <Icon className="text-white/70 group-hover:text-orange-brand transition-colors" size={28} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-brand transition-colors">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">{description}</p>
        <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-orange-brand transition-colors mt-auto">
          Acessar página <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-orange-brand/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-brande/20 blur-[150px] rounded-full pointer-events-none opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-brand/10 blur-[120px] rounded-full pointer-events-none opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-orange-brand animate-pulse" />
                <span className="text-sm font-medium text-white/80">O futuro do entretenimento digital</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                Premium Streaming <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Experiência Sem Limites
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
                Acesse uma riqueza de canais. Desfrute de mais de 2000 canais ao vivo, acompanhados por uma ampla gama de filmes e séries com tecnologia anticongelante.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatedSection delay={0.3}>
              <NavCard 
                href="/es" 
                title="UniversaTV España" 
                description="Planes de suscripción en euros. Accede a canales premium, películas y series para toda Europa."
                icon={Globe}
                badge="€"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <NavCard 
                href="/pt-br" 
                title="UniversaTV Brasil" 
                description="Planos de assinatura em reais. A melhor programação ao vivo e on-demand para o público brasileiro."
                icon={PlayCircle}
                badge="R$"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <NavCard 
                href="/crm" 
                title="Plataforma CRM" 
                description="Controle total da sua operação de revenda. Gerencie clientes, assinaturas e cobranças."
                icon={Presentation}
                badge="Resellers"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Porque escolher a UniversaTV</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Nossos servidores robustos garantem a melhor qualidade e estabilidade.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { title: "Alta Performance", desc: "Servidores estáveis e balanceados garantem uso sem travamentos.", icon: Zap },
              { title: "Multi-Dispositivos", desc: "Assista na Smart TV, Celular, PC ou TV Box com máxima qualidade.", icon: MonitorPlay },
              { title: "Suporte Dedicado", desc: "Atendimento premium via WhatsApp todos os dias da semana.", icon: Shield }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-orange-brand/10 flex items-center justify-center mb-6">
                    <feature.icon size={32} className="text-orange-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-brand/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-orange-brand/10 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Pronto para começar?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Escolha sua região abaixo para ver os planos detalhados e assinar agora mesmo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pt-br" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors w-full sm:w-auto">
                Ver Planos Brasil
              </Link>
              <Link href="/es" className="px-8 py-4 rounded-full bg-orange-brand text-white font-bold hover:bg-orange-brand/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all w-full sm:w-auto">
                Ver Planes España
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
