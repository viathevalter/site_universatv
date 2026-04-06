import Link from "next/link";
import { MonitorPlay, Smartphone, Tv } from "lucide-react";
import { Logo } from "./Logo";

type Locale = "global" | "es" | "pt-br" | "crm";

interface FooterProps {
  locale?: Locale;
}

export function Footer({ locale = "global" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const content = {
    platforms: locale === "es" ? "Plataformas" : "Plataformas",
    markets: locale === "es" ? "Mercados" : "Mercados",
    support: locale === "es" ? "Soporte" : "Suporte",
    desc: locale === "es" 
      ? "Tu plataforma premium de entretenimiento. Accede a una experiencia moderna, flexible y pensada para acompañar tu rutina."
      : "Sua plataforma premium de entretenimento. Acesse uma experiência moderna, flexível e pensada para acompanhar sua rotina.",
    supportLinks: locale === "es" ? [
      "Contacto VIP vía WhatsApp", "Instalación Gratuita", "Actualizaciones Semanales"
    ] : [
      "Contato VIP via WhatsApp", "Instalação Gratuita", "Atualizações Semanais"
    ],
    legal: locale === "es" ? ["Términos de Uso", "Privacidad"] : ["Termos de Uso", "Privacidade"],
    copyright: locale === "es" 
      ? `© ${currentYear} UniversaTV. Todos los derechos reservados.`
      : `© ${currentYear} UniversaTV. Todos os direitos reservados.`
  };

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 mb-16">
          <div className="md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {content.desc}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">{content.platforms}</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Tv size={16} className="text-orange-brand" /> Smart TVs
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Smartphone size={16} className="text-orange-brand" /> Smartphones/Tablets
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <MonitorPlay size={16} className="text-orange-brand" /> PC & Web
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">{content.markets}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/pt-br" className="text-white/60 hover:text-orange-brand transition-colors text-sm">
                  Brasil (PT-BR)
                </Link>
              </li>
              <li>
                <Link href="/es" className="text-white/60 hover:text-orange-brand transition-colors text-sm">
                  España (ES)
                </Link>
              </li>
              <li>
                <Link href="/crm" className="text-white/60 hover:text-orange-brand transition-colors text-sm">
                  CRM Resellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">{content.support}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              {content.supportLinks.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            {content.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">{content.legal[0]}</span>
            <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">{content.legal[1]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
