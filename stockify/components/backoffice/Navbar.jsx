import { AlignJustify, Bell, LayoutDashboard, Settings, LogOut, X } from "lucide-react";
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

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-16 py-4 fixed top-0 w-full px-6 md:px-8 z-50 lg:pl-[250px]">
      
      {/* Menu Button */}
      <button className="text-lime-700 dark:text-lime-500" aria-label="Open menu">
        <AlignJustify />
      </button>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <ThemeSwitcherBtn />

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-2 rounded-lg focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="text-green-600" />
              <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                20
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 p-4">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Liste des notifications */}
            {Array(3).fill(null).map((_, index) => (
              <div key={index}>
                <DropdownMenuItem>
                  <div className="flex items-center w-full space-x-3">
                    <img src="/me.png" alt="User profile" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">Stock Out</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span className="px-3 py-0.5 bg-red-700 text-white rounded-full">Stock Out</span>
                        <span>Feb 26, 2025 - 18:04</span>
                      </div>
                    </div>
                    <div className="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer">
                      <X size={16} />
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button aria-label="User profile">
              <img src="/me.png" alt="User profile" className="w-8 h-8 rounded-full" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 p-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2 w-full cursor-pointer">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2 w-full cursor-pointer">
                <Settings className="h-4 w-4" />
                <span>Edit Profile</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center space-x-2 w-full cursor-pointer">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
