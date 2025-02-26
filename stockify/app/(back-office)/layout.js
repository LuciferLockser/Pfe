import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React from 'react'

export default function layout({children}) {
  return (
    <div className='flex'>
        { /* sidebar */}
        <Sidebar/>
        <div className='w-full'>
        { /* header */}
        <Navbar/>
        <main className='ml-60 p-8 bg-slate-100 dark:bg-slate-950 text-slate-50 min-h-screen mt-16'>
            {children}
        </main>
        { /* Main */}

        </div>

    </div>
  )
}
