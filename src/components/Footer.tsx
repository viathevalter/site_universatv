import Link from "next/link";
import { Logo } from "./Logo";

type Locale = "global" | "es" | "pt-br" | "crm";

interface FooterProps {
  locale?: Locale;
}

export function Footer({ locale = "global" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Adapt texts to pt-br or es depending on locale. For global/crm, default to pt-br texts for links.
  const isEs = locale === "es";

  const content = {
    desc: isEs 
      ? "Experiencia digital, planes flexibles y una forma más práctica de disfrutar tu entretenimiento."
      : "Experiência digital, planos flexíveis e uma forma mais prática de aproveitar seu entretenimento.",
    links: isEs ? [
      "Inicio", "Planes", "Compatibilidad", "Preguntas frecuentes", "Contacto", "Soporte"
    ] : [
      "Início", "Planos", "Compatibilidade", "Perguntas frequentes", "Contato", "Suporte"
    ],
    legal: isEs ? ["Términos de Uso", "Privacidad"] : ["Termos de Uso", "Privacidade"],
    copyright: isEs 
      ? `© ${currentYear} UniversaTV. Todos los derechos reservados.`
      : `© ${currentYear} UniversaTV. Todos os direitos reservados.`
  };

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-16">
          <div className="md:col-span-2">
            <Logo className="mb-6 delay-100" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium">
              {content.desc}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-white/50 text-sm font-medium">
              {content.links.map((link, idx) => (
                <span key={idx} className="hover:text-orange-brand transition-colors cursor-pointer">{link}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center md:text-left font-medium">
            {content.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href={isEs ? "/es/terminos" : "/termos"} className="text-white/40 text-sm hover:text-white transition-colors font-medium">{content.legal[0]}</Link>
            <Link href={isEs ? "/es/privacidad" : "/privacidade"} className="text-white/40 text-sm hover:text-white transition-colors font-medium">{content.legal[1]}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
