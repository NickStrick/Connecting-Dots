import React from 'react';
import { motion } from "framer-motion";
import { usePageText } from '../context/PageContext';
import Image from "next/image";

// import aboutImg1 from "../../../public/handsSmall.jpg";
// import aboutImg2 from "../../../public/smallGroup.jpg";

export default function ExtraImgSections() {
  const { extraImgSections } = usePageText();

  if (!extraImgSections || extraImgSections.length === 0) return null;

  return (
    <>
      {extraImgSections.map((sec, i) =>{ 
        if (!sec.name) return null;
        const isOdd = i % 2 !== 0;
      return (
         <section key={sec.name} id={sec.name}  className={`bg-gradient-purple-black hero-section section-half-height flex flex-col ${isOdd?'md:flex-row-reverse':'md:flex-row'} items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8`}>

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
       {sec.title}
      </h1>
      <p className="hero-subtitle text-purple-200 max-w-xl">
       {sec.text}
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
            src={sec.img}
            alt="Connecting the Dots"
            className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
        />
    </motion.div>
  </section>
      )})}
    </>
  );
}
