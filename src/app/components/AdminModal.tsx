"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';

import GalleryAdminButton from '@/app/components/admin/GalleryAdminButton';
import { adminFetch } from '@/lib/adminClient';
import { useEvents } from '../context/EventsContext';
import { buildDefaultConfig } from '../context/PageContext';

// Dynamically import MediaPicker to avoid SSR
const MediaPicker = dynamic(() => import('./admin/MediaPicker'), { ssr: false });

type EventItem = {
  date: string;
  title: { en: string; es: string };
  registerLink?: string;
  featuring: string[];
  description?: string; // Optional field for future use
};

interface AdminModalProps {
  // No props needed now
}
const langLegend = {
  'en': 'English',
  'es': 'Spanish',
}
// ContentEditor component
function ContentEditor({ section, onChange }: { section: { id: string; name: string; data: any }, onChange: (newData: any) => void }) {

  const createEmptyCopy = (obj: any): any => {
    if (typeof obj === 'string') return '';
    if (Array.isArray(obj)) return [];
    if (typeof obj === 'object' && obj !== null) {
      const empty: any = {};
      for (const key in obj) {
        empty[key] = createEmptyCopy(obj[key]);
      }
      return empty;
    }
    return obj;
  };

  const renderField = (key: string, value: any, path: string[] = []) => {
    const fullPath = [...path, key];
    if (typeof value === 'string') {
      return (
        <div key={fullPath.join('.')} className="space-y-1">
          <label className="block text-sm font-medium">{['en','es'].includes(key) ? langLegend[key as 'en' | 'es'] : key}</label>
          <textarea
            value={value}
            onChange={(e) => updateField(fullPath, e.target.value)}
            className="w-full border border-purple-600 rounded p-2 text-sm"
            rows={value.length > 100 ? 4 : 2}
          />
        </div>
      );
    } else if (Array.isArray(value)) {
      console.log('Rendering array for key:', key, 'value:', value);
      return (
        <div key={fullPath.join('.')} className="space-y-1">
          <label className="block text-sm font-medium">{key}</label>
          {value.map((item, index) => (
            <div key={index} className="border border-purple-600 rounded p-2 mb-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium">Item {index + 1}</label>
                <button
                  onClick={() => removeItem(fullPath, index)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Remove
                </button>
              </div>
              {typeof item === 'string' ? (
                <textarea
                  value={item}
                  onChange={(e) => {
                    const newArray = [...value];
                    newArray[index] = e.target.value;
                    updateField(fullPath, newArray);
                  }}
                  className="w-full border border-purple-600 rounded p-2 text-sm"
                  rows={2}
                />
              ) : (
                <div className="space-y-2">
                  {Object.entries(item).map(([k, v]) => renderField(k, v, [...fullPath, index.toString()]))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => addItem(fullPath)}
            className="bg-green-500 text-white px-2 py-1 rounded text-sm"
          >
            Add
          </button>
        </div>
      );
    } else if (typeof value === 'object' && value !== null) {
      return (
        <div key={fullPath.join('.')} className="space-y-2">
          <label className="block text-sm font-medium">{key}</label>
          <div className="border border-purple-600 rounded p-2 space-y-2 !mt-[0.25rem]">
            {Object.entries(value).map(([k, v]) => renderField(k, v, fullPath))}
          </div>
        </div>
      );
    } else {
      return (
        <div key={fullPath.join('.')} className="space-y-1">
          <label className="block text-sm font-medium">{key}</label>
          <input
            value={String(value)}
            onChange={(e) => updateField(fullPath, e.target.value)}
            className="w-full border border-purple-600 rounded p-2 text-sm"
          />
        </div>
      );
    }
  };

  const updateField = (path: string[], newValue: any) => {
    const newData = JSON.parse(JSON.stringify(section.data));
    let current = newData;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = newValue;
    onChange(newData);
  };

  const addItem = (path: string[]) => {
    const newData = JSON.parse(JSON.stringify(section.data));
    let current = newData;
    for (let i = 0; i < path.length; i++) {
      current = current[path[i]];
    }
    // current is the array
    const template = current.length > 0 ? current[0] : {};
    current.push(createEmptyCopy(template));
    onChange(newData);
  };

  const removeItem = (path: string[], index: number) => {
    const newData = JSON.parse(JSON.stringify(section.data));
    let current = newData;
    for (let i = 0; i < path.length; i++) {
      current = current[path[i]];
    }
    current.splice(index, 1);
    onChange(newData);
  };
  if(Array.isArray(section.data)) section.data = {list:section.data};
  return (
    <div className="space-y-4">
      {Object.entries(section.data).map(([key, value]) => renderField(key, value))}
    </div>
  );
}

export default function AdminModal() {
  const { rawJSON, setRawJSON, setEvents } = useEvents();
  const [show, setShow] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [eventData, setEventData] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'events' | 'gallery'>('content');

  // Content tab states
  const [contentConfig, setContentConfig] = useState<string>('');
  const [contentLoading, setContentLoading] = useState(false);
  const [contentSaving, setContentSaving] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>('headline');

  // Parse config into sections
  const getSections = (config: any) => {
    const sections: { id: string; name: string; data: any }[] = [];
    if (config.headline) sections.push({ id: 'headline', name: 'Headline', data: config.headline });
    if (config.HomePage) {
      Object.keys(config.HomePage).forEach(key => {
        sections.push({ id: `HomePage.${key}`, name: `HomePage ${key}`, data: config.HomePage[key] });
      });
    }
    if (config.TrainingPage) {
      Object.keys(config.TrainingPage).forEach(key => {
        sections.push({ id: `TrainingPage.${key}`, name: `TrainingPage ${key}`, data: config.TrainingPage[key] });
      });
    }
    if (config.FellowshipPage) {
      Object.keys(config.FellowshipPage).forEach(key => {
        sections.push({ id: `FellowshipPage.${key}`, name: `FellowshipPage ${key}`, data: config.FellowshipPage[key] });
      });
    }
    if (config.EventsPage) {
      Object.keys(config.EventsPage).forEach(key => {
        sections.push({ id: `EventsPage.${key}`, name: `EventsPage ${key}`, data: config.EventsPage[key] });
      });
    }
    if (config.FoundersPage) {
      Object.keys(config.FoundersPage).forEach(key => {
        sections.push({ id: `FoundersPage.${key}`, name: `FoundersPage ${key}`, data: config.FoundersPage[key] });
      });
    }
    return sections;
  };

  const ADMIN_PIN = "2025"; // Change or load from env variable
const router = useRouter();
  // Shift+E shows login prompt
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.shiftKey && e.key === "E") {
        setShow(true);
        setAuthenticated(false);
        setPinInput("");
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Load initial data
  useEffect(() => {
    if (rawJSON) {
      try {
        const parsed = JSON.parse(rawJSON);
        setEventData(parsed.events || []);
      } catch (err) {
        console.error("Failed to parse events JSON:", err);
      }
    }
  }, [rawJSON]);

  const handleAuth = () => {
    if (pinInput === ADMIN_PIN) {
      setAuthenticated(true);
    } else {
      alert("Incorrect PIN");
    }
  };

  // Content tab functions
  const loadContentConfig = async () => {
    setContentLoading(true);
      try {
      const res = await adminFetch('/api/admin/config?key=configs/jose-ortiz/pageContext.json');
      if (res.ok) {
        const data = await res.json();
        setContentConfig(JSON.stringify(data.config, null, 2));
      } else {
        // Fallback to default config
        const defaultConfig = buildDefaultConfig();
        setContentConfig(JSON.stringify(defaultConfig, null, 2));
      }
    } catch (error) {
      console.error(error);
      alert('Error loading config');
    } finally {
      setContentLoading(false);
    }
  };

  const saveContentConfig = async () => {
    setContentSaving(true);
    try {
      const parsed = JSON.parse(contentConfig);
      const res = await adminFetch('/api/admin/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: 'configs/jose-ortiz/pageContext.json',
          config: parsed,
        }),
      });
      if (res.ok) {
        alert('Config saved successfully');
      } else {
        alert('Failed to save config');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid JSON or save error');
    } finally {
      setContentSaving(false);
    }
  };

  // Load content config when tab changes to content
  useEffect(() => {
    if (authenticated && activeTab === 'content' && !contentConfig) {
      loadContentConfig();
    }
  }, [authenticated, activeTab, contentConfig]);

  // Input change handlers
  const updateEvent = (index: number, key: keyof EventItem, value: string) => {
    const updated = [...eventData];

    if (key === "date" || key === "registerLink" || key === "description") {
      updated[index][key] = value;
    }
    setEventData(updated);
  };

  const updateTitle = (index: number, lang: "en" | "es", value: string) => {
    const updated = [...eventData];
    updated[index].title[lang] = value;
    setEventData(updated);
  };
  const addFeaturing = (eventIdx: number) => {
  setEventData(prev => {
    const updated = [...prev];
    const feat = [...updated[eventIdx].featuring, ""];
    updated[eventIdx] = { ...updated[eventIdx], featuring: feat };
    return updated;
  });
};

const removeFeaturing = (eventIdx: number, nameIdx: number) => {
  setEventData(prev => {
    const updated = [...prev];
    const feat = [...updated[eventIdx].featuring];
    feat.splice(nameIdx, 1);
    updated[eventIdx] = { ...updated[eventIdx], featuring: feat };
    return updated;
  });
};

const updateFeaturing = (eventIdx: number, nameIdx: number, value: string) => {
  setEventData(prev => {
    const updated = [...prev];
    const feat = [...updated[eventIdx].featuring];
    // keep internal spaces; just strip accidental leading spaces
    feat[nameIdx] = value.replace(/^\s+/, "");
    updated[eventIdx] = { ...updated[eventIdx], featuring: feat };
    return updated;
  });
};

  const addEvent = () => {
    setEventData([
      ...eventData,
      { date: "TBD", title: { en: "New Event", es: "Nuevo Evento" }, registerLink: "", featuring: [] },
    ]);
  };

  const removeEvent = (index: number) => {
    const updated = [...eventData];
    updated.splice(index, 1);
    setEventData(updated);
  };

  const handleSave = async () => {
    const cleaned = eventData.map(ev => ({
      ...ev,
      featuring: ev.featuring
        .map(n => n.trim()) // keep internal spaces, remove ends
        .filter(Boolean),   // drop empty strings
    }));

    const newData = { events: cleaned };
    const jsonString = JSON.stringify(newData);

    setEvents(cleaned);
    setRawJSON(jsonString);

    const payload = {
      id: 6,
      value: jsonString, // double stringified in the outer JSON
    };

    try {
      setLoading(true);
      const response = await fetch("https://softball-science-data.vercel.app/locker/6", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save events");
        
      setShow(false);
      router.push("/events");
      // ✅ Success: show alert
    //   alert("✅ Events saved successfully!");
    } catch (err: unknown) {
      if (err instanceof Error) {
      alert("Error: " + err.message);
    } else {
      alert("An unknown error occurred.");
    }
    } finally {
      setLoading(false);
    }
  };
  const handlePick = (key: string) => {
    console.log('Picked image key:', key);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 overflow-y-auto ">
      <div className="bg-white text-black w-11/12 max-w-5xl p-6 rounded-lg shadow-xl max-h-[100vh] overflow-auto shadow-md">
        {!authenticated ? (
          // ---------------- Admin PIN Prompt ----------------
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-black">Admin Login</h2>
            <p className="text-black text-xl">Enter admin PIN to continue</p>
            <input
              type="password"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className=" p-2 w-40 text-center rounded  border-2 border-purple-600"
            />
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setShow(false)}
                className="px-4 py-2 border-purple-600 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAuth}
                className="px-10 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Enter
              </button>
            </div>
          </div>
        ) : (
          // ---------------- Admin Dashboard with Tabs ----------------
          <>
            <div className="mb-6">
              <div className="flex border-b border-purple-600">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`px-4 py-2 font-medium ${activeTab === 'content' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                >
                  Site Content
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-4 py-2 font-medium ${activeTab === 'events' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                >
                  Events
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-4 py-2 font-medium ${activeTab === 'gallery' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                >
                  Gallery
                </button>
              </div>
            </div>

            {activeTab === 'content' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4 text-black">Edit Page Content</h2>
                {contentLoading ? (
                  <div>Loading config...</div>
                ) : (
                  <div className="grid md:grid-cols-3 gap-0 h-[65vh] shadow-md rounded border bg-gray-50">
                    {/* Left: Sections list */}
                    <div className="border-r border-purple-600 p-4 space-y-3 max-h-full overflow-y-auto">
                      <div className="text-sm opacity-70">Sections</div>
                      <div className="space-y-2">
                        {(() => {
                          try {
                            const parsed = JSON.parse(contentConfig);
                            const sections = getSections(parsed);
                            return sections.map(section => (
                              <div
                                key={section.id}
                                onClick={() => setSelectedSection(section.id)}
                                className={`card p-3 w-full text-left cursor-pointer transition ${
                                  selectedSection === section.id ? 'outline outline-2 outline-purple-600 bg-purple-50' : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className="font-medium">{section.name}</div>
                              </div>
                            ));
                          } catch {
                            return <div className="text-red-600">Invalid JSON</div>;
                          }
                        })()}
                      </div>
                    </div>

                    {/* Right: Editor */}
                    <div className="md:col-span-2 p-4 space-y-4 max-h-full overflow-y-auto">
                      {(() => {
                        try {
                          const parsed = JSON.parse(contentConfig);
                          const sections = getSections(parsed);
                          const selected = sections.find(s => s.id === selectedSection);
                          if (!selected) return <div>Select a section</div>;

                          return (
                            <div className="card p-4 space-y-3">
                              <h3 className="font-semibold text-purple-600">{selected.name}</h3>
                              <ContentEditor
                                section={selected}
                                onChange={(newData) => {
                                  const parsed = JSON.parse(contentConfig);
                                  const [page, key] = selected.id.split('.');
                                  if (page === 'headline') {
                                    parsed.headline = newData;
                                  } else {
                                    parsed[page][key] = newData;
                                  }
                                  setContentConfig(JSON.stringify(parsed, null, 2));
                                }}
                              />
                            </div>
                          );
                        } catch {
                          return <div className="text-red-600">Invalid JSON</div>;
                        }
                      })()}
                    </div>
                  </div>
                )}
                <div className="flex justify-between">
                  <button
                    onClick={saveContentConfig}
                    disabled={contentSaving}
                    className="btn btn-gradient"
                  >
                    {contentSaving ? 'Saving...' : 'Save Content'}
                  </button>
                  <button
                    onClick={() => setShow(false)}
                    className="btn btn-inverted"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4 text-black">Edit Events - Amount: <span className="text-purple-500 p-2 bold text-[30px] mt-[-10px] inline-block">{eventData.length}</span></h2>
                <div id="eventEditList" className="space-y-6 overflow-y-auto max-h-[70vh] p-6 bg-[#b0b0b0] rounded custom-scrollbar">
                  {eventData.map((event, index) => (
                    <div key={index} className="border border-purple-600 p-4 rounded-lg space-y-2 bg-purple-900 flex justify-between items-center flex-wrap">
                      <div className="flex justify-between items-center flex-wrap w-full">
                        <h3 className="font-bold text-[34px] border-b-2 border-purple-600">Event {index + 1}</h3>
                        <button
                          onClick={() => removeEvent(index)}
                          className="bg-red-600 py-2 px-10 rounded text-white text-sm hover:bg-red-700 mt-1"
                        >
                          Remove Event {index + 1}
                        </button>
                      </div>

                      <label className="text-white block text-sm font-medium w-[48%]">
                        Date <span className="hero-highlight">(MM/DD/YYYY)</span>:
                        <input
                          placeholder="MM/DD/YYYY"
                          name="date"
                          type="text"
                          value={event.date}
                          onChange={(e) => updateEvent(index, "date", e.target.value)}
                          className="w-full border rounded p-1 mt-1 text-black"
                        />
                      </label>
                      
                      <label className="text-white block text-sm font-medium w-[48%]">
                        Register Link <span className="hero-highlight">( Only Shows if event is in the future )</span>:
                        <input
                          placeholder="URL"
                          name="registerLink"
                          type="text"
                          value={event.registerLink || ""}
                          onChange={(e) => updateEvent(index, "registerLink", e.target.value)}
                          className="w-full border rounded p-1 mt-1 text-black"
                        />
                      </label>

                      <label className="text-white block text-sm font-medium w-[48%]">
                        Title <span className="hero-highlight">(English)</span>:
                        <input
                          placeholder="Title in English"
                          name="title-en"
                          type="text"
                          value={event.title.en}
                          onChange={(e) => updateTitle(index, "en", e.target.value)}
                          className="w-full border rounded p-1 mt-1 text-black"
                        />
                      </label>

                      <label className="text-white block text-sm font-medium w-[48%]">
                        Title <span className="hero-highlight">(Spanish)</span>:
                        <input
                          placeholder="Título en español"
                          name="title-es"
                          type="text"
                          value={event.title.es}
                          onChange={(e) => updateTitle(index, "es", e.target.value)}
                          className="w-full border rounded p-1 mt-1 text-black"
                        />
                      </label>
                      <label className="text-white block text-sm font-medium w-full">
                        Description <span className="hero-highlight">(Optional)</span>:
                        <input
                          placeholder="Describe the event"
                          name="featuring"
                          type="text"
                          value={event.description || ""}
                          onChange={(e) => updateEvent(index, "description", e.target.value)}
                          className="w-full border rounded p-1 mt-1 text-black"
                        />
                      </label>
                      <div className="text-white block text-sm font-medium w-full">
                        <div className="flex items-center justify-between">
                          <span>Featuring</span>
                          <button
                            type="button"
                            onClick={() => addFeaturing(index)}
                            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                          >
                            + Add name
                          </button>
                        </div>

                        <div className="space-y-2 mt-2">
                          {event.featuring.length === 0 && (
                            <div className="text-white/80 text-xs">No names yet.</div>
                          )}

                          {event.featuring.map((name, i) => (
                            <div key={i} className="flex gap-2 items-start ml-2">
                              <input
                                type="text"
                                placeholder="First Last"
                                value={name}
                                onChange={(e) => updateFeaturing(index, i, e.target.value)}
                                className="flex-1 border rounded p-1 mt-1 text-black"
                              />
                              <button
                                type="button"
                                onClick={() => removeFeaturing(index, i)}
                                className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700 mt-1"
                              >
                                Remove name
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addEvent}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  ➕ Add Event
                </button>

                <div className="mt-6 flex justify-end gap-2">
                  <button
                    onClick={() => setShow(false)}
                    className="px-4 py-2 border-purple-800 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className={`px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Saving..." : "Save Events"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4 text-black">Manage Gallery</h2>
                <GalleryAdminButton prefix="gallery/" onPick={handlePick} />
                <div className="mt-6">
                  <MediaPicker
                    prefix="gallery/"
                    onPick={(key) => {
                      navigator.clipboard.writeText(key);
                      alert(`Copied to clipboard: ${key}`);
                    }}
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShow(false)}
                    className="px-4 py-2 border-purple-800 rounded hover:bg-gray-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
