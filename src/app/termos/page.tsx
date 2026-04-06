"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermosPage() {
  const sections = [
    {
      title: "Introdução",
      content: "Ao acessar este site, você concorda com os presentes Termos de Uso. Caso não concorde com estes termos, recomendamos não utilizar o site."
    },
    {
      title: "Objeto",
      content: "Este site tem caráter informativo, institucional, comercial e de atendimento, com a finalidade de apresentar conteúdos, páginas, canais de contato e soluções relacionadas à marca UniversaTV."
    },
    {
      title: "Uso do site",
      content: "Ao utilizar este site, você concorda em usar as informações de forma lícita, não praticar atividades que prejudiquem o funcionamento do site e não tentar acessar áreas restritas sem autorização."
    },
    {
      title: "Conteúdo e informações",
      content: "Buscamos manter as informações do site organizadas, claras e atualizadas, mas não garantimos que todo conteúdo esteja sempre completo, disponível ou livre de erros."
    },
    {
      title: "Atendimento e contato",
      content: "O site pode direcionar o usuário para canais de atendimento, incluindo WhatsApp e formulários. O envio de mensagens não garante contratação, resposta imediata ou disponibilidade permanente dos canais."
    },
    {
      title: "Propriedade intelectual",
      content: "Os textos, marcas, logotipos, elementos visuais, design e demais conteúdos do site pertencem à UniversaTV ou são utilizados com autorização, sendo vedada a reprodução sem autorização prévia."
    },
    {
      title: "Links externos",
      content: "O site pode conter links para plataformas de terceiros. A UniversaTV não se responsabiliza por conteúdos, disponibilidade ou práticas de serviços externos."
    },
    {
      title: "Limitação de responsabilidade",
      content: "Na máxima extensão permitida pela legislação aplicável, a UniversaTV não se responsabiliza por indisponibilidades temporárias do site, falhas técnicas externas, interrupções de conexão, uso indevido por terceiros ou decisões tomadas com base nas informações aqui publicadas."
    },
    {
      title: "Privacidade e dados",
      content: "O tratamento de dados relacionados ao uso deste site é descrito na Política de Privacidade, que deve ser lida em conjunto com estes Termos de Uso."
    },
    {
      title: "Alterações",
      content: "A UniversaTV pode atualizar estes Termos de Uso a qualquer momento, mediante publicação da nova versão nesta página."
    },
    {
      title: "Contato",
      content: "Para dúvidas sobre estes Termos de Uso, entre em contato:\nE-mail: info@universatv.com\nWhatsApp Brasil: +55 47 99634-2377\nWhatsApp Espanha: +34 617 59 84 21"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="pt-br" />

      {/* Header Institucional */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-orange-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Termos de Uso</h1>
          <p className="text-lg md:text-2xl text-white/50 leading-relaxed font-medium">
            Conheça as condições gerais de uso do site, dos conteúdos e dos canais digitais da UniversaTV.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 relative bg-[#020202]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-[#111] p-8 md:p-10 rounded-2xl border border-white/5 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-orange-brand/10 text-orange-brand flex items-center justify-center text-sm">
                     {idx + 1}
                   </div>
                   {section.title}
                </h2>
                <div className="text-white/60 leading-relaxed font-medium space-y-4">
                  {section.content.split('\n').map((paragraph, i) => (
                    <p key={i}>
                       {paragraph.includes('@') ? (
                          <a href={`mailto:${paragraph.replace('E-mail: ', '')}`} className="text-orange-brand hover:underline">{paragraph}</a>
                       ) : paragraph.includes('+') ? (
                          <span className="text-white/80">{paragraph}</span>
                       ) : (
                          paragraph
                       )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="pt-br" />
    </div>
  );
}
