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
import { pricingEN, extraPointEN, globalFeaturesEN } from "@/data/pricing-en";

export default function UkPage() {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string, revolutUrl: string, paypalUrl: string} | null>(null);
  
  const faqs = [
    { 
      question: "How does activation work?", 
      answer: "After choosing your plan, you will receive the necessary information to get started in a simple and quick way." 
    },
    { 
      question: "Can I use it on different devices?", 
      answer: "Yes. The experience is designed to work on different compatible devices." 
    },
    { 
      question: "What if I need more connections?", 
      answer: "You can expand your plan with an additional connection for £4/month each." 
    },
    { 
      question: "Which plan suits me best?", 
      answer: "If you look for flexibility, the monthly plan can be ideal. If you want better value, longer duration plans are usually the most convenient option." 
    },
    { 
      question: "Is there support?", 
      answer: "Yes. The experience is designed to offer clear and organized support." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="en" />

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
                Your entertainment with more freedom, practicality and variety.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
                Enjoy a modern, flexible experience designed to accompany you on your favorite devices, with plans adapted to your rhythm.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#plans" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-orange-brand text-white font-bold tracking-wide hover:bg-orange-brand/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
                  View plans
                </a>
                <a href="#plans" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-wide hover:bg-white/10 transition-all">
                  Order now
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

      {/* How it works */}
      <section className="pt-48 pb-20 relative bg-[#020202]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get started in a few steps</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Choose the plan that fits you best, receive the activation, and start enjoying a more practical, organized and comfortable experience from different compatible devices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Features */}
      <section className="pb-24 relative bg-[#020202]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16 md:mt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">More convenience, more flexibility and a better organized experience</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {globalFeaturesEN.map((feature, idx) => (
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

      {/* Compatibility */}
      <section className="py-20 relative bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Compatible with the way you watch content</h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Enjoy on Smart TV, mobile, tablet, TV Box and other compatible devices, with an experience designed to accompany you at home or wherever you are.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing / Plans */}
      <section id="plans" className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-brand/5 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Choose the ideal plan to enjoy your way</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <PricingCard
                 name="Monthly"
                 price="£9.50"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ 
                   name: "Monthly", 
                   price: "£9.50", 
                   revolutUrl: "https://revolut.me/vitorfuji?currency=GBP&amount=950",
                   paypalUrl: "https://paypal.me/vitorfuji/9.50"
                 })}
                 delay={0.1}
                 ctaText="Order now"
                 desc="Ideal to start with total flexibility."
            />
            <PricingCard
                 name="Quarterly"
                 price="£25"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ 
                   name: "Quarterly", 
                   price: "£25", 
                   revolutUrl: "https://revolut.me/vitorfuji?currency=GBP&amount=2500",
                   paypalUrl: "https://paypal.me/vitorfuji/25"
                 })}
                 delay={0.2}
                 ctaText="Order now"
                 desc="A practical option to enjoy longer with better value."
                 isPopular
                 popularText="Recommended"
            />
            <PricingCard
                 name="Semiannual"
                 price="£40"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ 
                   name: "Semiannual", 
                   price: "£40", 
                   revolutUrl: "https://revolut.me/vitorfuji?currency=GBP&amount=4000",
                   paypalUrl: "https://paypal.me/vitorfuji/40"
                 })}
                 delay={0.3}
                 ctaText="Order now"
                 desc="Balance between savings, convenience and continuity."
            />
            <PricingCard
                 name="Annual"
                 price="£70"
                 period=""
                 paymentLink="#"
                 onClick={() => setSelectedPlan({ 
                   name: "Annual", 
                   price: "£70", 
                   revolutUrl: "https://revolut.me/vitorfuji?currency=GBP&amount=7000",
                   paypalUrl: "https://paypal.me/vitorfuji/70"
                 })}
                 delay={0.4}
                 ctaText="Order now"
                 desc="The best choice for those seeking the best value in the long term."
            />
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl mx-auto bg-[#111] border border-orange-brand/20 shadow-[0_0_30px_rgba(249,115,22,0.05)] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-brand/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Need more than one connection?</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">{extraPointEN.text}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions" />
      
      {/* Final CTA */}
      <section className="py-32 relative text-center bg-[#020202]">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-orange-brand/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter max-w-4xl mx-auto">
              Choose your plan and enjoy a more practical, flexible and modern experience.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                View plans
              </a>
              <a href="#plans" className="inline-block px-10 py-5 rounded-full bg-orange-brand text-white font-bold text-lg hover:bg-orange-brand/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all">
                Order now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FloatingWhatsApp locale="en" />
      <Footer locale="en" />

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
            <h3 className="text-2xl font-bold text-white mb-2 pr-8">Choose your payment method</h3>
            <p className="text-white/50 mb-8 font-medium">You are signing up for the <strong className="text-white">{selectedPlan.name}</strong> plan</p>

            <div className="grid grid-cols-1 gap-4">
              {/* Revolut Option */}
              <div className="group flex flex-col items-center justify-center gap-4 bg-[#1A1A1A] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Image src="/Revolut-Logo.wine.png" alt="Revolut" width={160} height={50} className="object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-full flex flex-col gap-3 mt-2">
                  <a 
                    href={selectedPlan.revolutUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 text-center bg-white text-black font-bold tracking-wide rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                  >
                    Pay with Revolut
                  </a>
                  <a 
                    href={`https://wa.me/34617598421?text=${encodeURIComponent(`Hello, I've just paid via Revolut for the ${selectedPlan.name} plan of ${selectedPlan.price}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold tracking-wide hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    Confirm via WhatsApp
                  </a>
                </div>
              </div>

              {/* PayPal Option */}
              <div className="group flex flex-col items-center justify-center gap-4 bg-[#1A1A1A] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Image src="/paypal-logo.svg" alt="PayPal" width={120} height={32} className="object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-full flex flex-col gap-3 mt-2">
                  <a 
                    href={selectedPlan.paypalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 text-center bg-[#0070ba] text-white font-bold tracking-wide rounded-xl hover:bg-[#0070ba]/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,112,186,0.2)]"
                  >
                    Pay with PayPal
                  </a>
                  <a 
                    href={`https://wa.me/34617598421?text=${encodeURIComponent(`Hello, I've just paid via PayPal for the ${selectedPlan.name} plan of ${selectedPlan.price}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold tracking-wide hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    Confirm via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
