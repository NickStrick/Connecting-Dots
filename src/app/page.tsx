'use client';
import Image from "next/image";
import Link from "next/link";

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

import instaImg from "../../public/Instagram.png";
import LIImg from "../../public/linkedin.png";

// const InstagramEmbed = dynamic(() => import('./components/InstagramEmbed'), {
//   ssr: false,
// });

import backgroundImage from "../../public/leaderGroup.jpg"; // Adjust the path as needed
import backgroundImage2 from "../../public/eventGroup.png"; // Adjust the path as needed
import backgroundImage3 from "../../public/3members.png"; // Adjust the path as needed

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* Hero content */}
      <motion.div className="relative z-10 px-4 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1.2, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}>
        <h1 className="hero-title text-white above">
          CONNECTING DOTS 
          <span className="hero-highlight hero-small-txt"> for Latinx Professionals</span>
        </h1>
        <p className="hero-subtitle mt-6">
          We are a nonprofit dedicated to elevating Latinx professionals through connection,
          leadership, and storytelling. Join us in building a future where Latinx voices thrive.
        </p>
        <p className="hero-subtitle mt-6">Únase a nosotros en la construcción de un futuro donde prosperen las voces de Latinx.</p>
        <div className="above mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#events" className="btn-gradient">
            Join Our Network
          </a>
          <a href="/founders" className="btn-gradient">
            Meet Our Founders
          </a>
        </div>
      </motion.div>
    </section>
      <section
        className="bg-gradient-black-purple overflow-hidden relative p-20 flex items-center justify-center text-center px-2 md:px-6"
        
      >
         {/* <InstagramEmbed postUrl="https://www.instagram.com/reel/DKYPVsSgp61/?utm_source=ig_embed&amp;utm_campaign=loading" /> */}
        <div className="absolute inset-0   z-0" />
        <motion.div className="z-10 px-4 sm:px-10" 
          initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md mb-4">
            <span className="hero-highlight">JUNTOS</span> SOMOS
          <span className="hero-highlight"> MAS.</span>
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto">
Empoderemos a los profesionales latinos juntos a través de una comunidad auténtica, tutoría y narraciones.</p>
          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto">
            Let's Empower Latinx professionals together through authentic community, mentorship, and storytelling. By sharing our journeys and celebrating cultural identity, we foster visibility and leadership in the professional world. Together, we’re building a future where Latinx voices are seen, heard, and valued—turning culture and connection into lasting impact.
          </p>
        </motion.div>
      </section>

      <section className="bg-gradient-purple-black hero-section flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
  {/* Left: Image */}
  <motion.div className="w-full md:w-1/2 flex justify-center flex-row flex-nowrap"
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0 },
      }}>
    <Image
      src={backgroundImage3.src}
      alt="Connecting the Dots"
      className="rounded-lg shadow-lg max-h-[80vh] object-cover"
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
     Leading with <span className="hero-highlight">Authentic Representation</span>
    </h1>
    <p className="hero-subtitle text-purple-200 max-w-xl">
      means embracing our cultural identity as a strength, not a barrier. By showing up as our full selves, we create space for others to do the same—and shift what leadership looks like across industries.
    </p>
  </motion.div>
</section>

      {/* Mission & Background */}
      <section className="bg-gradient-black-dark overflow-hidden text-neutral-900 px-6 py-16 sm:py-24">
        <motion.div className="max-w-4xl mx-auto space-y-10"
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-2">Our Mission</h2>
            <p>
              We’re a professional networking nonprofit that connects Latinx professionals
              across industries, offering spaces for mentorship, inspiration, and community-building.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">Background</h2>
            <p>
              Born out of the need for authentic representation and opportunity, our events highlight Latinx voices in leadership, technology, arts, and business.
            </p>
          </div>
        </motion.div>
      </section>
      <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* Hero content */}
      <motion.div className="relative z-10 px-4 max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
        <h1 className="hero-title text-white above">
          <span className="hero-highlight">Latinx voices</span> in leadership,  technology,  arts, and  business.
        </h1>
        <p className="hero-subtitle mt-6">
          We’re a professional networking nonprofit that connects Latinx professionals
              across industries, offering spaces for mentorship, inspiration, and community-building.
        </p>
      </motion.div>
    </section>
      

      {/* Upcoming Events */}
      <section className="bg-events h-full text-white px-6 py-16 sm:py-24 flex flex-col md:flex-row-reverse">
        <div className="max-w-4xl mx-auto" >
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
        <ul className=" text-lg flex justify-start items-center mb-4">
          <li className="p-4">
            <a
              href="https://www.linkedin.com/company/connecting-dots-for-latinx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              <Image src={LIImg} alt="LinkedIn" className="w-20 h-20 focus:scale-110 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </li>
          <li className="p-4">
            <a
              href="https://www.instagram.com/connectingdotsforlatinx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              <Image src={instaImg} alt="LinkedIn" className="w-20 h-20 focus:scale-110 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </li>
        </ul>
        </div>
        <div className="max-w-4xl mx-auto" id="events">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <ul className="space-y-4 pl-6" >
            
            <li className="flex items-center justify-start md:w-[500px]">
              <strong className="w-[110px] md:w-[150px]">🎤 June 18</strong> <span>Latinx Comedy Night</span>
            </li>
            <li className="flex items-center justify-start md:w-[500px]">
              <strong className="w-[110px] md:w-[150px]">📚 August 20</strong> <span>Networking and Pannel</span>
            </li>
            <li className="flex items-center justify-start md:w-[500px]">
              <strong className="w-[110px] md:w-[150px]">💼 TBD</strong> <span>Northwestern Law Collaboration</span>
            </li>
          </ul>
          <div className="mt-10">
            <Link
              href="/founders"
              className="inline-block btn-gradient font-semibold px-6 py-3 rounded  transition"
            >
              Meet the Founders →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

