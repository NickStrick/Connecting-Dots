'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { useLanguage } from './LanguageContext';

type PageText = ReturnType<typeof buildPageText>;

const PageTextContext = createContext<PageText | null>(null);

function buildPageText(language: 'en' | 'es') {
  return {
    headline: {
      text:
        language === 'en'
          ? `We are a Chicago, IL nonprofit dedicated to elevating Latinx professionals through connection,
          leadership, and storytelling. Join us in building a future where Latinx voices thrive.`
          : `Somos una Chicago, IL organización sin fines de lucro dedicada a elevar a los profesionales Latinx a través de la conexión, el liderazgo y la narración de historias. Únase a nosotros para construir un futuro donde las voces Latinx prosperen.`,
    },
    section1: {
      title: (
        <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md mb-4">
          <span className="hero-highlight">JUNTOS</span> SOMOS
          <span className="hero-highlight"> MAS.</span>
        </h1>
      ),
      text:
        language !== 'en'
          ? `Empoderamos juntos a los profesionales Latinx a través de una comunidad auténtica, mentoría y narración de historias. Al compartir nuestras trayectorias y celebrar nuestra identidad cultural, fomentamos la visibilidad y el liderazgo en el mundo profesional. Juntos estamos construyendo un futuro donde las voces Latinx sean vistas, escuchadas y valoradas — convirtiendo la cultura y la conexión en un impacto duradero.`
          : `Let&apos;s Empower Latinx professionals together through authentic community, mentorship, and storytelling. By sharing our journeys and celebrating cultural identity, we foster visibility and leadership in the professional world. Together, we’re building a future where Latinx voices are seen, heard, and valued—turning culture and connection into lasting impact.`,
    },
    section2: {
      title: (
        <h1 className="hero-title text-white drop-shadow-md mb-4">
          {language === 'es' ? (
            <>Liderando con <span className="hero-highlight">Representación Auténtica</span></>
          ) : (
            <>Leading with <span className="hero-highlight">Authentic Representation</span></>
          )}
        </h1>
      ),
      text:
        language === 'es'
          ? 'Significa abrazar nuestra identidad cultural como una fortaleza, no como una barrera. Al presentarnos como nuestro ser completo, creamos espacio para que otros hagan lo mismo y transformamos cómo se ve el liderazgo en todas las industrias.'
          : 'means embracing our cultural identity as a strength, not a barrier. By showing up as our full selves, we create space for others to do the same—and shift what leadership looks like across industries.',
    },
    voices: {
      title: (
        <h1 className="hero-title text-white above">
          {language === 'es' ? (
            <>Voces <span className="hero-highlight">latinas</span> en liderazgo, tecnología, artes y negocios.</>
          ) : (
            <><span className="hero-highlight">Latinx voices</span> in leadership, technology, arts, and business.</>
          )}
        </h1>
      ),
      text:
        language === 'es'
          ? 'Somos una organización sin fines de lucro de networking profesional que conecta a profesionales latinos de diferentes industrias, ofreciendo espacios para mentoría, inspiración y construcción de comunidad.'
          : 'We’re a professional networking nonprofit that connects Latinx professionals across industries, offering spaces for mentorship, inspiration, and community-building.',
    },
    mission: {
      title:
        language === 'es' ? 'Nuestra Misión' : 'Our Mission',
      text:
        language === 'es'
          ? 'Elevar a los profesionales Latinx fomentando la comunidad, celebrando la identidad y creando oportunidades inclusivas para el liderazgo y el crecimiento.'
          : 'To elevate Latinx professionals by fostering community, celebrating identity, and creating inclusive opportunities for leadership and growth.',
    },
    training: {
      title: language === 'es' ? 'Charlas y Entrenamientos' : 'Speaking & Training', // (kept your key)
      text:
        language === 'es'
          ? 'Ofrecemos capacitaciones de networking y charlas que muestran cómo la conexión auténtica puede transformar carreras, equipos y comunidades. Ya sea a nivel personal o empresarial, ayudamos a construir entornos profesionales más fuertes e inclusivos.'
          : 'We offer engaging networking trainings and impactful speaking engagements to show how authentic connection can transform careers, teams, and communities. Whether you\'re an individual or a company, we can help build stronger, more inclusive professional environments.',
    },
    story: {
      title: language === 'es' ? 'Nuestra Historia' : 'Our Story',
      text:
        language === 'es'
          ? 'Creemos en el poder de la narración. Nuestro viaje nace de la comunidad, impulsado por la representación, y basado en la idea de que cada conexión puede inspirar. Nos apropiamos de nuestra historia y la compartimos con orgullo — porque nos pertenece a todos.'
          : 'We believe in the power of storytelling. Our journey is one rooted in community, driven by representation, and built on the idea that every connection has the power to inspire. We own our story and share it proudly — because it belongs to all of us.',
    },
    why: {
      title: language === 'es' ? 'Por Qué Comenzamos' : 'Why We Started',
      text:
        language === 'es'
          ? 'Comenzamos este trabajo porque vimos una brecha: falta de representación, acceso y mentoría para los profesionales Latinx. Nuestro objetivo es cambiar eso. Al crear espacios para la conexión significativa y el desarrollo del liderazgo, esperamos elevar a otros como deseamos haber sido elevados nosotros.'
          : 'We started this work because we saw a gap — a lack of representation, access, and mentorship for Latinx professionals. Our goal is to change that. By creating spaces for meaningful connection and leadership development, we hope to uplift others the way we wished to be uplifted ourselves.',
    },
    resources: {
      title: language === 'es' ? 'Recursos' : 'Resources',
      text:
        language === 'es' ? (
          <>
            Descubre guías, herramientas e inspiración gratuitas a través de nuestro <strong>boletín</strong>, <strong>canal de YouTube</strong>, <strong>entrevistas</strong> y <strong>apariciones en podcasts</strong>. También ofrecemos acceso a contenido como <strong>artículos</strong>, <strong>blogs</strong>, <strong>módulos de formación</strong> y <strong>cursos seleccionados</strong> para apoyar tu desarrollo.
          </>
        ) : (
          <>
            Discover free guides, tools, and inspiration through our <strong>partnerships</strong>, <strong>Instagram</strong>, <strong>Linkedin</strong>, and <strong>Facebook group</strong>. We also provide access to a variety of content like <strong>event recordings</strong>, and curated <strong>trainings</strong> to support your journey.
          </>
        ),
    },
    offers: {
      title: language === 'es' ? 'Lo Que Ofrecemos' : 'We Offer',
      text:
        language === 'es' ? (
          <>
            Nuestros programas incluyen <strong>talleres interactivos</strong> y <strong>eventos de networking</strong> diseñados para fomentar el desarrollo profesional y conversaciones significativas.
          </>
        ) : (
          <>
            Our programs include <strong>speeches, interactive trainings</strong> and <strong>networking events</strong> designed to foster professional development and meaningful conversations.
          </>
        ),
      text2: language === 'es' ? (
              <>
                Nos enorgullece apoyar a los líderes emergentes a través de iniciativas de <strong>mentoría</strong> como el <strong>Círculo de Liderazgo</strong> y nuestro <strong>Programa de Embajadores</strong> — empoderando a la próxima generación de profesionales Latinx.
              </>
            ) : (
              <>
                We are proud to support rising leaders through <strong>mentorship</strong> initiatives with <strong>one on one networking events</strong> and our <strong>latinx community partners</strong> — empowering the next generation of Latinx professionals.
              </>
            )
    },
    events: {
      title: language === 'es' ? 'Eventos y Programas' : 'Events & Programs',
      text:
        language === 'es'
          ? 'Explora sesiones próximas organizadas por nuestro equipo y colaboradores. Desde noches de networking hasta talleres de desarrollo profesional, creamos espacios para el crecimiento, la conexión y la comunidad.'
          : 'Explore upcoming sessions hosted by our team and partners. From networking nights to skill-building workshops, we create space for growth, connection, and community.',
    },
    stayUpdated: {
      title: language === 'es' ? 'Mantente Informado' : 'Stay Updated',
      text:
        language === 'es'
          ? 'Sigue nuestras redes sociales para conocer próximos eventos, recursos y historias de la comunidad.'
          : 'Follow our social media for upcoming events, resources, and stories from the community.',
    },
    getInTouch: {
      title: language === 'es' ? 'Contáctanos' : 'Get In Touch',
      text:
        language === 'es'
          ? '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.'
          : 'Want to collaborate, partner with us, or volunteer? DM or email our founders and we\'ll reach out.',
    },
    eventsFooter: {
      title:
        language === 'es' ? (
          <>
            <span className="hero-highlight">Conecta los puntos</span> para ver el panorama completo
          </>
        ) : (
          <>
            <span className="hero-highlight">Connect the dots</span> to the bigger picture
          </>
        ),
      text:
        language === 'es'
          ? 'Cada vez que asistes a un evento, te conviertes en mentor o compartes tu historia, agregas un punto más conectado hacia un futuro más brillante para los profesionales latinos. Construyamos ese futuro juntos.'
          : 'Every time you join an event, become a mentor, or share your story, that\'s one more dot connected toward a brighter future for Latinx professionals. Let\'s build that future together.',
    },
    testimonials: {
      title: language === 'es' ? 'Lo Que Dicen Nuestros Participantes' : 'What Our Participants Say',
      text: [
        language === 'es'
          ? '"Conocí a personas que cambiaron por completo mi trayectoria profesional. Los eventos son empoderadores y la gente realmente se preocupa." \n– Norma Ortiz'
          : '"I made connections that completely changed my professional journey. The events are empowering, and the people truly care." \n– Norma Ortiz',
        language === 'es'
          ? '"No es solo networking — es construir relaciones reales basadas en cultura y apoyo." \n– Nickolas Stricker'
          : '"It’s not just networking — it’s building real relationships rooted in culture and support." \n– Nickolas Stricker',
      ],
    },

  };
}

export function PageTextProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const pageText = useMemo(() => buildPageText(language), [language]);
  return <PageTextContext.Provider value={pageText}>{children}</PageTextContext.Provider>;
}

export function usePageText() {
  const ctx = useContext(PageTextContext);
  if (!ctx) throw new Error('usePageText must be used within a PageTextProvider');
  return ctx;
}
