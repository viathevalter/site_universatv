import Link from "next/link";
import { Logo } from "./Logo";

type Locale = "global" | "es" | "pt-br" | "crm" | "en";

interface FooterProps {
  locale?: Locale;
}

export function Footer({ locale = "global" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const isEs = locale === "es";
  const isEn = locale === "en";

  const content = {
    desc: isEn
      ? "Digital experience, flexible plans and a more practical way to enjoy your entertainment."
      : isEs 
      ? "Experiencia digital, planes flexibles y una forma más práctica de disfrutar tu entretenimiento."
      : "Experiência digital, planos flexíveis e uma forma mais prática de aproveitar seu entretenimento.",
    links: isEn ? [
      "Home", "Plans", "Compatibility", "FAQ", "Contact", "Support"
    ] : isEs ? [
      "Inicio", "Planes", "Compatibilidad", "Preguntas frecuentes", "Contacto", "Soporte"
    ] : [
      "Início", "Planos", "Compatibilidade", "Perguntas frequentes", "Contato", "Suporte"
    ],
    legal: isEn ? ["Terms of Use", "Privacy Policy"] : isEs ? ["Términos de Uso", "Privacidad"] : ["Termos de Uso", "Privacidade"],
    copyright: isEn
      ? `© ${currentYear} UniversaTV. All rights reserved.`
      : isEs 
      ? `© ${currentYear} UniversaTV. Todos los derechos reservados.`
      : `© ${currentYear} UniversaTV. Todos os direitos reservados.`
  };

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-16">
          <div className="md:col-span-2">
            <Logo className="mb-6 delay-100" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-medium mb-4">
              {content.desc}
            </p>
            <p className="text-white/40 text-xs font-medium">
              UniversaTV Digital Services & Media Subscriptions
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Links</h4>
            <div className="flex flex-col space-y-3 text-white/50 text-sm font-medium">
              <Link href="/es" className="hover:text-orange-brand transition-colors">Planes España (EUR)</Link>
              <Link href="/en" className="hover:text-orange-brand transition-colors">Plans UK (GBP)</Link>
              <Link href="/pt-br" className="hover:text-orange-brand transition-colors">Planos Brasil</Link>
              <Link href="/es#faq" className="hover:text-orange-brand transition-colors">FAQ</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Contacto & Soporte</h4>
            <div className="flex flex-col space-y-3 text-white/50 text-sm font-medium">
              <a href="mailto:soporte@universatv.com" className="hover:text-orange-brand transition-colors flex items-center gap-2">
                ✉️ soporte@universatv.com
              </a>
              <a href="https://wa.me/34674016583" target="_blank" rel="noopener noreferrer" className="hover:text-orange-brand transition-colors flex items-center gap-2">
                💬 +34 674 01 65 83
              </a>
              <span className="text-white/40 text-xs">
                Soporte y atención 7 días a la semana
              </span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center md:text-left font-medium">
            {content.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href={isEn ? "/terms" : isEs ? "/es/terminos" : "/termos"} className="text-white/40 text-sm hover:text-white transition-colors font-medium">{content.legal[0]}</Link>
            <Link href={isEn ? "/privacy" : isEs ? "/es/privacidad" : "/privacidade"} className="text-white/40 text-sm hover:text-white transition-colors font-medium">{content.legal[1]}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
