'use client';
import { motion } from "framer-motion";
import Link from "next/link";

import { useLanguage } from "../context/LanguageContext";

export default function Events() {
  const { language } = useLanguage();

  return (
    <section className="bg-events text-white px-6 py-24 space-y-20"  id="events">
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
            {language === 'es' ? 'Eventos y Programas' : 'Events & Programs'}
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            {language === 'es'
              ? 'Explora sesiones próximas organizadas por nuestro equipo y colaboradores. Desde noches de networking hasta talleres de desarrollo profesional, creamos espacios para el crecimiento, la conexión y la comunidad.'
              : 'Explore upcoming sessions hosted by our team and partners. From networking nights to skill-building workshops, we create space for growth, connection, and community.'}
          </p>
        </motion.div>

        {/* Upcoming Events List */}
        <motion.ul
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <li className="flex items-center gap-4">
            <span className="text-xl font-semibold">🎤 June 18:</span>
            <span>{language === 'es' ? 'Noche de Comedia Latinx' : 'Latinx Comedy Night'}</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-xl font-semibold">📚 August 20:</span>
            <span>{language === 'es' ? 'Panel y Networking' : 'Networking and Panel'}</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-xl font-semibold">🤝 TBD:</span>
            <span>{language === 'es' ? 'Colaboración con la Facultad de Derecho de Northwestern' : 'Northwestern Law Collaboration'}</span>
          </li>
        </motion.ul>

        {/* Contact & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-gradient-white-gray text-neutral-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">
              {language === 'es' ? 'Contáctanos' : 'Get In Touch'}
            </h3>
            <p className="mb-4 text-neutral-900">
              {language === 'es'
                ? '¿Quieres colaborar, organizar un evento o ser voluntario? Llena nuestro formulario de contacto y nos comunicaremos contigo.'
                : 'Want to collaborate, host an event, or volunteer? Fill out our contact form and we\'ll reach out.'}
            </p>
            <Link href="/contact" className="btn-gradient inline-block mt-2 text-neutral-900">
              {language === 'es' ? 'Formulario de Contacto →' : 'Contact Us →'}
            </Link>
          </motion.div>

          <motion.div
            className="bg-gradient-white-gray text-neutral-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">
              {language === 'es' ? 'Mantente Informado' : 'Stay Updated'}
            </h3>
            <p className="mb-4 text-neutral-900">
              {language === 'es'
                ? 'Suscríbete a nuestro boletín para recibir noticias sobre eventos, recursos e historias de la comunidad.'
                : 'Join our newsletter for upcoming events, resources, and stories from the community.'}
            </p>
            <form>
              <input
                type="email"
                placeholder={language === 'es' ? 'Tu correo electrónico' : 'Your email'}
                className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
              />
              <button type="submit" className="btn-gradient w-full">
                {language === 'es' ? 'Suscribirse' : 'Subscribe'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Ways to Get Involved */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            {language === 'es' ? 'Cómo Participar' : 'Ways to Get Involved'}
          </h3>
          <p>
            {language === 'es'
              ? 'Conviértete en mentor, organiza un evento, comparte tu historia o únete a nuestro equipo de voluntarios.'
              : 'Become a mentor, host an event, share your story, or join our volunteer team.'}
          </p>
          <Link href="/founders" className="btn-gradient inline-block mt-4">
            {language === 'es' ? 'Conoce al Equipo →' : 'Meet the Team →'}
          </Link>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="bg-purple-800 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            {language === 'es' ? 'Lo Que Dicen Nuestros Participantes' : 'What Our Participants Say'}
          </h3>
          <blockquote className="italic border-l-4 border-purple-400 pl-4 text-purple-100">
            {language === 'es'
              ? '"Conocí a personas que cambiaron por completo mi trayectoria profesional. Los eventos son empoderadores y la gente realmente se preocupa." – Miembro de la comunidad'
              : '"I made connections that completely changed my professional journey. The events are empowering, and the people truly care." – Community Member'}
          </blockquote>
          <blockquote className="italic border-l-4 border-purple-400 pl-4 text-purple-100">
            {language === 'es'
              ? '"No es solo networking — es construir relaciones reales basadas en cultura y apoyo." – Participante de taller'
              : '"It’s not just networking — it’s building real relationships rooted in culture and support." – Workshop Attendee'}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
