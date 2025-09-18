'use client';
import Image from "next/image";

// import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// const InstagramEmbed = dynamic(() => import('./components/InstagramEmbed'), {
//   ssr: false,
// });
import CTAImage from "../../public/CDLargeer.png"; // Adjust the path as needed
import backgroundImage2 from "../../public/eventGroup.png"; // Adjust the path as needed
import backgroundImage3 from "../../public/awards.png"; // Adjust the path as needed

import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";
import Wave  from "./components/Wave";
import Share from "./components/Share"

import ExtraSections from "./components/ExtraSections";
import ExtraImgSections from "./components/ExtraImgSections";

import { useLanguage } from "./context/LanguageContext";
import { usePageText } from './context/PageContext';



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
   
  }, []);

  const { language } = useLanguage();
  const pageText = usePageText();
  
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <section      
      // className="hero-section bg-fixed"
      className="hero-section section bg-gradient-white text-gray-900"
      // style={{
      //   backgroundImage: `url(${backgroundImage.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Overlay tint for contrast */}
      {/* <div className="hero-overlay absolute inset-0 z-0" /> */}

      {/* Hero content */}
      <motion.div className="relative z-10 px-4 max-w-3xl mx-auto text-center "
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
        {/* <p className="hero-subtitle headline-subtitle mt-6 !text-gray-900">
          {pageText.headline.text}  
        </p> */}
        {/* <p className="hero-subtitle mt-6">Únase a nosotros en la construcción de un futuro donde prosperen las voces de Latinx.</p> */}
        <div className="above mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#events" className="btn-gradient">
            {language === 'en' ? `Join Our Network` : `Únase a Nuestra Red`}
            
          </a>
          <a href="/founders" className="btn-inverted">
          {language === 'en' ? `Contact Us` : `Contacta con nosotros`}
            
          </a>
        </div>
      </motion.div>
    </section>
    
      <section
        className="bg-gradient-black-purple relative p-20 flex items-center justify-center text-center px-2 md:px-6"
        
      ><Wave color="black" backgroundColor="transparent" height={160} selection={13} />
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
           {pageText.section1.title}  
          <p className="text-lg sm:text-xl  max-w-2xl mx-auto">
           {pageText.section1.text}  
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
     {pageText.section2.title}  
    <p className="hero-subtitle text-purple-200 max-w-xl">
     {pageText.section2.text}  
    </p>
  </motion.div>
</section>

      {/* <OfferAndResources /> */}
      <About/>
      <ExtraImgSections />
    <ExtraSections />
    <div className="relative"><Wave color="black" backgroundColor="transparent" height={160} selection={13} flip={true} /></div>
    

      <section
      className="hero-section bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay absolute inset-0 z-0" />

      <motion.div className="relative z-10 px-4 max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
         {pageText.voices.title}  
        <p className="hero-subtitle mt-6">
            {pageText.voices.text}  
        </p>
      </motion.div>
    </section>
    <div className="relative">
      <Wave color="black" backgroundColor="transparent" height={160} selection={12} />
    </div>
      <Events events={eventList}/>
      <Share />
      
      <Footer />
      <AdminModal 
  rawJSON={rawJSON} 
  setRawJSON={setRawJSON} 
  setEvents={setEvents} 
/>
    </main>
  );
}

