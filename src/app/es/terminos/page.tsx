"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function TerminosPage() {
  const sections = [
    {
      title: "Introducción",
      content: "Al acceder a este sitio web, aceptas los presentes Términos de Uso. Si no estás de acuerdo con ellos, te recomendamos no utilizar el sitio."
    },
    {
      title: "Objeto",
      content: "Este sitio tiene carácter informativo, institucional, comercial y de atención, con la finalidad de presentar contenidos, páginas, canales de contacto y soluciones relacionadas con la marca UniversaTV."
    },
    {
      title: "Uso del sitio",
      content: "Al utilizar este sitio, aceptas usar la información de forma lícita, no realizar actividades que perjudiquen el funcionamiento del sitio y no intentar acceder a áreas restringidas sin autorización."
    },
    {
      title: "Contenidos e información",
      content: "Buscamos mantener la información del sitio organizada, clara y actualizada, pero no garantizamos que todo el contenido esté siempre completo, disponible o libre de errores."
    },
    {
      title: "Atención y contacto",
      content: "El sitio puede dirigir al usuario a canales de atención, incluidos WhatsApp y formularios. El envío de mensajes no garantiza contratación, respuesta inmediata ni disponibilidad permanente de los canales."
    },
    {
      title: "Propiedad intelectual",
      content: "Los textos, marcas, logotipos, elementos visuales, diseño y demás contenidos del sitio pertenecen a UniversaTV o se utilizan con autorización, quedando prohibida su reproducción sin autorización previa."
    },
    {
      title: "Enlaces externos",
      content: "El sitio puede contener enlaces a plataformas de terceros. UniversaTV no se responsabiliza de contenidos, disponibilidad o prácticas de servicios externos."
    },
    {
      title: "Limitación de responsabilidad",
      content: "En la máxima medida permitida por la legislación aplicable, UniversaTV no se responsabiliza por indisponibilidades temporales del sitio, fallos técnicos externos, interrupciones de conexión, uso indebido por terceros o decisiones tomadas en base a la información aquí publicada."
    },
    {
      title: "Privacidad y datos",
      content: "El tratamiento de datos relacionado con el uso de este sitio está descrito en la Política de Privacidad, que debe leerse conjuntamente con estos Términos de Uso."
    },
    {
      title: "Cambios",
      content: "UniversaTV puede actualizar estos Términos de Uso en cualquier momento mediante la publicación de una nueva versión en esta página."
    },
    {
      title: "Contacto",
      content: "Para dudas sobre estos Términos de Uso, contacta con nosotros:\nE-mail: info@universatv.com\nWhatsApp Brasil: +55 47 99634-2377\nWhatsApp España: +34 617 59 84 21"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-brand/30">
      <Navbar locale="es" />

      {/* Header Institucional */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-orange-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Términos de Uso</h1>
          <p className="text-lg md:text-2xl text-white/50 leading-relaxed font-medium">
            Conoce las condiciones generales de uso del sitio web, de los contenidos y de los canales digitales de UniversaTV.
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
