"use client";

import { CheckCircle2, MonitorSmartphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PricingCard } from "@/components/PricingCard";
import { FaqSection } from "@/components/FaqSection";
import { pricingES, extraPointES } from "@/data/pricing-es";

export default function SpainPage() {
  const faqs = [
    { question: "¿Cómo funciona la activación?", answer: "La activación es rápida y práctica. Después de elegir el plan y confirmar el pago, recibirás tus datos de acceso inmediatamente junto con instrucciones detalladas para instalar en cualquier dispositivo." },
    { question: "¿Puedo usarlo en diferentes dispositivos?", answer: "¡Sí! Nuestra plataforma es totalmente compatible con Smart TVs, móviles, tablets, TV Box y ordenadores. Disfruta con total libertad donde estés." },
    { question: "¿Qué pasa si necesito más accesos?", answer: "Puedes ampliar tu plan con un punto adicional por solo 4 € al mes por cada acceso extra simultáneo." },
    { question: "¿Qué plan me conviene más?", answer: "El plan Anual ofrece el mayor descuento, pero muchos usuarios prefieren el Trimestral o Semestral para un buen equilibrio entre precio y flexibilidad." },
    { question: "¿Hay soporte?", answer: "Sí, ofrecemos soporte continuo VIP para garantizar que tu experiencia sea perfecta. Si necesitas ayuda con la instalación, nuestro equipo está siempre disponible." }
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
                Tu entretenimiento, <span className="text-orange-brand">organizado</span> para disfrutar más y complicarte menos.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                Accede a una experiencia moderna, flexible y pensada para acompañarte en tus dispositivos favoritos, con planes adaptados a tu ritmo.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#plans" className="inline-block px-8 py-4 rounded-full bg-orange-brand text-white font-bold hover:bg-orange-brand/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                Ver Planes Disponibles
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cómo funciona & Beneficios (Grid) */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cómo funciona</h2>
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                Empieza en pocos pasos. Elige el plan que mejor se adapta a ti, recibe la activación y disfruta de una experiencia pensada para ser práctica, cómoda y accesible desde distintos dispositivos compatibles.
              </p>
              
              <div className="flex items-start gap-4 mb-10 p-6 rounded-2xl bg-white/5 border border-white/5">
                <MonitorSmartphone className="text-orange-brand shrink-0" size={32} />
                <div>
                  <h3 className="font-medium text-white mb-2">Compatible con tu forma de ver contenido</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Disfruta desde Smart TV, móvil, tablet, TV Box y otros dispositivos compatibles, con una experiencia diseñada para acompañarte en casa o donde estés.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Planes para distintas necesidades",
                  "Acceso adaptable a tu ritmo",
                  "Compatibilidad con varios dispositivos",
                  "Activación práctica",
                  "Estructura pensada para facilitar el uso",
                  "Experiencia más organizada y simple"
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

      {/* Pricing / Planes */}
      <section id="plans" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Elige tu plan</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Opciones flexibles diseñadas para tus necesidades.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {pricingES.map((plan, idx) => (
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
                <h3 className="text-xl font-bold text-white mb-2">Punto adicional de acceso</h3>
                <p className="text-white/70">{extraPointES.text}</p>
              </div>
              <div className="shrink-0 bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-center">
                <span className="block text-2xl font-bold text-orange-brand">{extraPointES.price}</span>
                <span className="text-sm text-white/50">{extraPointES.period}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Preguntas Frecuentes" subtitle="Resuelve tus dudas sobre el servicio" />

      {/* Final CTA */}
      <section className="py-32 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-orange-brand/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
              Elige tu plan y accede a una experiencia más <span className="text-orange-brand">práctica, flexible y moderna</span>.
            </h2>
            <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-orange-brand border-2 border-orange-brand text-white font-bold text-lg hover:bg-transparent hover:text-orange-brand transition-all">
              Empezar Ahora
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
