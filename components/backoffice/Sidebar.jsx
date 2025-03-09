'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTheme } from "next-themes";
import logoDark from "../../public/logo-dark.svg";
import logoLight from "../../public/logo-light.svg";
import { Archive, BadgePercent, BookImage, BringToFront, Building2, ChevronDown, ChevronRight, Handshake, LayoutGrid, LibraryBig, LogOut, MonitorPlay, Settings, ShoppingBag, SlidersHorizontal, Store, UserPen, Users, Wallet } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
export default function SideBar({showSideBar,setShowSideBar}) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const pathname = usePathname()

  const [openMenu,setOpenMenu]=useState(false)

  const catalogLinks =[
    {
      title:'Products',
      icon:LibraryBig,
      route:'/dashboard/products'
    },
    {
      title:'Categories',
      icon:Archive,
      route:'/dashboard/categories'
    },
    {
      title:'Coupons',
      icon:BadgePercent,
      route:'/dashboard/coupons'
    },
    {
      title:'Store Banners',
      icon:MonitorPlay,
      route:'/dashboard/banners'
    },
  ]
  const sidebarLinks =[
    {
      title:'Customers',
      icon:Users,
      route:'/dashboard/customers'
    },
    {
      title:'Stores',
      icon:Store,
      route:'/dashboard/stores'
    },
    {
      title:'Sellers',
      icon:Handshake,
      route:'/dashboard/sellers'
    },
    {
      title:'Orders',
      icon:BringToFront,
      route:'/dashboard/orders'
    },
    {
      title:'Staff',
      icon:UserPen,
      route:'/dashboard/staff'
    },
    {
      title:'Community',
      icon:Building2,
      route:'/dashboard/community'
    },
    {
      title:'Wallet',
      icon:Wallet,
      route:'/dashboard/wallet'
    },
    {
      title:'Settings',
      icon:Settings,
      route:'/dashboard/settings'
    },
    {
      title:'Online Store',
      icon:ShoppingBag,
      route:'/'
    },
  ]
  return (
<div className={`${showSideBar ? 'block' : 'hidden sm:block'} mt-16 sm:mt-0 dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md overflow-y-scroll`}>
<Link onClick={()=>setShowSideBar(false)} className='px-6' href="/dashboard">
          <Image src={currentTheme === "dark" ? logoDark : logoLight} alt='shopencil logo' className='ml-6 w-52' priority/>
        </Link>
          <div className='space-y-3 flex flex-col'>
              <Link onClick={()=>setShowSideBar(false)} href="/dashboard" className={pathname=='/dashboard'?'flex items-center space-x-3 px-6 py-3 border-l-8 bg-slate-300 bg-opacity-30 dark:bg-opacity-30 border-orange-600 dark:bg-slate-800 text-orange-600 dark:border-orange-500 dark:text-orange-500':'flex items-center space-x-3 px-6 py-3'}>
                <LayoutGrid/>
                <span>Dashboard</span>
              </Link>
          <Collapsible className='px-6'>
            <CollapsibleTrigger className='flex items-center space-x-20  py-3' onClick={()=>setOpenMenu(!openMenu)}>
                <div className="flex items-center space-x-3">
                  <BookImage/>
                  <span>Catalog</span>
                </div>
                {
                  openMenu?<ChevronDown width={20} height={20}/>:<ChevronRight width={20} height={20}/>
                }
            </CollapsibleTrigger>
            <div className='ml-6'>
            <CollapsibleContent className='rounded-lg dark:bg-slate-800 bg-slate-100'>
            {
              catalogLinks.map((item,i)=>{
                const Icon = item.icon
                return(
                  <Link onClick={()=>setShowSideBar(false)} key={i} href={item.route} className={item.route==pathname?'flex items-center rounded-lg space-x-3 px-6 py-3 text-sm border-l-4 bg-slate-300 bg-opacity-30 dark:bg-opacity-30 border-orange-600  dark:bg-slate-950 text-orange-600 dark:border-orange-500 dark:text-orange-500':'flex items-center rounded-lg text-sm space-x-3 px-6 py-3'}>
                  <Icon className='w-4 h-4'/>
                  <span>{item.title}</span>
            </Link>
                )
              })
            }
            </CollapsibleContent>
            </div>
          </Collapsible>
          {
            sidebarLinks.map((item,i)=>{
              const Icon = item.icon
              return(
                <Link onClick={()=>setShowSideBar(false)} key={i} href={item.route} className={item.route==pathname?'flex items-center space-x-3 px-6 py-3 border-l-8 bg-slate-300 bg-opacity-30 dark:bg-opacity-30 border-orange-600 dark:bg-slate-800 text-orange-600 dark:border-orange-500 dark:text-orange-500':'flex items-center space-x-3 px-6 py-3'}>
                <Icon/>
                <span>{item.title}</span>
          </Link>
              )
            })
          }
          <div className="px-6 py-2">
          <button className=' bg-orange-600 rounded-md flex items-center space-x-3 px-12 py-3'>
            <LogOut/>
            <span className=''>Log Out</span>
          </button>
          </div>
        </div>
    </div>
  )
}
