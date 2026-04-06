"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type Locale = "global" | "es" | "pt-br" | "crm";

interface NavbarProps {
  locale?: Locale;
}

export function Navbar({ locale = "global" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define locale-specific links and CTA text
  const navLinks = {
    global: [
      { href: "/es", label: "España" },
      { href: "/pt-br", label: "Brasil" },
      { href: "/crm", label: "CRM Resellers" },
    ],
    es: [
      { href: "/", label: "Volver al Inicio" },
      { href: "/crm", label: "Plataforma CRM" },
    ],
    "pt-br": [
      { href: "/", label: "Início" },
      { href: "/crm", label: "Plataforma CRM" },
    ],
    crm: [
      { href: "/", label: "Início" },
      { href: "/pt-br", label: "Brasil" },
      { href: "/es", label: "España" },
    ],
  };

  const ctaTranslations = {
    global: null,
    es: "Ver Planes",
    "pt-br": "Ver Planos",
    crm: "Falar com Consultor",
  };

  const links = navLinks[locale];
  const ctaText = ctaTranslations[locale];
  const ctaHref = locale === "crm" ? "#solucao" : "#plans";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_0_15px_rgba(249,115,22,0.05)]"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo href={locale === "global" ? "/" : `/${locale}`} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}

          {ctaText && (
            <a 
              href={ctaHref} 
              className="text-sm font-medium bg-orange-brand/10 text-orange-brand px-5 py-2.5 rounded-full border border-orange-brand/20 hover:bg-orange-brand hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all"
            >
              {ctaText}
            </a>
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-white/5 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="flex flex-col p-6 gap-4">
          {links.map((link) => (
            <Link key={link.href} onClick={() => setMobileMenuOpen(false)} href={link.href} className="text-white/80 font-medium">
              {link.label}
            </Link>
          ))}
          {ctaText && (
             <a onClick={() => setMobileMenuOpen(false)} href={ctaHref} className="text-orange-brand font-medium">
              {ctaText}
             </a>
          )}
        </nav>
      </div>
    </header>
  );
}
