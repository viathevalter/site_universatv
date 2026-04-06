"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_0_15px_rgba(249,115,22,0.05)]"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.8)] transition-all">
            <span className="text-white font-bold text-xl">U</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Universa<span className="text-orange-brand">TV</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/es" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            España
          </Link>
          <Link href="/pt-br" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Brasil
          </Link>
          <Link href="/crm" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            CRM Resellers
          </Link>
          <Link 
            href="#plans" 
            className="text-sm font-medium bg-orange-brand/10 text-orange-brand px-5 py-2.5 rounded-full border border-orange-brand/20 hover:bg-orange-brand hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all"
            onClick={(e) => {
              if (document.getElementById('plans')) {
                e.preventDefault();
                document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver Planos
          </Link>
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
        "md:hidden absolute top-full left-0 w-full bg-card border-b border-white/5 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="flex flex-col p-6 gap-4">
          <Link onClick={() => setMobileMenuOpen(false)} href="/es" className="text-white/80 font-medium">España</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/pt-br" className="text-white/80 font-medium">Brasil</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/crm" className="text-white/80 font-medium">CRM Resellers</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#plans" className="text-orange-brand font-medium">Ver Planos</Link>
        </nav>
      </div>
    </header>
  );
}
