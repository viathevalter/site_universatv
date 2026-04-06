"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function PrivacidadPage() {
  const sections = [
    {
      title: "Introducción",
      content: "UniversaTV respeta tu privacidad y está comprometida con la protección de la información recopilada a través de este sitio web, de nuestros canales de atención y de las interacciones realizadas con nuestro equipo."
    },
    {
      title: "Quiénes somos",
      content: "Este sitio web es operado por UniversaTV, que actúa a través de canales digitales, páginas comerciales y atención al cliente.\nContacto por e-mail: info@universatv.com\nWhatsApp Brasil: +55 47 99634-2377\nWhatsApp España: +34 617 59 84 21"
    },
    {
      title: "Qué datos podemos recopilar",
      content: "Podemos recopilar información proporcionada directamente por ti, como nombre, teléfono, e-mail y datos enviados mediante formularios o mensajes. También podemos recopilar información técnica de navegación, como IP, navegador, dispositivo y páginas visitadas."
    },
    {
      title: "Cómo recopilamos los datos",
      content: "Los datos pueden recopilarse cuando accedes al sitio, completas formularios, haces clic en botones de contacto, envías mensajes por WhatsApp, solicitas información comercial o interactúas con campañas y páginas de UniversaTV."
    },
    {
      title: "Para qué usamos los datos",
      content: "Utilizamos los datos para responder solicitudes, ofrecer atención, presentar información comercial, mejorar la experiencia en el sitio, analizar el rendimiento de campañas y mantener el funcionamiento de nuestros canales digitales."
    },
    {
      title: "Compartición de datos",
      content: "Los datos pueden ser tratados por herramientas y plataformas que apoyan nuestra operación, como servicios de alojamiento, comunicación, análisis y herramientas integradas. No vendemos datos personales a terceros."
    },
    {
      title: "Cookies y tecnologías similares",
      content: "Podemos utilizar cookies y tecnologías similares para mejorar la navegación, analizar accesos, medir el rendimiento de campañas y ofrecer una experiencia más eficiente en el sitio."
    },
    {
      title: "Seguridad y almacenamiento",
      content: "Adoptamos medidas razonables para proteger la información tratada en nuestros entornos digitales, aunque ningún sistema está completamente libre de riesgos."
    },
    {
      title: "Derechos del usuario",
      content: "Puedes solicitar información sobre los datos tratados, así como pedir su corrección, actualización o eliminación cuando corresponda, contactándonos a través del e-mail info@universatv.com."
    },
    {
      title: "Enlaces externos",
      content: "El sitio puede contener enlaces a plataformas externas, como WhatsApp y otros servicios. UniversaTV no es responsable de las políticas de privacidad de dichos terceros."
    },
    {
      title: "Cambios en esta política",
      content: "Esta Política de Privacidad puede actualizarse periódicamente para reflejar mejoras operativas, ajustes legales o cambios en el sitio web."
    },
    {
      title: "Contacto",
      content: "Para dudas sobre esta Política de Privacidad o sobre el tratamiento de datos, contacta con nosotros:\nE-mail: info@universatv.com\nWhatsApp Brasil: +55 47 99634-2377\nWhatsApp España: +34 617 59 84 21"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="es" />

      {/* Header Institucional */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-orange-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Política de Privacidad</h1>
          <p className="text-lg md:text-2xl text-white/50 leading-relaxed font-medium">
            Conoce cómo tratamos la información, los datos de contacto y las interacciones realizadas a través del sitio web y de nuestros canales de atención.
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

      <FloatingWhatsApp locale="es" />
      <Footer locale="es" />
    </div>
  );
}
