import { AlignJustify, Bell, CircleX, LogOut, Settings, SquareMousePointer, Sun} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from '../ThemeSwitcherBtn';
import Link from 'next/link';

export default function Navbar({setShowSideBar,ShowSideBar}) {
  return (
    <div className='flex items-center justify-between shadow-lg bg-white dark:bg-slate-800 text-slate-50 h-16 py-8 fixed top-0 w-full px-8 z-50 sm:pr-[20rem]'>
      {/* Icon */}
      <button onClick={()=>setShowSideBar(!ShowSideBar)}  className='text-slate-500'>
        <AlignJustify/>
      </button>
      <Link href={'/dashboard'} className='sm:hidden'>Logo</Link>
      {/* 3 Icons */}
      <div className='flex space-x-3'>
        <ThemeSwitcherBtn/>
        <DropdownMenu>
          <DropdownMenuTrigger type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
                <Bell className='text-slate-500 h-6 w-6'/>
            <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full top-2 end-6">3</div>
          </DropdownMenuTrigger>
            <DropdownMenuContent className='px-4 py-2'>
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                  <Image src={'/profile.JPG'} alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full'/>
                  <div className="flex flex-col space-y-2">
                    <p>Kounouz Najeh Math 6eme is out of stock</p>
                    <div className="flex items-center space-x-2">
                      <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                      <p>1/3/2025 | 3:14 PM</p>
                    </div>
                  </div>
                  <button>
                      <CircleX/>
                    </button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                  <Image src={'/profile.JPG'} alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full'/>
                  <div className="flex flex-col space-y-2">
                    <p>Kounouz Najeh Math 6eme is out of stock</p>
                    <div className="flex items-center space-x-2">
                      <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                      <p>1/3/2025 | 3:14 PM</p>
                    </div>
                  </div>
                  <button>
                      <CircleX/>
                    </button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                  <Image src={'/profile.JPG'} alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full'/>
                  <div className="flex flex-col space-y-2">
                    <p>Kounouz Najeh Math 6eme is out of stock</p>
                    <div className="flex items-center space-x-2">
                      <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                      <p>1/3/2025 | 3:14 PM</p>
                    </div>
                  </div>
                  <button>
                      <CircleX/>
                    </button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={'/profile.JPG'} alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full'/>
          </DropdownMenuTrigger>
            <DropdownMenuContent className='px-4 py-2'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className='flex items-center space-x-2'>
                  <SquareMousePointer className='mr-2 h-4 w-4'/>
                  <span>Dashboard</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className='flex items-center space-x-2'>
                  <Settings className='mr-2 h-4 w-4'/>
                  <span>Edit Profile</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className='flex items-center space-x-2'>
              <LogOut className='mr-2 h-4 w-4'/>
                <span>Logout</span>
                </button>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
