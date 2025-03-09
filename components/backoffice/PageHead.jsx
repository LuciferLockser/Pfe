import React from 'react'
import Heading from './Heading'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function PageHead({title,linkTitle,route}) {
  return (
    <div className="flex justify-between py-4 mb-4">
      <Heading title={title}/>
      <Link className='text-white bg-[#f97316] hover:bg-[#FF4500]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#FF4500]/90 me-2 mb-2 space-x-2' href={route}>
        <Plus/>
        <span>{linkTitle}</span>
      </Link>
    </div>
  )
}
