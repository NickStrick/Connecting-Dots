'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

import Share from "../components/Share"
import Trainings from "../components/Trainings"
import AdminModal from "../components/AdminModal";

import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

type EventItem = {
  date: string;
  title: { en: string; es: string };
  registerLink?: string; // Optional link for registration
  featuring?: string[]; // Optional featuring information
  description?: string;
};


export default function TrainingPage() {
  const [eventList, setEvents] = useState<EventItem[]>([]);
  const [rawJSON, setRawJSON] = useState(JSON.stringify({ events: eventList }));
  const { language } = useLanguage();
  console.log(rawJSON)

    useEffect(() => {
     async function fetchEvents() {
      try {
        const res = await fetch("https://softball-science-data.vercel.app/locker/6"); // <-- your endpoint here
        const json = await res.json();
        if (json.data && json.data[0]?.value) {
          const parsed = JSON.parse(json.data[0].value);
          setEvents(parsed.events || []);
          setRawJSON(json.data[0].value); // keep original JSON string
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    }

    fetchEvents();
  }, []);

// console.log(pageText);
  return (
    <>
      <div className="text-white">
        <Trainings />
        
        <section className="text-center py-12 px-6 bg-events-cta pb-[200px]">
          
          <div className="mt-10">
            <Link
              href="/"
              className="btn-inverted inline-block px-6 py-3 font-semibold rounded transition"
            >
              ← {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
            </Link>
          </div>
        </section>
      </div>
      <Share />
      <Footer />
      <AdminModal 
        rawJSON={rawJSON} 
        setRawJSON={setRawJSON} 
        setEvents={setEvents} 
      />
    </>
  );
}
