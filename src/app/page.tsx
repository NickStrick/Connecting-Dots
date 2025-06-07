'use client';
import Image from "next/image";
import Link from "next/link";

import dynamic from 'next/dynamic';

const InstagramEmbed = dynamic(() => import('./components/InstagramEmbed'), {
  ssr: false,
});

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
      <div className="relative z-10 px-4 max-w-3xl mx-auto text-center">
        <h1 className="hero-title text-white above">
          LET’S EMPOWER PROFESSIONALS TO{" "}
          <span className="hero-highlight">LEAD.</span>
        </h1>
        <p className="hero-subtitle mt-6">
          We are a nonprofit dedicated to elevating Latinx professionals through connection,
          leadership, and storytelling. Join us in building a future where Latinx voices thrive.
        </p>
        <div className="above mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#events" className="btn-gold">
            Join Our Network
          </a>
          <a href="/founders" className="btn-purple">
            Meet Our Founders
          </a>
        </div>
      </div>
    </section>
      {/* <section
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="z-10 px-4">
          <h1 className="header-title text-white">Let’s Empower LatinX Professionals to Connect</h1>
          <p className="header-subtitle text-white mt-4">We are committed to uplifting voices across our communities.</p>
        </div>
        We create space for Latinx professionals to lead, share, and grow in their industries through meaningful connections.
        <div className="mt-6 flex justify-center gap-4">
          <a href="/events" className="btn-primary">Explore Events</a>
          <a href="/founders" className="btn-outline">Meet Our Team</a>
        </div>
      </section> */}
      <section
        className="bg-darkish overflow-hidden relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/event-group.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         <InstagramEmbed postUrl="https://www.instagram.com/reel/DKYPVsSgp61/?utm_source=ig_embed&amp;utm_campaign=loading" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-0" />
        <div className="z-10 px-4 sm:px-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md mb-4">
            Connecting the Dots
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto">
            Empowering Latinx professionals through community, mentorship, and visibility.
          </p>
        </div>
      </section>

      <section className="hero-section flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-6 gap-8">
  {/* Left: Image */}
  <div className="w-1/2 md:w-full flex justify-center flex-row flex-nowrap">
    <img
      src={backgroundImage3.src}
      alt="Connecting the Dots"
      className="rounded-lg shadow-lg max-h-[80vh] object-cover"
    />
  </div>

  {/* Right: Text */}
  <div className="w-1/2 md:w-full relative z-10">
    <h1 className="hero-title text-white drop-shadow-md mb-4">
      Connecting the Dots
    </h1>
    <p className="hero-subtitle text-purple-200 max-w-xl">
      Empowering Latinx professionals through community, mentorship, and visibility.
    </p>
  </div>
</section>

      {/* Mission & Background */}
      <section className="bg-darkish overflow-hidden text-neutral-900 px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-10">
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
        </div>
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
      <div className="relative z-10 px-4 max-w-3xl mx-auto text-center">
        <h1 className="hero-title text-white above">
          Latinx voices in <span className="hero-highlight">leadership</span>,  <span className="hero-highlight ">technology</span>,  <span className="hero-highlight">arts</span>, and  <span className="hero-highlight">business.</span>
        </h1>
        <p className="hero-subtitle mt-6">
          We’re a professional networking nonprofit that connects Latinx professionals
              across industries, offering spaces for mentorship, inspiration, and community-building.
        </p>
      </div>
    </section>
      

      {/* Upcoming Events */}
      <section className="bg-gradient-to-b from-purple-600 to-purple-800 text-white px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto" id="events">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <ul className="space-y-4 list-disc pl-6" >
            <li>
              <strong>🌐 June 20:</strong> Virtual Networking Night
            </li>
            <li>
              <strong>🎤 July 15:</strong> Latinx Leaders in Tech Panel
            </li>
            <li>
              <strong>📚 August 10:</strong> Career Growth Workshop
            </li>
          </ul>
          <div className="mt-10">
            <Link
              href="/founders"
              className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded hover:bg-purple-100 transition"
            >
              Meet the Founders →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

