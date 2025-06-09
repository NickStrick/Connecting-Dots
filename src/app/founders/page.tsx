import Link from "next/link";
import Image from "next/image";

// Replace with actual image paths in your public folder
import joseImage from "../../../public/founders/omar.jpg";
import fernandoImage from "../../../public/founders/fernando.jpg";

import instaImg from "../../../public/Instagram.png";
import LIImg from "../../../public/linkedin.png";

export default function FoundersPage() {
  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section */}
      <div className="bg-gradient-black-dark">
      <section className="py-20 px-6 sm:px-16 text-center c">
        <h1 className="text-4xl sm:text-6xl font-bold hero-title text-white mb-6">
          Meet Our <span className="hero-highlight">Founders</span>
        </h1>
        <p className="hero-subtitle text-purple-200 max-w-2xl mx-auto">
          Visionaries behind the movement—dedicated to empowering Latinx professionals through community, culture, and leadership.
        </p>
      </section>

      {/* Founders Section */}
      <section className="bg-transparent max-w-5xl mx-auto px-2 sm:px-10 py-12 grid md:grid-cols-2 gap-12">
        {/* María López */}
        <div className="text-center md:text-left">
          <Image
            src={joseImage}
            alt="Jose O. Ortiz"
            className="rounded-full aspect-square shadow-lg mx-auto md:mx-0 mb-4 md:max-h-[400px] md:max-w-[400px] max-h-[280px] max-w-[280px] object-cover"
          />
          <h2 className="text-2xl sm:text-3xl font-semibold text-highlight mb-2">Jose O. Ortiz</h2>
          <p className="text-purple-200 text-lg">
            Co-founder, Community Organizer, Social Impact Innovator, Leadership Development, Strategic Communication, HACE Emerging Latino Leader
          </p>
        </div>

        {/* Carlos Ramirez */}
        <div className="text-center md:text-left">
          <Image
            src={fernandoImage}
            alt="Fernando Rayas"
            className="rounded-full aspect-square shadow-lg mx-auto md:mx-0 mb-4 md:max-h-[400px] md:max-w-[400px] max-h-[280px] max-w-[280px] object-cover"
          />
          <h2 className=" text-2xl sm:text-3xl font-semibold text-highlight mb-2">Fernando Rayas</h2>
          <p className="text-purple-200 text-lg">
            Co-founder, Community Leader, Public Speaker, Mission driven, Council Relations Specialist, Experienced Non-Profit Leader
          </p>
        </div>
      </section>
      </div>

      {/* Contact / Social Section */}
      <section className="text-center py-12 px-6 bg-events">
        <h2 className="text-3xl font-bold text-white mb-6">Connect With Us</h2>
        <ul className=" text-lg flex justify-center items-center">
          <li className="p-4">
            <a
              href="https://www.linkedin.com/company/connecting-dots-for-latinx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              <Image src={LIImg} alt="LinkedIn" className="w-20 h-20" />
            </a>
          </li>
          <li className="p-4">
            <a
              href="https://www.instagram.com/connectingdotsforlatinx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              <Image src={instaImg} alt="LinkedIn" className="w-20 h-20" />
            </a>
          </li>
        </ul>

        <div className="mt-10">
          <Link
            href="/"
            className="btn-gradient inline-block px-6 py-3 font-semibold rounded transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
