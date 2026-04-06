"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacidadePage() {
  const sections = [
    {
      title: "Introdução",
      content: "A UniversaTV respeita a sua privacidade e está comprometida com a proteção das informações coletadas por meio deste site, dos nossos canais de atendimento e das interações realizadas com nossa equipe."
    },
    {
      title: "Quem somos",
      content: "Este site é operado pela UniversaTV, que atua por meio de canais digitais, páginas comerciais e atendimento ao cliente.\nContato por e-mail: info@universatv.com\nWhatsApp Brasil: +55 47 99634-2377\nWhatsApp Espanha: +34 617 59 84 21"
    },
    {
      title: "Quais dados podemos coletar",
      content: "Podemos coletar informações fornecidas diretamente por você, como nome, telefone, e-mail e dados enviados por formulários ou mensagens. Também podemos coletar informações técnicas de navegação, como IP, navegador, dispositivo e páginas acessadas."
    },
    {
      title: "Como coletamos os dados",
      content: "Os dados podem ser coletados quando você acessa o site, preenche formulários, clica em botões de contato, envia mensagens por WhatsApp, solicita informações comerciais ou interage com campanhas e páginas da UniversaTV."
    },
    {
      title: "Para que usamos os dados",
      content: "Utilizamos os dados para responder solicitações, realizar atendimento, apresentar informações comerciais, melhorar a experiência no site, analisar desempenho de campanhas e manter a operação dos nossos canais digitais."
    },
    {
      title: "Compartilhamento de dados",
      content: "Os dados podem ser tratados por ferramentas e plataformas que apoiam nossa operação, como hospedagem, comunicação, análise e serviços integrados. Não vendemos dados pessoais a terceiros."
    },
    {
      title: "Cookies e tecnologias semelhantes",
      content: "Podemos usar cookies e tecnologias semelhantes para melhorar a navegação, analisar acessos, medir desempenho de campanhas e oferecer uma experiência mais eficiente no site."
    },
    {
      title: "Segurança e armazenamento",
      content: "Adotamos medidas razoáveis para proteger as informações tratadas em nossos ambientes digitais, embora nenhum sistema seja totalmente livre de riscos."
    },
    {
      title: "Direitos do usuário",
      content: "Você pode solicitar informações sobre os dados tratados, bem como pedir correção, atualização ou exclusão quando aplicável, entrando em contato pelo e-mail info@universatv.com."
    },
    {
      title: "Links externos",
      content: "O site pode conter links para plataformas externas, como WhatsApp e outros serviços. A UniversaTV não é responsável pelas políticas de privacidade desses terceiros."
    },
    {
      title: "Alterações desta política",
      content: "Esta Política de Privacidade pode ser atualizada periodicamente para refletir melhorias operacionais, ajustes legais ou mudanças no site."
    },
    {
      title: "Contato",
      content: "Para dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados, entre em contato:\nE-mail: info@universatv.com\nWhatsApp Brasil: +55 47 99634-2377\nWhatsApp Espanha: +34 617 59 84 21"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="pt-br" />

      {/* Header Institucional */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-orange-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Política de Privacidade</h1>
          <p className="text-lg md:text-2xl text-white/50 leading-relaxed font-medium">
            Saiba como tratamos informações, dados de contato e interações realizadas por meio do site e dos nossos canais de atendimento.
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
