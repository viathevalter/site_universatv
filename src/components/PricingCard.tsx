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
  desc?: string;
}

export function PricingCard({ 
  name, price, period, paymentLink = "#", delay = 0, isPopular = false, ctaText, popularText, desc, onClick 
}: PricingPlanProps & { onClick?: () => void }) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div 
        className={`h-full relative flex flex-col p-8 rounded-3xl bg-[#0A0A0A] border transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group ${
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

        <div className="mb-8 mt-2 flex-grow">
          <h3 className="text-xl font-bold text-white/90 mb-4 tracking-tight">{name}</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl lg:text-5xl font-black text-white transition-colors tracking-tighter">{price}</span>
            {period && <span className="text-sm text-white/50 font-medium">{period}</span>}
          </div>
          {desc && (
             <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
          )}
        </div>

        <a 
          href={paymentLink}
          onClick={(e) => {
             if (onClick) {
                e.preventDefault();
                onClick();
             }
          }}
          className={`w-full py-4 text-center rounded-xl font-bold transition-all cursor-pointer ${
            isPopular
              ? "bg-orange-brand text-white hover:bg-orange-brand/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              : "bg-white/5 border border-white/5 text-white hover:bg-white/10"
          }`}
        >
          {ctaText}
        </a>
      </div>
    </AnimatedSection>
  );
}
