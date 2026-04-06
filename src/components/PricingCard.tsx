"use client";

import { AnimatedSection } from "./AnimatedSection";

interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  paymentLink: string;
  delay?: number;
  isPopular?: boolean;
  ctaText: string;
  popularText?: string;
}

export function PricingCard({ 
  name, price, period, paymentLink, delay = 0, isPopular = false, ctaText, popularText 
}: PricingPlanProps) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div 
        className={`h-full relative flex flex-col p-8 rounded-3xl bg-card border transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group ${
          isPopular 
            ? "border-orange-brand/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]" 
            : "border-white/5 hover:border-white/10"
        }`}
      >
        {isPopular && popularText && (
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              {popularText}
            </span>
          </div>
        )}

        <div className="mb-6 mt-2 flex-grow">
          <h3 className="text-xl font-medium text-white/80 mb-4">{name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl lg:text-5xl font-bold text-white group-hover:text-orange-brand transition-colors tracking-tight">{price}</span>
            <span className="text-sm text-white/50 font-medium">{period}</span>
          </div>
        </div>

        <a 
          href={paymentLink}
          className={`w-full py-4 text-center rounded-xl font-bold transition-all ${
            isPopular
              ? "bg-orange-brand text-white hover:bg-orange-brand/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              : "bg-white/5 text-white hover:bg-white/10"
          }`}
        >
          {ctaText}
        </a>
      </div>
    </AnimatedSection>
  );
}
