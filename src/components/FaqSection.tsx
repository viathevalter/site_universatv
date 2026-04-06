"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span className="text-white/90 font-medium group-hover:text-white transition-colors">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-orange-brand/20 text-white/50 group-hover:text-orange-brand transition-all duration-300 ${isOpen ? 'rotate-180 bg-orange-brand/20 text-orange-brand' : ''}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/60 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}

export function FaqSection({ faqs, title = "Perguntas Frequentes", subtitle = "Tire suas dúvidas sobre o serviço" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-brand/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-card border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
