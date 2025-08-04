'use client';
import Link from "next/link";
import Image from "next/image";

import joseImage from "../../../public/founders/omar.jpg";
import fernandoImage from "../../../public/founders/fernando.jpg";
import instaImg from "../../../public/Instagram.png";
import LIImg from "../../../public/linkedin.png";
import facebookImg from "../../../public/facebook.png";

import locImg from "../../../public/location.png";

import foundersImg1 from "../../../public/founders/fernando&omar.png";
import foundersImg2 from "../../../public/founders/omar&fernando2.jpg";
import foundersImg3 from "../../../public/founders/fernando&omar3.jpg";

import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function FoundersPage() {
  const { language } = useLanguage();

  return (
    <>
      <div className="min-h-screen text-white">
        <section className="text-center py-12 px-6 bg-connect">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === 'es' ? 'Conéctate con Nosotros' : 'Connect With Us'}
          </h2>
          <p className="mb-4">
              {language === 'es'
    ? '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.'
    : 'Want to collaborate, partner with us, or volunteer?  \nDM or email our founders and we\'ll reach out.'}

            </p>
          <ul className="text-lg flex justify-center items-center flex-row flex-wrap">
            <li className="p-4">
              <a
                href="https://www.instagram.com/connectingdotsforlatinx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                <Image
                  src={instaImg}
                  height={70}
                  width={70}
                  alt="Instagram"
                  className="w-[60px] h-[60px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="p-4">
              <a
                href="https://www.facebook.com/people/Connecting-Dots-for-Latinx-Professionals/61577340749137/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                <Image
                  src={facebookImg}
                  height={70}
                  width={70}
                  alt="Facebook"
                  className="w-[60px] h-[60px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="p-4">
              <a
                href="https://www.linkedin.com/company/connecting-dots-for-latinx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                <Image
                  src={LIImg}
                  height={70}
                  width={70}
                  alt="LinkedIn"
                  className="w-[60px] h-[60px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            
          </ul>
          <div className="mt-10">
             
            <h3 className="text-1x1 md:text-2xl  text-wrap font-bold text-white mb-6 email-connect max-w-[100%]" >
              <span> </span> <span className="break-words text-1x1 md:text-2xl font-bold max-w-[100%] text-wrap text-white mb-6 hero-underline">connectingdotsforlatinx@gmail.com</span> 
            </h3>
            <h3 className="text-1x1 md:text-2xl  text-wrap font-bold text-white mb-6 email-connect max-w-[100%]" >
              
                <Image
                  src={locImg}
                  height={20}
                  width={20}
                  alt="location"
                  className="w-[20px] h-[20px] inline-block mr-4 mb-2"
                />
                <span className="break-words text-1x1 md:text-2xl font-bold max-w-[100%] text-wrap text-white mb-6">Chicago, IL</span> 
            </h3>
              {/* <Link
              href="/#events"
              className="btn-gradient inline-block px-6 py-3 font-semibold rounded transition"
            >
              {language === 'es' ? 'Suscríbete a nuestro boletín' : 'Subscribe to our Newsletter'}  
            </Link> */}
          </div>
        </section>
        {/* Hero Section */}
        <div className="bg-gradient-black-dark">
          <section className="py-20  px-6 sm:px-16 text-center">
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
                <div className="flex justify-center items-center gap-6 flex-wrap mb-2">
                  <Image
                    src={foundersImg3}
                    alt="Founder at event 1"
                    width={400}
                    height={400}
                    className="w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                  <Image
                    src={foundersImg2}
                    alt="Founder at event 2"
                    width={420}
                    height={400}
                    className="aspect-square w-[90%] h-[90%] sm:w-[400px] sm:h-[400px] rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                  <Image
                    src={foundersImg1}
                    alt="Founder at event 3"
                    width={400}
                    height={400}
                    className="w-[240px] h-[240px] md:w-[400px] md:h-[400px] rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
          {/* Founders Section */}
          <section className="bg-transparent max-w-5xl mx-auto px-2 sm:px-10 py-12 grid md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="text-center md:text-left">
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-highlight mb-2 block md:flex items-center justify-start md:items-end flex-row ">
                <Image
                src={joseImage}
                width={90}
                height={90}
                alt=" Jose O. Ortiz"
                className="block md:inline rounded-full aspect-square shadow-lg mx-auto md:mx-0 md:mr-[10px] md:max-h-[150px] md:max-w-[150px] max-h-[150px] max-w-[150px] object-cover"
              />
                <span className="ml-[10px] my-[8px] inline-block"> Jose O. Ortiz</span>
                <a
                  href="https://www.linkedin.com/in/jose-o-ortiz-msc-420670135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:my-[10px] text-blue hover:underline person-social-link ml-2"
                >
                  <Image
                    src={LIImg}
                    width={40}
                height={40}
                    alt="LinkedIn"
                    className="min-w-[30px] w-[30px] h-[30px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
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
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-highlight mb-2 block md:flex items-center justify-start md:items-end flex-row">
                <Image
                src={fernandoImage}
                width={90}
                height={90}
                alt="Fernando Rayas"
                className="block md:inline rounded-full aspect-square shadow-lg mx-auto md:mx-0 md:mr-[10px] md:max-h-[150px] md:max-w-[150px] max-h-[150px] max-w-[150px] object-cover"
              />
                <span className="ml-[10px] my-[8px] inline-block">Fernando Rayas</span>
                <a
                  href="https://www.linkedin.com/in/fernando-rayas-357aa210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:my-[10px] text-blue hover:underline person-social-link ml-2"
                >
                  <Image
                    src={LIImg}
                    width={40}
                height={40}
                    alt="LinkedIn"
                    className="min-w-[30px] w-[30px] h-[30px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
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
