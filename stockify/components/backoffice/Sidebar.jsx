"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutGrid, Users, ShoppingCart, Settings, ChevronDown, ChevronUp, 
  Package, Tag, List, Percent, Truck, Warehouse, ExternalLink, LibraryBig, 
  ScanSearch
} from 'lucide-react';

// Définition des liens du sidebar
const sidebarLinks = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { title: "Customers", href: "/dashboard/customers", icon: Users },
  { title: "Orders", href: "/dashboard/orders", icon: Truck },
  { title: "Markets", href: "/dashboard/markets", icon: Warehouse },
  { title: "Library", href: "/dashboard/library", icon: LibraryBig },
  { title: "Our Staff", href: "/dashboard/staff", icon: Users },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
  { title: "Online Store", href: "/dashboard/online-store", icon: ExternalLink }
];

const catalogLinks = [
  { title: "Products", href: "/dashboard/products", icon: List },
  { title: "Categories", href: "/dashboard/categories", icon: Tag },
  { title: "Attributes", href: "/dashboard/attributes", icon: Percent },
  { title: "Coupons", href: "/dashboard/coupons", icon: ScanSearch }
];

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Overlay pour fermer la Sidebar quand on clique en dehors */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      <div className={`fixed top-0 left-0 h-full w-60 dark:bg-slate-700 bg-white text-slate-800 dark:text-slate-50 shadow-md z-50 transition-transform duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
        
        {/* Logo */}
        <div className="flex justify-center py-6">
          <Image src="/logo.png" alt="logo" width={120} height={40} />
        </div>

        {/* Menu */}
        <div className="space-y-2 flex flex-col mt-14">

          {/* Catalogue avec menu déroulant */}
          <button
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className="flex items-center justify-between px-6 py-3 hover:bg-slate-600 w-full text-left"
            aria-expanded={isCatalogOpen}
          >
            <div className="flex items-center space-x-3">
              <Package className="w-5 h-5" />
              <span>Catalogue</span>
            </div>
            {isCatalogOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {/* Sous-menu Catalogue */}
          <div className={`pl-12 space-y-2 transition-all duration-300 ${isCatalogOpen ? "block opacity-100" : "hidden opacity-0"}`}>
            {catalogLinks.map((item, i) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={i} href={item.href} className={`flex items-center space-x-3 px-6 py-2 border-l-8 hover:bg-slate-600 ${isActive ? "border-l-4 border-green-600 text-green-500" : ""}`}>
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Liens dynamiques */}
          {sidebarLinks.map((item, i) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={i} 
                href={item.href} 
                onClick={() => setShowSidebar(false)} 
                className={`flex items-center space-x-3 px-6 py-2 border-l-8 hover:bg-slate-600 ${isActive ? "border-l-4 border-green-600 text-green-500" : ""}`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Bouton de déconnexion */}
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
