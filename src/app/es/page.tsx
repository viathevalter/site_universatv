"use client";

import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { InteractiveParticles } from "@/components/InteractiveParticles";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PricingCard } from "@/components/PricingCard";
import { FaqSection } from "@/components/FaqSection";
import { MockupTV } from "@/components/Mockups";
import { pricingES, extraPointES, globalFeaturesES } from "@/data/pricing-es";

export default function SpainPage() {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string, revolutUrl: string} | null>(null);
  const faqs = [
    { question: "¿Cómo funciona la activación?", answer: "Después de elegir tu plan, recibirás la información necesaria para comenzar de forma simple y rápida." },
    { question: "¿Puedo usarlo en diferentes dispositivos?", answer: "Sí. La experiencia está pensada para funcionar en distintos dispositivos compatibles." },
    { question: "¿Qué pasa si necesito más accesos?", answer: "Puedes añadir puntos adicionales por 4 €/mes cada uno." },
    { question: "¿Qué plan me conviene más?", answer: "Si buscas flexibilidad, el plan mensual puede ser ideal. Si buscas mejor valor, los planes de mayor duración suelen ser la opción más conveniente." },
    { question: "¿Hay soporte?", answer: "Sí. La experiencia está pensada para ofrecer una atención más clara y organizada." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="es" />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <InteractiveParticles />
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-brand/10 to-transparent pointer-events-none" />
        
        {/* Abstract Shapes */}
        <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-orange-brand/10 blur-[150px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Tu entretenimiento con más libertad, practicidad y variedad.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
                Disfruta de una experiencia moderna, flexible y pensada para acompañarte en tus dispositivos favoritos, con planes adaptados a tu ritmo.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#plans" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-orange-brand text-white font-bold tracking-wide hover:bg-orange-brand/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
                  Ver planes
                </a>
                <a href="#plans" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-wide hover:bg-white/10 transition-all">
                  Contratar ahora
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Empieza en pocos pasos</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Elige el plan que mejor encaja contigo, recibe la activación y empieza a disfrutar de una experiencia más práctica, organizada y cómoda desde distintos dispositivos compatibles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Beneficios Globais */}
      <section className="pb-24 relative bg-[#020202]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16 md:mt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Más comodidad, más flexibilidad y una experiencia mejor organizada</h2>
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

      {/* Compatibilidad */}
      <section className="py-20 relative bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Compatible con tu forma de ver contenido</h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Disfruta desde Smart TV, móvil, tablet, TV Box y otros dispositivos compatibles, con una experiencia pensada para acompañarte en casa o donde estés.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing / Planos */}
      <section id="plans" className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-brand/5 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Elige el plan ideal para disfrutar a tu manera</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <PricingCard
                 name="Mensual"
                 price="9,50 €"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ name: "Mensual", price: "9,50 €", revolutUrl: "https://revolut.me/vitorfuji?currency=EUR&amount=950"})}
                 delay={0.1}
                 ctaText="Contratar ahora"
                 desc="Ideal para empezar con total flexibilidad."
            />
            <PricingCard
                 name="Trimestral"
                 price="25 €"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ name: "Trimestral", price: "25 €", revolutUrl: "https://revolut.me/vitorfuji?currency=EUR&amount=2500"})}
                 delay={0.2}
                 ctaText="Contratar ahora"
                 desc="Una opción práctica para disfrutar más tiempo con mejor valor."
                 isPopular
                 popularText="Recomendado"
            />
            <PricingCard
                 name="Semestral"
                 price="40 €"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ name: "Semestral", price: "40 €", revolutUrl: "https://revolut.me/vitorfuji?currency=EUR&amount=4000"})}
                 delay={0.3}
                 ctaText="Contratar ahora"
                 desc="Equilibrio entre ahorro, comodidad y continuidad."
            />
            <PricingCard
                 name="Anual"
                 price="70 €"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ name: "Anual", price: "70 €", revolutUrl: "https://revolut.me/vitorfuji?currency=EUR&amount=7000"})}
                 delay={0.4}
                 ctaText="Contratar ahora"
                 desc="La mejor elección para quienes buscan el mejor valor a largo plazo."
            />
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl mx-auto bg-[#111] border border-orange-brand/20 shadow-[0_0_30px_rgba(249,115,22,0.05)] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-brand/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">¿Necesitas más de un acceso?</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">Amplía tu plan con un punto adicional por solo 4 €/mes por acceso extra.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Preguntas frecuentes" />
      
      {/* Final CTA */}
      <section className="py-32 relative text-center bg-[#020202]">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-orange-brand/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter max-w-4xl mx-auto">
              Elige tu plan y disfruta de una experiencia más práctica, flexible y moderna.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                Ver planes
              </a>
              <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-orange-brand text-white font-bold text-lg hover:bg-orange-brand/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all">
                Contratar ahora
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FloatingWhatsApp locale="es" />
      <Footer locale="es" />

      {/* Payment Selection Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPlan(null)} />
          <div className="relative bg-[#111] border border-white/5 rounded-3xl p-6 md:p-10 max-w-lg w-full shadow-2xl">
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2 pr-8">Elige tu forma de pago</h3>
            <p className="text-white/50 mb-8 font-medium">Estás contratando el plan <strong className="text-white">{selectedPlan.name}</strong></p>

            <div className="grid grid-cols-1 gap-4">
              <a 
                href={selectedPlan.revolutUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-4 bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Image src="/Revolut-Logo.wine.png" alt="Revolut" width={160} height={50} className="object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="text-white font-bold tracking-wide mt-2">Pagar con Revolut</span>
              </a>

              <a 
                href={`https://wa.me/34617598421?text=${encodeURIComponent(`Hola, acabo de pagar por Bizum el plan ${selectedPlan.name} de ${selectedPlan.price}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-4 bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Image src="/Bizum.png" alt="Bizum" width={140} height={40} className="object-contain filter opacity-90 group-hover:opacity-100 transition-opacity brightness-[100] drop-shadow-md" />
                <div className="text-center mt-2 flex flex-col items-center">
                  <span className="block text-white font-bold tracking-wide mb-2">Pagar con Bizum</span>
                  <span className="block text-white/70 text-sm mt-1 max-w-[280px]">
                    Envía el valor de <strong className="text-white bg-white/10 px-1.5 py-0.5 rounded mx-0.5">{selectedPlan.price}</strong> por tu banco a través de Bizum al número: <br/>
                    <strong className="text-white text-lg mt-2 inline-block">617 59 84 21</strong>
                  </span>
                  <span className="block text-white/40 text-[11px] mt-3 leading-tight max-w-[250px] italic">
                    *Exclusivo para pagos a través del sistema bancario de España.
                  </span>
                  <div className="flex items-center gap-2 mt-4 bg-[#25D366]/10 border border-[#25D366]/30 px-5 py-2 rounded-full hover:bg-[#25D366]/20 transition-all shadow-[0_0_15px_rgba(37,211,102,0.1)] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    <span className="text-[#25D366] text-xs font-bold tracking-wide">Avisar por WhatsApp</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
