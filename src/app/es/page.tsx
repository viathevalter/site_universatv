"use client";

import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PricingCard } from "@/components/PricingCard";
import { FaqSection } from "@/components/FaqSection";
import { MockupTV } from "@/components/Mockups";
import { pricingES, extraPointES, globalFeaturesES } from "@/data/pricing-es";

export default function SpainPage() {
  const faqs = [
    { question: "¿Cómo funciona la activación?", answer: "La activación es rápida y práctica. Después de elegir el plan y confirmar el pago, recibirás tus datos de acceso inmediatamente junto con instrucciones detalladas para instalar en cualquier dispositivo." },
    { question: "¿Puedo usarlo en diferentes dispositivos?", answer: "¡Sí! Nuestra plataforma es totalmente compatible con Smart TVs, móviles, tablets, TV Box y ordenadores. Disfruta con total libertad donde estés." },
    { question: "¿Qué pasa si necesito más accesos?", answer: "Puedes ampliar tu plan con un punto adicional por solo 4 € al mes por cada acceso extra simultáneo." },
    { question: "¿Qué plan me conviene más?", answer: "El plan Anual ofrece el mayor descuento, pero muchos usuarios prefieren el Trimestral o Semestral para un buen equilibrio entre precio y flexibilidad." },
    { question: "¿Hay soporte?", answer: "Sí, ofrecemos soporte continuo VIP para garantizar que tu experiencia sea perfecta. Si necesitas ayuda con la instalación, nuestro equipo está siempre disponible." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="es" />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-brand/10 to-transparent pointer-events-none" />
        
        {/* Abstract Shapes */}
        <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-orange-brand/10 blur-[150px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                La libertad de ver lo que quieras, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">donde quieras.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                Tu TV transformada. Una experiencia moderna y flexible pensada para acompañar tu rutina en todos tus dispositivos.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#plans" className="inline-flex items-center px-8 py-4 rounded-full bg-orange-brand text-white font-bold tracking-wide hover:bg-orange-brand/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
                Ver Planes Disponibles
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

      {/* Benefícios Globais */}
      <section className="pt-48 pb-24 relative bg-[#020202]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Todo lo que necesitas</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Independientemente del plan elegido, garantizas acceso total a nuestra infraestructura.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {globalFeaturesES.map((feature, idx) => (
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Elige tu plan</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Nuestros planes te dan acceso total. La única diferencia es el tiempo que ahorras.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {pricingES.map((plan, idx) => (
              <PricingCard
                key={plan.id}
                {...plan}
                delay={idx * 0.1}
                ctaText="Contratar Plan"
                popularText="Más Popular"
                isPopular={plan.id === "trimestral" || plan.id === "semestral"}
              />
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl mx-auto bg-[#111] border border-orange-brand/20 shadow-[0_0_30px_rgba(249,115,22,0.05)] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-brand/20 blur-3xl pointer-events-none" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Punto adicional de acceso</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">{extraPointES.text}</p>
              </div>
              <div className="shrink-0 bg-black/50 px-6 py-4 rounded-2xl border border-white/10 text-center relative z-10">
                <span className="block text-3xl font-bold text-orange-brand">{extraPointES.price}</span>
                <span className="text-sm text-white/40 font-medium">{extraPointES.period}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Preguntas Frecuentes" subtitle="Resuelve tus dudas sobre el servicio" />

      <Footer locale="es" />
    </div>
  );
}
