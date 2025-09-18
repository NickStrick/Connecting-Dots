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
          ? `¡Estamos aquí para empoderar y elevar a la comunidad profesional Latina! Únete a nosotros para conectar, crecer y transformarte a través de redes relacionales significativas, mentoría y desarrollo profesional. ¡Juntos Somos Más!`
          : `We're here to empower and uplift the Latinx professinal community! Join us to connect, grow, and be transformed through meaningful networking, mentorship, and professional development. ¡Juntos Somos Mas! `,
    },
    section2: {
      title: (
        <h1 className="hero-title text-white drop-shadow-md mb-4">
          {language === 'es' ? (
            <>¡Fomentando Grandeza <span className="hero-highlight">Juntos!</span></>
          ) : (
            <>Fostering Greatness <span className="hero-highlight">Together!</span></>
          )}
        </h1>
      ),
      text:
        language === 'es'
          ? 'Estamos comprometidos a crear un ambiente inclusivo donde personas de diversos orígenes y profesiones dentro de la comunidad latina y otras puedan reunirse para celebrar nuestra herencia compartida mientras resaltan los talentos, la experiencia y las perspectivas únicas que cada individuo aporta.'
          : 'We are committed to create an inclusive environment where individuals from various backgrounds and professions within the Latinx community and others can come together to celebrate our shared heritage while highlighting the unique talents, expertise, and perspectives each individual brings.',
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
        <p className="hero-subtitle text-purple-200 max-w-xl">{language === 'es'
          ? 'Elevar a los profesionales Latinx fomentando la comunidad, celebrando la identidad y creando oportunidades inclusivas para el liderazgo y el crecimiento.'
          : 'To elevate Latinx professionals by fostering community, celebrating identity, and creating inclusive opportunities for leadership and growth.'}</p>,
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
    extraImgSections:[{name:'', img:'', title:'', text:''}],
    extraSections: [
      // Example items — tweak or remove as needed
      {
        name: 'partners',
        title: language === 'es' ? (
          <>Recursos <strong>de Networking</strong></>
        ) : (
            <><strong>Networking</strong> Resources</>
        ),
        text:
          language === 'es' ? (
            <p className="text-lg">
              {`Fortalece tus conexiones y expande tu círculo profesional con nuestros recursos de networking seleccionados. 
              En esta sección, encontrarás guías prácticas, artículos y herramientas diseñadas para ayudarte a abordar el networking con confianza, ya sea conociendo gente en un evento, conectando en línea o cultivando relaciones profesionales a largo plazo.
              `}
            </p>
          ) : (
            <p className="text-lg">
              {`Build stronger connections and expand your professional circle with our curated networking resources. 
              In this section, you’ll find practical guides, articles, and tools designed to help you approach networking with confidence—whether you’re meeting people at an event, connecting online, or nurturing long-term professional relationships. 
              `}
            </p>
          ),
      },
      {
        name: 'sponsorship',
        title: language === 'es' ? (
          <></>
        ) : (
          <></>
        ),
        text:
          language === 'es' ? (
            < >
              <div className="above mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#events" className="btn-gradient">
            { `Únase a Nuestra Red`}
            
          </a>
          <a href="/founders" className="btn-gradient">
          { `Formulario de Contacto`}
            
          </a>
        </div>
            </>
          ) : (
            <>
              <div className="above mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#events" className="btn-gradient">
            {`Join Our Network` }
            
          </a>
          <a href="/founders" className="btn-inverted">
          {`Contact Us`}
            
          </a>
        </div>
            </>
          ),
      },
      // Add more objects here any time…
    ],
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
