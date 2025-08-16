'use client';
import Image from "next/image";

// import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// const InstagramEmbed = dynamic(() => import('./components/InstagramEmbed'), {
//   ssr: false,
// });
import CTAImage from "../../public/CDLargeTranswhitewhole2.png"; // Adjust the path as needed
import backgroundImage from "../../public/leaderGroup.jpg"; // Adjust the path as needed
import backgroundImage2 from "../../public/eventGroup.png"; // Adjust the path as needed
import backgroundImage3 from "../../public/3members.png"; // Adjust the path as needed

import OfferAndResources from "./components/OfferAndResources";
import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";

import { useLanguage } from "./context/LanguageContext";

type EventItem = {
  date: string;
  title: { en: string; es: string };
  registerLink?: string; // Optional link for registration
  featuring?: string[]; // Optional featuring information
  description?: string;
};


export default function Home2() {
  const [eventList, setEvents] = useState<EventItem[]>([]);
  const [rawJSON, setRawJSON] = useState(JSON.stringify({ events: eventList }));

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("https://softball-science-data.vercel.app/locker/6"); // <-- your endpoint here
        const json = await res.json();
        if (json.data && json.data[0]?.value) {
          const parsed = JSON.parse(json.data[0].value);
          setEvents(parsed.events || []);
          setRawJSON(json.data[0].value); // keep original JSON string
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    }

    fetchEvents();
  }, []);

  const { language } = useLanguage();
  const pageText = {
  headline:{
    text: language === 'en' 
           ? `We are a Chicago, IL nonprofit dedicated to elevating Latinx professionals through connection,
          leadership, and storytelling. Join us in building a future where Latinx voices thrive.` 
           : `Somos una Chicago, IL organización sin fines de lucro dedicada a elevar a los profesionales Latinx a través de la conexión, el liderazgo y la narración de historias. Únase a nosotros para construir un futuro donde las voces Latinx prosperen.` 
  
          },
    section1:{
      title: <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md mb-4">
            <span className="hero-highlight">JUNTOS</span> SOMOS
          <span className="hero-highlight"> MAS.</span>
          </h1>,
      text: language !== 'en'   
          ?`Empoderamos juntos a los profesionales Latinx a través de una comunidad auténtica, mentoría y narración de historias. Al compartir nuestras trayectorias y celebrar nuestra identidad cultural, fomentamos la visibilidad y el liderazgo en el mundo profesional. Juntos estamos construyendo un futuro donde las voces Latinx sean vistas, escuchadas y valoradas — convirtiendo la cultura y la conexión en un impacto duradero.`
            :`Let&apos;s Empower Latinx professionals together through authentic community, mentorship, and storytelling. By sharing our journeys and celebrating cultural identity, we foster visibility and leadership in the professional world. Together, we’re building a future where Latinx voices are seen, heard, and valued—turning culture and connection into lasting impact.`
            

    },
    section2:{
      title: <h1 className="hero-title text-white drop-shadow-md mb-4">
     {language === 'es' 
      ? <>Liderando con <span className="hero-highlight">Representación Auténtica</span></>
      : <>Leading with <span className="hero-highlight">Authentic Representation</span></>
    }
    </h1>,
      text: language === 'es'
      ? 'Significa abrazar nuestra identidad cultural como una fortaleza, no como una barrera. Al presentarnos como nuestro ser completo, creamos espacio para que otros hagan lo mismo y transformamos cómo se ve el liderazgo en todas las industrias.'
      : 'means embracing our cultural identity as a strength, not a barrier. By showing up as our full selves, we create space for others to do the same—and shift what leadership looks like across industries.'
    },
    voices:{
      title:<h1 className="hero-title text-white above">
           {language === 'es'
      ? <>Voces <span className="hero-highlight">latinas</span> en liderazgo, tecnología, artes y negocios.</>
      : <><span className="hero-highlight">Latinx voices</span> in leadership, technology, arts, and business.</>
    }
        </h1>,
      text:language === 'es'
      ? 'Somos una organización sin fines de lucro de networking profesional que conecta a profesionales latinos de diferentes industrias, ofreciendo espacios para mentoría, inspiración y construcción de comunidad.'
      : 'We’re a professional networking nonprofit that connects Latinx professionals across industries, offering spaces for mentorship, inspiration, and community-building.'
  }

}
console.log(pageText);
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <section
      className="hero-section bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* Hero content */}
      <motion.div className="relative z-10 px-4 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1.2, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}>
        {/* <h1 className="hero-title text-white above">
          CONNECTING DOTS 
          <span className="hero-highlight hero-small-txt"> for Latinx Professionals</span>
        </h1> 
        {language === 'en' ? `` : ``}
        */}
        <Image src={CTAImage} alt="LinkedIn" className="w-600 h-600 transition-all duration-300 ease-in-out" />
        <p className="hero-subtitle mt-6">
          
           {language === 'en' 
           ? `We are a Chicago, IL nonprofit dedicated to elevating Latinx professionals through connection,
          leadership, and storytelling. Join us in building a future where Latinx voices thrive.` 
           : `Somos una Chicago, IL organización sin fines de lucro dedicada a elevar a los profesionales Latinx a través de la conexión, el liderazgo y la narración de historias. Únase a nosotros para construir un futuro donde las voces Latinx prosperen.`}
        </p>
        {/* <p className="hero-subtitle mt-6">Únase a nosotros en la construcción de un futuro donde prosperen las voces de Latinx.</p> */}
        <div className="above mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#events" className="btn-gradient">
            {language === 'en' ? `Join Our Network` : `Únase a Nuestra Red`}
            
          </a>
          <a href="/founders" className="btn-gradient">
          {language === 'en' ? `Learn More` : `Más Información`}
            
          </a>
        </div>
      </motion.div>
    </section>
      <section
        className="bg-gradient-black-purple overflow-hidden relative p-20 flex items-center justify-center text-center px-2 md:px-6"
        
      >
         {/* <InstagramEmbed postUrl="https://www.instagram.com/reel/DKYPVsSgp61/?utm_source=ig_embed&amp;utm_campaign=loading" /> */}
        <div className="absolute inset-0   z-0" />
        <motion.div className="z-10 px-4 sm:px-10" 
          initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md mb-4">
            <span className="hero-highlight">JUNTOS</span> SOMOS
          <span className="hero-highlight"> MAS.</span>
          </h1>
          <p className="text-lg sm:text-xl  max-w-2xl mx-auto">
          {language !== 'en'   
          ?`Empoderamos juntos a los profesionales Latinx a través de una comunidad auténtica, mentoría y narración de historias. Al compartir nuestras trayectorias y celebrar nuestra identidad cultural, fomentamos la visibilidad y el liderazgo en el mundo profesional. Juntos estamos construyendo un futuro donde las voces Latinx sean vistas, escuchadas y valoradas — convirtiendo la cultura y la conexión en un impacto duradero.`
            :`Let&apos;s Empower Latinx professionals together through authentic community, mentorship, and storytelling. By sharing our journeys and celebrating cultural identity, we foster visibility and leadership in the professional world. Together, we’re building a future where Latinx voices are seen, heard, and valued—turning culture and connection into lasting impact.`
            }
          </p>
        </motion.div>
      </section>

      <section className="bg-gradient-purple-black hero-section section-half-height flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
  {/* Left: Image */}
  <motion.div className="w-full md:w-1/2 flex justify-center flex-row flex-nowrap"
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0 },
      }}>
    <Image
    priority={true}
    width={700}
    height={700}
      src={backgroundImage3.src}
      alt="Connecting the Dots"
      className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
    />
  </motion.div>

  {/* Right: Text */}
  <motion.div className="w-full md:w-1/2 relative z-10"
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
    <h1 className="hero-title text-white drop-shadow-md mb-4">
     {language === 'es' 
      ? <>Liderando con <span className="hero-highlight">Representación Auténtica</span></>
      : <>Leading with <span className="hero-highlight">Authentic Representation</span></>
    }
    </h1>
    <p className="hero-subtitle text-purple-200 max-w-xl">
    {language === 'es'
      ? 'Significa abrazar nuestra identidad cultural como una fortaleza, no como una barrera. Al presentarnos como nuestro ser completo, creamos espacio para que otros hagan lo mismo y transformamos cómo se ve el liderazgo en todas las industrias.'
      : 'means embracing our cultural identity as a strength, not a barrier. By showing up as our full selves, we create space for others to do the same—and shift what leadership looks like across industries.'
    }
    </p>
  </motion.div>
</section>

      <OfferAndResources />
      <About />
      <section
      className="hero-section bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* Hero content */}
      <motion.div className="relative z-10 px-4 max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
        <h1 className="hero-title text-white above">
           {language === 'es'
      ? <>Voces <span className="hero-highlight">latinas</span> en liderazgo, tecnología, artes y negocios.</>
      : <><span className="hero-highlight">Latinx voices</span> in leadership, technology, arts, and business.</>
    }
        </h1>
        <p className="hero-subtitle mt-6">
           {language === 'es'
      ? 'Somos una organización sin fines de lucro de networking profesional que conecta a profesionales latinos de diferentes industrias, ofreciendo espacios para mentoría, inspiración y construcción de comunidad.'
      : 'We’re a professional networking nonprofit that connects Latinx professionals across industries, offering spaces for mentorship, inspiration, and community-building.'
    }
        </p>
      </motion.div>
    </section>
      <Events events={eventList}/>
      <Footer />
      <AdminModal 
  rawJSON={rawJSON} 
  setRawJSON={setRawJSON} 
  setEvents={setEvents} 
/>
    </main>
  );
}

