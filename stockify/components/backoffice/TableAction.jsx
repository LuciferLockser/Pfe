import React from 'react'
import { Download, Search, Trash2 } from "lucide-react";


export default function TableAction() {
  return (
    <div className="flex justify-between py-6 px-12 bg-slate-700 rounded-lg items-center gap-8">
    {/* Export Button */}
    <button className="flex items-center gap-2 text-white bg-lime-600 hover:bg-lime-700 
px-4 py-2 rounded-lg text-sm font-medium min-w-[100px]">
<Download className="w-5 h-5" />
<span>Export</span>
</button>


    {/* Search */}
    <div className=" flex-grow   ">
      <label htmlFor="table-search" className="sr-only">Search</label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="table-search"
          className="block pt-2 pl-10 pr-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 
          focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 w-3/4 "
          placeholder="Search for items"
        />
      </div>
    </div>

    {/* Delete Button */}
    <button className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center">
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
   
  )
}
