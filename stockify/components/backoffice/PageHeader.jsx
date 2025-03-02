import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Heading from "@/components/backoffice/Heading"; // Import du composant Heading

export default function PageHeader({ title, LinkTitle, href }) {
  return (
    <div className="flex justify-between items-center mt-10 border-b border-slate-500 py-4 mb-4">
      <Heading title={title} /> {/* Correction ici */}
      <Link
        className="text-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
          dark:focus:ring-lime-600/55 me-2 mb-2"
        href={href}
      >
        <Plus className="mr-2" />
        <span>{LinkTitle}</span>
      </Link>
    </div>
  );
}
