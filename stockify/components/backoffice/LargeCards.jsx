import React from 'react'
import LargeCard from './LargeCard'
import { Key } from 'lucide-react'

export default function LargeCards() {
    const orderStats=[
        {
            periode:"Today Orders",
            sales:110000,
            color:"bg-green-600"
        },
        {
            periode:"Yesterday Orders",
            sales:130000,
            color:"bg-blue-600"
        },
        {
            periode:"This Month",
            sales:300000,
            color:"bg-orange-600"
        },
        {
            periode:"All-Time Sales",
            sales:500000,
            color:"bg-purple-600"
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {
            orderStats.map((item,i)=>{
                return( 
                <LargeCard className="bg-green-600" data={item} Key={i}/>
            )
            })
        }

    </div>
  )
}
