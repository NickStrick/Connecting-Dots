'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { usePageText } from '../context/PageContext';
import Image from "next/image";

import aboutImg1 from "../../../public/handsSmall.jpg";
import aboutImg2 from "../../../public/smallGroup.jpg";

export default function About() {
  const { language } = useLanguage();
  const  pageText  = usePageText();

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
       {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
      </h1>
      <p className="hero-subtitle text-purple-200 max-w-xl">
       {pageText.mission.text}
          </p>
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
        src={aboutImg1.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      />
    </motion.div>
  </section>
  <section className="bg-gradient-purple-black hero-section section-half-height flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
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
       {pageText.training.title}
      </h1>
      <p className="hero-subtitle text-purple-200 max-w-xl">
        {pageText.training.text}
        </p>
    </motion.div>
    
  </section>
    <section className=" bg-gradient-black-dark text-white px-6 py-20">
      <div className="max-w-5xl mx-auto  flex flex-col items-center justify-between gap-12 md:flex-row">


        {/* Our Story */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-4">
            {pageText.story.title}
          </h2>
          <p className="text-lg">
            {pageText.story.text}  
          </p>
        </motion.div>

        {/* Why We Started */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-4">
            {pageText.why.title}
          </h2>
          <p className="text-lg">
            {pageText.why.text}
          </p>
        </motion.div>


      </div>
    </section>
    </>
  );
}
