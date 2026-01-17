'use client';
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import { usePageText } from '../context/PageContext';





export default function Events() {
  const { language } = useLanguage();
  const config = usePageText();


  return (
    <section className="bg-events text-white px-6 py-24 space-y-20 pt-[150px]"  id="events">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl font-bold text-purple-300 text-center mb-4">
            {config.TrainingPage.training.title[language]} 
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            {config.TrainingPage.training.text[language]}   
          </p>
        </motion.div>

        {/* Contact & Newsletter */}
        <div id="newsletter" className="grid grid-cols-1 md:grid-cols-1 gap-12">
          
          <motion.div
            className="w-fit max-w-[600px] mx-auto bg-gradient-white-gray text-neutral-900 p-6 rounded-lg shadow-lg flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">
              {config.TrainingPage.trainingLinks.title[language]}  
            </h3>
            <p className="mb-4 text-neutral-900">
              {config.TrainingPage.trainingLinks.text[language]}  
            </p>
            {config.TrainingPage.trainingLinks.links.map((l)=>{
              return l
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
