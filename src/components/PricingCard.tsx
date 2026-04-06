"use client";

import { Check } from "lucide-react";
import { pricingBR } from "@/data/pricing-br"; // Generic type can be extracted
import { AnimatedSection } from "./AnimatedSection";

// Allow generic type since structure is the same
type PricingPlanProps = typeof pricingBR[0] & { delay?: number; isPopular?: boolean };

export function PricingCard({ name, price, period, features, paymentLink, delay = 0, isPopular = false }: PricingPlanProps) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div 
        className={`h-full relative flex flex-col p-8 rounded-3xl bg-card border transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group ${
          isPopular 
            ? "border-orange-brand/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]" 
            : "border-white/5 hover:border-white/10"
        }`}
      >
        {isPopular && (
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              Mais Popular / Más Popular
            </span>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-lg font-medium text-white/80 mb-2">{name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white group-hover:text-orange-brand transition-colors">{price}</span>
            <span className="text-sm text-white/50">{period}</span>
          </div>
        </div>

        <ul className="flex-1 space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
              <Check size={18} className="text-orange-brand shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a 
          href={paymentLink}
          className={`w-full py-4 text-center rounded-xl font-medium transition-all ${
            isPopular
              ? "bg-orange-brand text-white hover:bg-orange-brand/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              : "bg-white/5 text-white hover:bg-white/10"
          }`}
        >
          Assinar Agora / Suscribirse
        </a>
      </div>
    </AnimatedSection>
  );
}
