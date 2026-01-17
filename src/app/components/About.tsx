'use client';
import { motion } from "framer-motion";
import { usePageText } from '../context/PageContext';
import { useLanguage } from '../context/LanguageContext';
import Image from "next/image";

// import aboutImg1 from "../../../public/3members.png";
import aboutImg2 from "../../../public/smallGroup.jpg";

export default function About() {
  const config = usePageText();
  const { language } = useLanguage();

  return (<>
  <section id="About"  className="bg-gradient-purple-black hero-section section-half-height flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    
  
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
       {config.HomePage.mission.title[language]}
      </h1>
       <ul className="offers-list">
          {config.HomePage.mission.text[language].split('\n').map((item: string, index: number) => (
           <li key={index}>{item}</li>
         ))}
       </ul>
    </motion.div>
    <motion.div className="w-full md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap"
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
      width={500}
      height={500}
        src={aboutImg2.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      />
    </motion.div>
  </section>
    </>
  );
}
