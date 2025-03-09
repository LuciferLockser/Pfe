import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <Heading title='Dashboard Overview'/>
        {/*Large Cards */}
        <LargeCards/>
        {/*Small Cards */}
        <SmallCards/>
        {/*Charts */}
        <DashboardCharts/>
        {/*Recent Orders Table */}
        <div className='mt-8 px-4'>
        <Heading title='Recent Orders'/>
        </div>
        {/*<CustomDataTable/>*/}
    </div>
  )
}
