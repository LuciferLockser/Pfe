import PageHead from '@/components/backoffice/PageHead'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function Stores() {
  return (
    <div>
    {/*Header */}
    <PageHead title='Stores' route='/dashboard/stores/new' linkTitle='Add new Store'/>
    {/*Table Actions */}
    {/* Export || Search || Bulk Delete */}
    <TableActions/>
    <div className='py-8'>Table</div>
  </div>
  )
}
