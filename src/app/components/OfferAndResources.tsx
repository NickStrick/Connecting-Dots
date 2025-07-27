'use client';
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";


export default function OfferAndResources() {
  const { language } = useLanguage();
  return (
    <>
      {/* Resources Section */}
      <section className="bg-gradient-purple-black text-white px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Resources</h2>
          <p className="text-lg">
            Discover free guides, tools, and inspiration through our <strong>newsletter</strong>, <strong>YouTube channel</strong>, <strong>interviews</strong>, and <strong>podcast appearances</strong>. We also provide access to a variety of content like <strong>articles</strong>, <strong>blogs</strong>, <strong>training modules</strong>, and curated <strong>courses</strong> to support your journey.
          </p>
        </motion.div>
      </section>

      {/* We Offer Section */}
      <section className="bg-gradient-black-dark text-white px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4">We Offer</h2>
          <p className="text-lg">
            Our programs include <strong>interactive workshops</strong> and <strong>networking events</strong> designed to foster professional development and meaningful conversations.
          </p>
          <p className="text-lg">
            We are proud to support rising leaders through <strong>mentorship</strong> initiatives like the <strong>Leadership Circle</strong> and our <strong>Ambassador Program</strong> — empowering the next generation of Latinx professionals.
          </p>
        </motion.div>
      </section>
    </>
  );
}
