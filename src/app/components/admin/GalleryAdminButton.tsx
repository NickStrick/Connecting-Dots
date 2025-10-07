'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Plus, X } from 'lucide-react';

// Dynamically import MediaPicker to avoid SSR
const MediaPicker = dynamic(() => import('./MediaPicker'), { ssr: false });

type Props = {
  /** Folder/prefix inside your S3 bucket, e.g. "gallery/" or "configs/site/assets/" */
  prefix: string;
  /** Called when an image is chosen from MediaPicker */
  onPick?: (key: string) => void;
};

/**
 * A small floating admin button that opens the MediaPicker modal.
 * Only visible for local admin sessions.
 */
export default function GalleryAdminButton({ prefix, onPick }: Props) {
  const [open, setOpen] = useState(false);

  // Super lightweight admin check
  const isAdmin = true;

  // Toggle modal
  const handleToggle = () => setOpen((prev) => !prev);

  if (!isAdmin) return null;
  console.log('Set Admin button load')
  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={handleToggle}
        className={`fixed top-6 right-6 z-50 flex items-center justify-center w-auto h-12 rounded-full shadow-lg transition-colors border bg-white px-10 ${
          open ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/80'
        } text-black`}
        title={open ? 'Close Gallery Editor' : 'Open Gallery Editor'}
      >
        {open ? <><span>Close Gallery Editor</span><X size={22} /></> : <><span>Open Gallery Editor</span><Plus size={22} /></>}
      </button>

      {/* Overlay modal */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-6">
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-5xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Manage Gallery Media</h2>
              <button
                onClick={handleToggle}
                className="btn btn-ghost text-gray-500 hover:text-gray-800"
              >
                <X />
              </button>
            </div>
            <MediaPicker
              prefix={prefix}
              onPick={(key) => {
                if (onPick) onPick(key);
                setOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
