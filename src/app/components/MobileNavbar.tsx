'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: Install Lucide icons or use SVGs
import Image from 'next/image';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
         <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            />
        </Link>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black focus:outline-none">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <nav className="md:hidden bg-white w-full shadow-md">
          <ul className="flex flex-col items-start gap-4 px-6 py-4 text-lg font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/events" onClick={() => setOpen(false)}>Events</Link>
            </li>
            <li>
              <Link href="/founders" onClick={() => setOpen(false)}>Founders</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileNavbar;
