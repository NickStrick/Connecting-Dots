'use client';
import Link from "next/link";
// import { useState, useEffect } from "react";
import Events from '../components/Events';

import Share from "../components/Share"
// import AdminModal from "../components/AdminModal";

import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

// type EventItem = {
//   date: string;
//   title: { en: string; es: string };
//   registerLink?: string; // Optional link for registration
//   featuring?: string[]; // Optional featuring information
//   description?: string;
// };


export default function EventsPage() {
  // const [eventList, setEvents] = useState<EventItem[]>([]);
  // const [rawJSON, setRawJSON] = useState(JSON.stringify({ events: eventList }));
  const { language } = useLanguage();

  //   useEffect(() => {
  //    async function fetchEvents() {
  //     try {
  //       const res = await fetch("https://softball-science-data.vercel.app/locker/6"); // <-- your endpoint here
  //       const json = await res.json();
  //       if (json.data && json.data[0]?.value) {
  //         const parsed = JSON.parse(json.data[0].value);
  //         setEvents(parsed.events || []);
  //         setRawJSON(json.data[0].value); // keep original JSON string
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch events:", err);
  //     }
  //   }

  //   fetchEvents();
  // }, []);

  const pageText = {
    contact: {
      title: language === 'es' ? 'Conéctate con Nosotros' : 'Connect With Us',
      text: language === 'es'
        ? '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.'
        : 'Want to collaborate, partner with us, or volunteer? DM or email our founders and we\'ll reach out.'
    },
    founders: {
      title: <>{language === 'es' ? 'Conoce a Nuestros' : 'Meet Our'}{" "}
              <span className="hero-highlight">
                {language === 'es' ? 'Fundadores' : 'Founders'}
              </span></>,
      text: language === 'es' ? 'Visionarios detrás del movimiento — dedicados a empoderar a los profesionales Latinx a través de la comunidad, la cultura y el liderazgo.'
        : 'Visionaries behind the movement—dedicated to empowering Latinx professionals through community, culture, and leadership.'
    },
    fernando:{
      name: 'Fernando Rayas',
      title: language === 'es' ? 'Cofundador, Líder Comunitario, Orador Público, Impulsado por la Misión, Especialista en Relaciones con el Consejo, Líder Experimentado sin Fines de Lucro'
        : 'Co-founder, Community Leader, Public Speaker, Mission driven, Council Relations Specialist, Experienced Non-Profit Leader',
    },
    jose: {
      name: 'Jose O. Ortiz',
      title: language === 'es' ? 'Cofundador, Organizador Comunitario, Innovador de Impacto Social, Desarrollo de Liderazgo, Comunicación Estratégica, Líder Emergente Latino de HACE'  
        : 'Co-founder, Community Organizer, Social Impact Innovator, Leadership Development, Strategic Communication, HACE Emerging Latino Leader'
    }
}
console.log(pageText);
  return (
    <>
      <div className="min-h-screen text-white">
        <Events events={[]}/>
        
        <section className="text-center py-12 px-6 bg-events-cta pb-[200px]">
          
          <div className="mt-10">
            <Link
              href="/"
              className="btn-inverted inline-block px-6 py-3 font-semibold rounded transition"
            >
              ← {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
            </Link>
          </div>
        </section>
      </div>
      <Share />
      <Footer />
      {/* <AdminModal 
        rawJSON={rawJSON} 
        setRawJSON={setRawJSON} 
        setEvents={setEvents} 
      /> */}
    </>
  );
}
