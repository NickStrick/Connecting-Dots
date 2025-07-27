'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="About" className="bg-gradient-purple-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Speaking & Training */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-4">
            {language === 'es' ? 'Charlas y Entrenamientos' : 'Speaking & Training'}
          </h2>
          <p className="text-lg">
            {language === 'es'
              ? 'Ofrecemos capacitaciones de networking y charlas que muestran cómo la conexión auténtica puede transformar carreras, equipos y comunidades. Ya sea a nivel personal o empresarial, ayudamos a construir entornos profesionales más fuertes e inclusivos.'
              : 'We offer engaging networking trainings and impactful speaking engagements to show how authentic connection can transform careers, teams, and communities. Whether you\'re an individual or a company, we can help build stronger, more inclusive professional environments.'}
          </p>
        </motion.div>

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
            {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
          </h2>
          <p className="text-lg">
            {language === 'es'
              ? 'Creemos en el poder de la narración. Nuestro viaje nace de la comunidad, impulsado por la representación, y basado en la idea de que cada conexión puede inspirar. Nos apropiamos de nuestra historia y la compartimos con orgullo — porque nos pertenece a todos.'
              : 'We believe in the power of storytelling. Our journey is one rooted in community, driven by representation, and built on the idea that every connection has the power to inspire. We own our story and share it proudly — because it belongs to all of us.'}
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
            {language === 'es' ? 'Por Qué Comenzamos' : 'Why We Started'}
          </h2>
          <p className="text-lg">
            {language === 'es'
              ? 'Comenzamos este trabajo porque vimos una brecha: falta de representación, acceso y mentoría para los profesionales Latinx. Nuestro objetivo es cambiar eso. Al crear espacios para la conexión significativa y el desarrollo del liderazgo, esperamos elevar a otros como deseamos haber sido elevados nosotros.'
              : 'We started this work because we saw a gap — a lack of representation, access, and mentorship for Latinx professionals. Our goal is to change that. By creating spaces for meaningful connection and leadership development, we hope to uplift others the way we wished to be uplifted ourselves.'}
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-4">
            {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
          </h2>
          <p className="text-lg">
            {language === 'es'
              ? 'Elevar a los profesionales Latinx fomentando la comunidad, celebrando la identidad y creando oportunidades inclusivas para el liderazgo y el crecimiento.'
              : 'To elevate Latinx professionals by fostering community, celebrating identity, and creating inclusive opportunities for leadership and growth.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
