import { AlignJustify, Bell, LayoutDashboard, Settings, LogOut, User } from "lucide-react"; // Ajout de User
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";

export default function Navbar({ setShowSidebar, showSidebar }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-16 py-4 fixed top-0 left-0 w-full px-6 md:px-8 z-50">
      
      {/* Menu Button pour ouvrir la Sidebar */}
      <button
        className="text-lime-700 dark:text-lime-500 p-2 rounded-md flex items-center justify-center"
        aria-label="Open menu"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <AlignJustify className="w-6 h-6" />
      </button>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <ThemeSwitcherBtn />

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-lg">
              <Bell className="text-green-600" />
              <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                20
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 p-4">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Array(3).fill(null).map((_, index) => (
              <DropdownMenuItem key={index}>
                <div className="flex items-center w-full space-x-3">
                  <img src="/me.png" alt="User" className="w-8 h-8 rounded-full" />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Stock Out</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="px-3 py-0.5 bg-red-700 text-white rounded-full">Stock Out</span>
                      <span>Feb 26, 2025 - 18:04</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profil */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-lg">
            <img src="/me.png" alt="Profile" className="w-10 h-10 rounded-full object-cover" />            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 p-2">
            <DropdownMenuLabel>Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 w-4 h-4" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 w-4 h-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 w-4 h-4 text-red-600" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
