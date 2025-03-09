import React from 'react'
import LargeCard from './LargeCard'
import { CalendarArrowDown, CalendarCheck2, Layers, Layers2 } from 'lucide-react'

export default function LargeCards() {
  const orderStats =[
    {
    period:'Today Orders',
    sales:110000,
    color:'bg-green-600',
    icon:Layers2
  },
  {
    period:'Yesterday Orders',
    sales:130000,
    color:'bg-blue-600',
    icon:Layers
  },
  {
    period:'This Month',
    sales:3000000,
    color:'bg-orange-600',
    icon:CalendarArrowDown
  },
  {
    period:'This Year',
    sales:36000000,
    color:'bg-purple-600',
    icon:CalendarCheck2
  },
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      {
        orderStats.map((data,i)=>{
          return(
            <LargeCard data={data} key={i}/>
          )
        })
      }
    </div>
  )
}