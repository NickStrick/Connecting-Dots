'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import Link from "next/link";

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
          <span className="hero-highlight">¡JUNTOS</span> SOMOS
          <span className="hero-highlight"> MAS!</span>
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
          ? ''
          : '',
    },
    mission: {
      title:
        language === 'es' ? 'Ofrecemos' : 'We Offer',
      text:
          <ul className="offers-list">
            <li>
            {language === 'es'
              ? 'Sobresalir en el Arte de la Conexión'
              : 'Mastering the Art of Connection'}
            </li> 
            <li>
            {language === 'es'
              ? 'Redes de Contactos Intencionales para el Crecimiento Profesional'
              : 'Elevated Networking for Career Growth'}
            </li> 
            <li>
            {language === 'es'
              ? 'Mentoría a un Nivel Superior'
              : 'Level-Up Mentorship'}
            </li> 
            <li>
            {language === 'es'
              ? 'Cultivando la Próxima Generacion '
              : 'Cultivating the Next Wave'}
            </li> 
            <li>
            {language === 'es'
              ? 'Creando un Círculo Interno de Impacto '
              : 'Building an Inner Circle for Impact'}
            </li> 
            <li>
            {language === 'es'
              ? 'Incrementado Destrezas Profesionales en Comunidad '
              : 'Enhancing skill capacity en Comunidad'}
            </li> 
         </ul>,
    },
    training: {
      title: language === 'es' ? 'Desbloquee SU potencial y el de su equipo con nuestro plan de estudios de capacitación' : 'Unlock YOUR and Your Team’s Potential with Our Training Curriculuman', // (kept your key)
      text:
        language === 'es'
          ? 'En Connecting Dots for Latinx Professionals, creemos que los líderes fuertes, la mentoría significativa y las conexiones auténticas son la clave del éxito. Nuestro programa de capacitación está diseñado para ayudar a individuos y equipos a crecer, prosperar y generar un impacto real.'
          : 'At Connecting Dots for Latinx Professionals, we believe that strong leaders, meaningful mentorship, and authentic connections are the keys to success. Our Training Curriculum is designed to help individuals and teams grow, thrive, and make a real impact.',
    },
    trainingLinks: {
      title: language === 'es' ? '' : 'Google Classroom (Comming Soon)', 
      text:
        language === 'es'
          ? ''
          : 'Our google classroom course is in development. It\'s focused around Professional Development and Networking.',
      links:[
        (<Link key="checkback" href={'#'} className="btn-inverted inline-block mt-auto text-neutral-900 w-full text-center">
              {language === 'es' ? '' : 'Check back later'}
            </Link>)
      ]
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
      title: language === 'es' ? 'Conéctate con Nosotros' : 'Connect With Us',
      text:
        language === 'es'
          ? '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.'
          : 'Want to collaborate, partner with us, or volunteer? DM or email our founders and we\'ll reach out.',
    },
    eventsFooter: {
      title:
        language === 'es' ? (
          <>
            <span className="hero-highlight">Conecta los puntos</span> para formar la imagen más grande
          </>
        ) : (
          <>
            <span className="hero-highlight">Connect the dots</span> to the bigger picture
          </>
        ),
      text:
        language === 'es'
          ? 'En la universidad, nos capacitamos para nuestras profesiones específicas, pero a pocos se nos enseña el valor de conectar con otras industrias. Forjar esas conexiones amplía nuestra capacidad y fortalece nuestro poder colectivo; en pocas palabras, ¡Juntos Somos Más!'
          : 'In college, we’re trained for our specific professions, but few of us are taught the value of connecting across industries. Building those connections expands our capacity and strengthens our collective power — simply put, ¡Juntos Somos Más! ',
    },
    testimonials: {
      title: language === 'es' ? 'Lo Que Dicen Nuestros Participantes' : 'What Our Participants Say',
      text: [
        language === 'es'
          ? '"Conocí a personas que cambiaron por completo mi trayectoria profesional. Los eventos son empoderadores y la gente realmente se preocupa." \n– Norma Ortiz, Enfermera Registrada'
          : '"I made connections that completely changed my professional journey. The events are empowering, and the people truly care." \n– Norma Ortiz, Registered Nurse',
        language === 'es'
          ? '"No es solo networking — es construir relaciones reales basadas en cultura y apoyo." \n– Nickolas Stricker, Fundador en Stricker Digital'
          : '"It’s not just networking — it’s building real relationships rooted in culture and support." \n– Nickolas Stricker, Founder at Stricker Digital',
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
        name: 'story',
        title: language === 'es' ? (
          <>Nuestra <strong>Historia</strong></>
        ) : (
            <><strong>Our</strong> Story</>
        ),
        text:
          language === 'es' ? (
            <p className="text-lg">
              {` Connecting Dots for Latinx Professionals se creó para satisfacer una necesidad vital en nuestra comunidad: espacios accesibles donde los profesionales Latinx puedan conectarse, aprender, reflexionar y crecer, individual y colectivamente, para construir nuestro poder e impacto compartidos.
              `}
            </p>
          ) : (
            <p className="text-lg">
              {`Connecting Dots for Latinx Professionals was created to meet a vital need in our community: accessible spaces where Latinx professionals can connect, learn, reflect, and grow — individually and collectively — to build our shared power and impact. 
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
          <a href="/events" className="btn-gradient">
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
          <a href="/events" className="btn-gradient">
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
