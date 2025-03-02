"use client";
import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className={`flex-1 transition-all duration-300 ${showSidebar ? "ml-60" : "ml-0"}`}>
        {/* Navbar */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        
        {/* Main */}
        <main className="p-8 bg-slate-100 dark:bg-slate-950 text-slate-50  min-h-screen mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
