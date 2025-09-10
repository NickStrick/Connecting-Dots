'use client';
import { motion } from "framer-motion";
// import { usePageText } from '../context/PageContext';

export default function OfferAndResources() {
  // const pageText = usePageText();

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
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            {/* {pageText.resources.title}   */}
          </h2>
          <p className="text-lg">
            {/* {pageText.voices.text}   */}
          </p>
        </motion.div>
      </section>

      {/* We Offer Section */}
      <section className="bg-gradient-purple-black text-white px-6 py-20">
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
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            {/* {pageText.offers.title}   */}
          </h2>

          <p className="text-lg">
            {/* {pageText.offers.text}   */}
          </p>

          <p className="text-lg">
            {/* {pageText.offers.text2}   */}
          </p>
        </motion.div>
      </section>
    </>
  );
}
