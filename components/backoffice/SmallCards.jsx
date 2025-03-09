import React from 'react'
import SmallCard from './SmallCard'
import { Boxes, PackageCheck, PackageSearch, ShoppingCart, Truck } from 'lucide-react'

export default function SmallCards() {
  const orderStats =[
    {
    title:'Total Order',
    number:130,
    iconBg:'bg-green-600',
    icon: Boxes
  },
  {
    title:'Pending Orders',
    number:40,
    iconBg:'bg-blue-600',
    icon: PackageSearch
  },
  {
    title:'Processing Orders',
    number:30,
    iconBg:'bg-orange-600',
    icon: Truck
  },
  {
    title:'Deliverd Orders',
    number:60,
    iconBg:'bg-purple-600',
    icon: PackageCheck
  },
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      {
        orderStats.map((data, i)=>{
          return(
            <SmallCard key={i} data={data}/>
          )
        })
      }
    </div>
  )
}
