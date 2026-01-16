'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

import { useLanguage } from "../context/LanguageContext";



const MobileNavbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex flex-row items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Image src="/logo.png" alt="Logo" width={70} height={70} priority={true}/>
        </Link>
        <div className="flex flex-col items-center  rounded-md w-fit ml-2">
            <button
              onClick={() => language !== 'en' && toggleLanguage()}
              className={`btn-gradient-language transition-all duration-300 ease-in-out w-24 px-2 py-1 text-xs rounded-full focus:outline-none ${
                language === 'en'
                  ? 'bg-white text-purpbg-purple-custom font-bold bg-selected-totransparent '
                  : 'bg-purple-custom text-white hover:bg-language-hover'
              } transition`}
            >
              English
            </button>

            <button
              onClick={() => language !== 'es' && toggleLanguage()}
              className={`btn-gradient-language transition-all duration-300 ease-in-out w-24 px-2 py-1 text-xs rounded-full focus:outline-none ${
                language === 'es'
                  ? 'bg-white text-purpbg-purple-custom font-bold bg-selected-totransparent'
                  : 'bg-purple-custom text-white hover:bg-language-hover'
              } transition`}
            >
              Español
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-black">
          <Link className="hover:text-purple-700 transition-all nav-btn" href="/">{language === 'en' ? `Home` : `Inicio`}</Link>
          <Link className="hover:text-purple-700 transition-all nav-btn" href="/#About">{language === 'en' ? `About` : `Acerca de`}</Link>
          <Link className="hover:text-purple-700 transition-all nav-btn" href="/training">{language === 'en' ? `Trainings & Coaching` : `Formación y coaching`}</Link>
          {/* <Link className="hover:text-purple-700 transition-all nav-btn" href="/fellows">{language === 'en' ? `Fellowship` : `Fellowship`}</Link> */}
          <Link className="hover:text-purple-700 transition-all nav-btn" href="/events">{language === 'en' ? `Events` : `Eventos`}</Link>
          <Link className="hover:text-purple-700 transition-all nav-btn" href="/founders">{language === 'en' ? `Connect` : `Conéctate`}</Link>
        </nav>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu (Mobile Only) */}
      {open && (
        <nav className="md:hidden bg-white w-full shadow-md">
          <ul className="flex flex-col items-start gap-4 px-6 py-4 text-lg font-medium">
            <li className="mb-nav-li">
              <Link className="nav-btn transition-all" href="/" onClick={() => setOpen(false)}>
                {language === 'es' ? 'Inicio' : 'Home'}
              </Link>
            </li>
             <li className="mb-nav-li">
              
              <Link className="nav-btn" href="/#About" onClick={() => setOpen(false)}>
                {language === 'es' ? 'Acerca de' : 'About'}
              </Link>
            </li>
             <li className="mb-nav-li">
              <Link className="nav-btn transition-all" href="/training" onClick={() => setOpen(false)}>
                {language === 'en' ? `Trainings & Coaching` : `Formación y coaching`}
              </Link>
            </li>
            {/* <li className="mb-nav-li">
              <Link className="nav-btn transition-all" href="/fellows" onClick={() => setOpen(false)}>
                {language === 'en' ? `Fellowship` : `Fellowship`}
              </Link>
            </li> */}
             <li className="mb-nav-li">
              <Link className="nav-btn transition-all" href="/events" onClick={() => setOpen(false)}>
                {language === 'es' ? 'Eventos' : 'Events'}
              </Link>
            </li>
            
             <li className="mb-nav-li">
              <Link className="nav-btn" href="/founders" onClick={() => setOpen(false)}>
                {language === 'es' ? 'Conéctate' : 'Connect'}
              </Link>
            </li>
          </ul>

          
        </nav>
      )}
      
    </header>
  );
};

export default MobileNavbar;
