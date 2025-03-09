import PageHead from '@/components/backoffice/PageHead'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function Banners() {
  return (
    <div>
    {/*Header */}
    <PageHead title='Banners' route='/dashboard/banners/new' linkTitle='Add new Banner'/>
    {/*Table Actions */}
    {/* Export || Search || Bulk Delete */}
    <TableActions/>
    <div className='py-8'>Table</div>
  </div>
  )
}
