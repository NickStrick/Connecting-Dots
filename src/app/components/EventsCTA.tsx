'use client';
import { motion } from "framer-motion";

// import { useLanguage } from "../context/LanguageContext";
import { usePageText } from '../context/PageContext';




export default function Events() {
  // const { language } = useLanguage();
  const pageText = usePageText();


  return (
    <section className="bg-events-cta text-white px-6 py-24 space-y-20 pt-[150px]"  id="events">
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
            {pageText.events.title} 
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            {pageText.events.text}   
          </p>
        </motion.div>

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
            <div className="above mt-8 flex flex-wrap gap-4 justify-center">
          <a href="/events" className="btn-gradient">
            {`View Our Events` }
            
          </a>
          {/* <a href="/founders" className="btn-inverted">
          {`Contact Us`}
            
          </a> */}
        </div>
        </motion.div>


        {/* Testimonials */}
        <motion.div
          className=" p-8 rounded-lg shadow-lg space-y-6 card-colored"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-purple-300">
            {pageText.testimonials.title}  
          </h3>
          <blockquote className="italic border-l-4 border-purple-400 pl-4 text-purple-100">
            {pageText.testimonials.text[0]}  
          </blockquote>
          <blockquote className="italic border-l-4 border-purple-400 pl-4 text-purple-100">
            {pageText.testimonials.text[1]}  
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
