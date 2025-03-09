import PageHead from '@/components/backoffice/PageHead'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function Sellers() {
  return (
    <div>
    {/*Header */}
    <PageHead title='Sellers' route='/dashboard/sellers/new' linkTitle='Add new Seller'/>
    {/*Table Actions */}
    {/* Export || Search || Bulk Delete */}
    <TableActions/>
    <div className='py-8'>Table</div>
  </div>
  )
}
