'use client';
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import { usePageText } from '../context/PageContext';
import Fellows from '@/app/components/FellowsComponent'; 





export default function Events() {
  const { language } = useLanguage();
  const config = usePageText();
  const fellows = config.FellowshipPage.fellows;

  return (
    <section className="bg-events text-white space-y-20 "  id="events">
          <Fellows
        fellows={fellows.people}
        title={config.FellowshipPage.section1?.title[language]} // or use your own title
        subtitle={config.FellowshipPage.section1?.text[language]} // or use your own subtitle
        columns={3}
        align="center"
      />

    </section>
  );
}
