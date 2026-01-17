'use client';

import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
// import Link from "next/link";

type PageText = ReturnType<typeof buildDefaultConfig>;

const PageTextContext = createContext<PageText | null>(null);

// Build default config for admin (JSON-serializable)
export function buildDefaultConfig() {
  return {
    headline: {
      text: {
        en: `We are a Chicago, IL nonprofit dedicated to elevating Latinx professionals through connection,
leadership, and storytelling. Join us in building a future where Latinx voices thrive.`,
        es: `Somos una organización sin fines de lucro de Chicago, IL dedicada a elevar a los profesionales Latinx a través de la conexión, el liderazgo y la narración de historias. Únase a nosotros para construir un futuro donde las voces Latinx prosperen.`,
      },
    },
    HomePage: {
      section1: {
        title: {
          en: "¡JUNTOS SOMOS MÁS!",
          es: "¡JUNTOS SOMOS MÁS!",
        },
        text: {
          en: `We're here to empower and uplift the Latinx professional community! Join us to connect, grow, and be transformed through meaningful networking, mentorship, and professional development. ¡Juntos Somos Más!`,
          es: `¡Estamos aquí para empoderar y elevar a la comunidad profesional Latina! Únete a nosotros para conectar, crecer y transformarte a través de redes relacionales significativas, mentoría y desarrollo profesional. ¡Juntos Somos Más!`,
        },
      },
      section2: {
        title: {
          en: "Fostering Greatness Together!",
          es: "¡Fomentando Grandeza Juntos!",
        },
        text: {
          en: "We are committed to creating an inclusive environment where individuals from various backgrounds and professions within the Latinx community and others can come together to celebrate our shared heritage while highlighting the unique talents, expertise, and perspectives each individual brings.",
          es: "Estamos comprometidos a crear un ambiente inclusivo donde personas de diversos orígenes y profesiones dentro de la comunidad latina y otras puedan reunirse para celebrar nuestra herencia compartida mientras resaltan los talentos, la experiencia y las perspectivas únicas que cada individuo aporta.",
        },
      },
      voices: {
        title: {
          en: "Latinx voices in leadership, technology, arts, and business.",
          es: "Voces latinas en liderazgo, tecnología, artes y negocios.",
        },
        text: {
          en: "",
          es: "",
        },
      },
      mission: {
        title: {
          en: "We Offer",
          es: "Ofrecemos",
        },
        text: {
          en: "Mastering the Art of Connection\nElevated Networking for Career Growth\nLevel-Up Mentorship\nCultivating the Next Wave\nBuilding an Inner Circle for Impact\nEnhancing skill capacity in community",
          es: "Sobresalir en el Arte de la Conexión\nRedes de Contactos Intencionales para el Crecimiento Profesional\nMentoría a un Nivel Superior\nCultivando la Próxima Generación\nCreando un Círculo Interno de Impacto\nIncrementando Destrezas Profesionales en Comunidad",
        },
      },
      testimonials: {
        title: {
          en: "What Our Participants Say",
          es: "Lo Que Dicen Nuestros Participantes",
        },
        text: {
          en: [
            '"I made connections that completely changed my professional journey. The events are empowering, and the people truly care." \n– Norma Ortiz, Registered Nurse',
            '"It\'s not just networking — it\'s building real relationships rooted in culture and support." \n– Nickolas Stricker, Founder at Stricker Digital',
          ],
          es: [
            '"Conocí a personas que cambiaron por completo mi trayectoria profesional. Los eventos son empoderadores y la gente realmente se preocupa." \n– Norma Ortiz, Enfermera Registrada',
            '"No es solo networking — es construir relaciones reales basadas en cultura y apoyo." \n– Nickolas Stricker, Fundador de Stricker Digital',
          ],
        },
      },
      extraImgSections: [{ name: '', img: '', title: '', text: '' }],
      extraSections: [
        {
          name: 'partners',
          title: {
            en: 'Networking Resources',
            es: 'Recursos de Networking',
          },
          text: {
            en: `Build stronger connections and expand your professional circle with our curated networking resources. 
In this section, you'll find practical guides, articles, and tools designed to help you approach networking with confidence—whether you're meeting people at an event, connecting online, or nurturing long-term professional relationships.`,
            es: `Fortalece tus conexiones y expande tu círculo profesional con nuestros recursos de networking seleccionados. 
En esta sección, encontrarás guías prácticas, artículos y herramientas diseñadas para ayudarte a abordar el networking con confianza, ya sea conociendo gente en un evento, conectando en línea o cultivando relaciones profesionales a largo plazo.`,
          },
        },
        {
          name: 'story',
          title: {
            en: 'Our Story',
            es: 'Nuestra Historia',
          },
          text: {
            en: `Connecting Dots for Latinx Professionals was created to meet a vital need in our community: accessible spaces where Latinx professionals can connect, learn, reflect, and grow — individually and collectively — to build our shared power and impact.`,
            es: `Connecting Dots for Latinx Professionals se creó para satisfacer una necesidad vital en nuestra comunidad: espacios accesibles donde los profesionales Latinx puedan conectarse, aprender, reflexionar y crecer, individual y colectivamente, para construir nuestro poder e impacto compartidos.`,
          },
        },
        {
          name: 'sponsorship',
          title: {
            en: '',
            es: '',
          },
          text: {
            en: '',
            es: '',
          },
          buttons: [
            {
            text: {
              en:'Join Our Network',
              es: 'Únase a Nuestra Red',
            },

            link: '/events',
            },
            {
            text: {
              en:'Contact Us',
              es: 'Formulario de Contacto',
            },

            link: '/contact',
            }
          ]
        },
      ],
    },
    TrainingPage: {
      training: {
        title: {
          en: 'Unlock Your and Your Team\'s Potential with Our Training Curriculum',
          es: 'Desbloquee SU potencial y el de su equipo con nuestro plan de estudios de capacitación',
        },
        text: {
          en: 'At Connecting Dots for Latinx Professionals, we believe that strong leaders, meaningful mentorship, and authentic connections are the keys to success. Our Training Curriculum is designed to help individuals and teams grow, thrive, and make a real impact.',
          es: 'En Connecting Dots for Latinx Professionals, creemos que los líderes fuertes, la mentoría significativa y las conexiones auténticas son la clave del éxito. Nuestro programa de capacitación está diseñado para ayudar a individuos y equipos a crecer, prosperar y generar un impacto real.',
        },
      },
      trainingLinks: {
        title: {
          en: 'Google Classroom (Coming Soon)',
          es: '',
        },
        text: {
          en: "Our Google Classroom course is in development. It\'s focused on professional development and networking.",
          es: '',
        },
        links: [
            {
            text: {
              en:'Check back later',
              es: 'Check back later',
            },

            link: '',
            },
          ]
      },
    },
    FellowshipPage: {
      section1: {
        title: {
          en: 'Our Fellow\'s',
          es: 'Desbloquee SU potencial y el de su equipo con nuestro plan de estudios de capacitación',
        },
        text: {
          en: 'This mentorship program brings together emerging Latinx professionals and mentors to build skills, strengthen networks, and turn potential into power. Through monthly group sessions and bi-weekly one-on-one mentorship meetings, fellows will connect, grow, and lead with purpose.',
          es: 'Este programa de mentoría reúne a profesionales Latinx emergentes y mentores para desarrollar habilidades, fortalecer redes y convertir el potencial en poder. A través de sesiones grupales mensuales y reuniones de mentoría individuales quincenales, los becarios se conectarán, crecerán y liderarán con propósito.',
        },
      },
      fellows: {people:[
        {
          name: "Marisol Barrera",
          title: "Fellowship member",
          description: "First-generation Latina focused on uplifting the Latinx community, amplifying marginalized voices, and creating impact through education, curriculum development, and community outreach.",
          avatarUrl: "",
           badges: ["Community Engagement", "Education ", "Curriculum Development"],
        },
        {
          name: "Adrian Ortega",
          title: "Fellowship member",
          description: "Bilingual marketing professional with a Master’s in Business Design Innovation and Sports Management, blending creativity with strategic execution across entertainment and community-driven brands.",
          avatarUrl: "",
           badges: ["Marketing Leader", "Content & Innovation ", "Sports Management"],
        },
        {
          name: "Monserrat Rizo ",
          title: "Fellowship member",
          description: "Monserrat (Monse) Rizo is a Midwest Programs Manager at the Hispanic Federation, a bilingual immigration advocate, and a first-generation UIC graduate with a background in policy, civic engagement, and Latinx community leadership.",
          avatarUrl: "",
           badges: ["Midwest Programs Manager", "Immigration Advocate ", "Change Maker"],
        },
        {
          name: "Ashton Ayala ",
          title: "Fellowship member",
          description: "My work bridges the gap between technical execution and organizational strategy—often acting as the point person between engineers, leadership, and vendors to move critical IT initiatives forward.",
          avatarUrl: "",
           badges: ["Integration ", "Cyber Sec Engineer ", "Curriculum Development"],
        },
      ],}
    },
    EventsPage: {
      events: {
        title: {
          en: 'Events & Programs',
          es: 'Eventos y Programas',
        },
        text: {
          en: 'Explore upcoming sessions hosted by our team and partners. From networking nights to skill-building workshops, we create space for growth, connection, and community.',
          es: 'Explora sesiones próximas organizadas por nuestro equipo y colaboradores. Desde noches de networking hasta talleres de desarrollo profesional, creamos espacios para el crecimiento, la conexión y la comunidad.',
        },
      },
      stayUpdated: {
        title: {
          en: 'Stay Updated',
          es: 'Mantente Informado',
        },
        text: {
          en: 'Follow our social media for upcoming events, resources, and stories from the community.',
          es: 'Sigue nuestras redes sociales para conocer próximos eventos, recursos y historias de la comunidad.',
        },
      },
      getInTouch: {
        title: {
          en: 'Connect With Us',
          es: 'Conéctate con Nosotros',
        },
        text: {
          en: "Want to collaborate, partner with us, or volunteer? DM or email our founders and we'll reach out.",
          es: '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.',
        },
      },
      eventsFooter: {
        title: {
          en: 'Connect the dots to the bigger picture',
          es: 'Conecta los puntos para formar la imagen más grande',
        },
        text: {
          en: 'In college, we\'re trained for our specific professions, but few of us are taught the value of connecting across industries. Building those connections expands our capacity and strengthens our collective power — simply put, ¡Juntos Somos Más!',
          es: 'En la universidad, nos capacitamos para nuestras profesiones específicas, pero a pocos se nos enseña el valor de conectar con otras industrias. Forjar esas conexiones amplía nuestra capacidad y fortalece nuestro poder colectivo; en pocas palabras, ¡Juntos Somos Más!',
        },
      },
    },
    FoundersPage: {
      contact: {
        title: {
          en: 'Connect With Us',
          es: 'Conéctate con Nosotros',
        },
        text: {
          en: "Want to collaborate, partner with us, or volunteer? DM or email our founders and we'll reach out.",
          es: '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.',
        },
      },
      founders: {
        title: {
          en: 'Meet Our',
          es: 'Conoce a Nuestros',
        },
        highlight: {
          en: 'Founders',
          es: 'Fundadores',
        },
        text: {
          en: 'Meet the visionaries redifining social impact and elevating Latinx professionals.',
          es: 'Conoce a los visionarios que están redifiniendo el impacto social y elevando a los profesionales Latinx.',
        },
      },
      fernando: {
        name: 'Fernando Rayas',
        title: {
          en: 'Co-founder - Social Impact Innovator',
          es: 'Cofundador - Innovador de Impacto Social',
        },
      },
      jose: {
        name: 'Jose O. Ortiz',
        title: {
          en: 'Co-founder - Social Impact Innovator',
          es: 'Cofundador - Innovador de Impacto Social',
        },
      },
    },
  };
}

export function usePageText() {
  const context = useContext(PageTextContext);
  if (!context) {
    throw new Error('usePageText must be used within a PageTextProvider');
  }
  return context;
}

export function PageTextProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const [config, setConfig] = useState<any>(buildDefaultConfig());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch('/api/admin/config?key=configs/jose-ortiz/pageContext.json');
        if (response.ok) {
          const data = await response.json();
          setConfig(data);
        } else {
          // Fallback to default config
          setConfig(buildDefaultConfig());
        }
      } catch (error) {
        console.error('Failed to load config:', error);
        // Fallback to default config
        setConfig(buildDefaultConfig());
      } finally {
        setLoading(false);
      }
    }
    loadConfig();
  }, []);

  return (
    <PageTextContext.Provider value={config}>
      {children}
    </PageTextContext.Provider>
  );
}
