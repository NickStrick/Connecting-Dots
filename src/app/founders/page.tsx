'use client';
import Link from "next/link";
import Image from "next/image";

import joseImage from "../../../public/founders/omar.jpg";
import fernandoImage from "../../../public/founders/fernando.jpg";
import instaImg from "../../../public/Instagram.png";
import LIImg from "../../../public/linkedin.png";

import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function FoundersPage() {
  const { language } = useLanguage();

  return (
    <>
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="bg-gradient-black-dark">
          <section className="py-20 px-6 sm:px-16 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold hero-title text-white mb-6">
              {language === 'es' ? 'Conoce a Nuestros' : 'Meet Our'}{" "}
              <span className="hero-highlight">
                {language === 'es' ? 'Fundadores' : 'Founders'}
              </span>
            </h1>
            <p className="hero-subtitle text-purple-200 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Visionarios detrás del movimiento — dedicados a empoderar a los profesionales Latinx a través de la comunidad, la cultura y el liderazgo.'
                : 'Visionaries behind the movement—dedicated to empowering Latinx professionals through community, culture, and leadership.'}
            </p>
          </section>

          {/* Founders Section */}
          <section className="bg-transparent max-w-5xl mx-auto px-2 sm:px-10 py-12 grid md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="text-center md:text-left">
              <Image
                src={joseImage}
                alt="Jose O. Ortiz"
                className="rounded-full aspect-square shadow-lg mx-auto md:mx-0 mb-4 md:max-h-[400px] md:max-w-[400px] max-h-[280px] max-w-[280px] object-cover"
              />
              <h2 className="text-2xl sm:text-3xl font-semibold text-highlight mb-2">
                Jose O. Ortiz
                <a
                  href="https://www.linkedin.com/in/jose-o-ortiz-msc-420670135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline person-social-link ml-2"
                >
                  <Image
                    src={LIImg}
                    alt="LinkedIn"
                    className="w-[30px] h-[30px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </a>
              </h2>
              <p className="text-purple-200 text-lg">
                {language === 'es'
                  ? 'Cofundador, Organizador Comunitario, Innovador de Impacto Social, Desarrollo de Liderazgo, Comunicación Estratégica, Líder Emergente Latino de HACE'
                  : 'Co-founder, Community Organizer, Social Impact Innovator, Leadership Development, Strategic Communication, HACE Emerging Latino Leader'}
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center md:text-left">
              <Image
                src={fernandoImage}
                alt="Fernando Rayas"
                className="rounded-full aspect-square shadow-lg mx-auto md:mx-0 mb-4 md:max-h-[400px] md:max-w-[400px] max-h-[280px] max-w-[280px] object-cover"
              />
              <h2 className="text-2xl sm:text-3xl font-semibold text-highlight mb-2">
                Fernando Rayas
                <a
                  href="https://www.linkedin.com/in/fernando-rayas-357aa210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline person-social-link ml-2"
                >
                  <Image
                    src={LIImg}
                    alt="LinkedIn"
                    className="w-[30px] h-[30px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </a>
              </h2>
              <p className="text-purple-200 text-lg">
                {language === 'es'
                  ? 'Cofundador, Líder Comunitario, Orador Público, Impulsado por la Misión, Especialista en Relaciones con el Consejo, Líder Experimentado sin Fines de Lucro'
                  : 'Co-founder, Community Leader, Public Speaker, Mission driven, Council Relations Specialist, Experienced Non-Profit Leader'}
              </p>
            </div>
          </section>
        </div>

        {/* Contact / Social Section */}
        <section className="text-center py-12 px-6 bg-events">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === 'es' ? 'Conéctate con Nosotros' : 'Connect With Us'}
          </h2>
          <ul className="text-lg flex justify-center items-center">
            <li className="p-4">
              <a
                href="https://www.linkedin.com/company/connecting-dots-for-latinx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                <Image
                  src={LIImg}
                  alt="LinkedIn"
                  className="w-20 h-20 active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="p-4">
              <a
                href="https://www.instagram.com/connectingdotsforlatinx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                <Image
                  src={instaImg}
                  alt="Instagram"
                  className="w-20 h-20 active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
          </ul>

          <div className="mt-10">
            <Link
              href="/"
              className="btn-gradient inline-block px-6 py-3 font-semibold rounded transition"
            >
              ← {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
