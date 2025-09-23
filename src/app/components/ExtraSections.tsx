import React from 'react';
import { motion } from "framer-motion";
import { usePageText } from '../context/PageContext';
// import Image from "next/image";

// import aboutImg1 from "../../../public/handsSmall.jpg";
// import aboutImg2 from "../../../public/smallGroup.jpg";

export default function ExtraSections() {
  const { extraSections } = usePageText();

  if (!extraSections || extraSections.length === 0) return null;

  return (
    <section className=" bg-gradient-black-dark text-white px-6 py-20">
      <div className="max-w-5xl mx-auto  flex flex-col items-center justify-between gap-12 md:flex-row flex-wrap">
      {extraSections.map((sec) => (
         <motion.div
         className='min-w-[20%] w-[47%]'
         key={sec.name}
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
            {sec.title}
          </h2>
            {sec.text}  
        </motion.div>
      ))}
      </div>
    </section>
  );
}
