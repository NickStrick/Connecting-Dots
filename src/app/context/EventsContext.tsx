'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type EventItem = {
  date: string;
  title: { en: string; es: string };
  registerLink?: string;
  featuring?: string[];
  description?: string;
};

const EventsContext = createContext<{
  events: EventItem[];
  setEvents: React.Dispatch<React.SetStateAction<EventItem[]>>;
  rawJSON: string;
  setRawJSON: React.Dispatch<React.SetStateAction<string>>;
}>({
  events: [],
  setEvents: () => {},
  rawJSON: '',
  setRawJSON: () => {},
});

export function useEvents() {
  return useContext(EventsContext);
}

export function EventsProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [rawJSON, setRawJSON] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("https://softball-science-data.vercel.app/locker/6");
        const json = await res.json();
        if (json.data && json.data[0]?.value) {
          const parsed = JSON.parse(json.data[0].value);
          setEvents(parsed.events || []);
          setRawJSON(json.data[0].value);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    }
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ events, setEvents, rawJSON, setRawJSON }}>
      {children}
    </EventsContext.Provider>
  );
}