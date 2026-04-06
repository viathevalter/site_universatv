import Link from "next/link";
import { MonitorPlay, Smartphone, Tv } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Universa<span className="text-orange-brand">TV</span></span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Sua plataforma premium de entretenimento. Acesse uma experiência moderna, flexível e pensada para acompanhar sua rotina.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Plataformas</h4>
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
            <h4 className="text-white font-medium mb-6">Mercados</h4>
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
                  CRM para Revendedores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Suporte</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Contato VIP via WhatsApp</li>
              <li>Instalação Gratuita</li>
              <li>Atualizações Semanais</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} UniversaTV. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
            <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
