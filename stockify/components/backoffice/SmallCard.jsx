import React from 'react';

export default function SmallCard({ title, number, iconBg, icon: Icon }) {
  return (
    <div className='rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 dark:text-slate-50 text-slate-800'>
      <div className="flex space-x-4">
        {/* Icône dynamique en fonction de la prop `icon` */}
        <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-slate-50 dark:text-slate-50" />
        </div>

        <div>
          <p>{title}</p>
          <h3 className='text-2xl font-bold'>{number}</h3>
        </div>
      </div>
    </div>
  );
}
