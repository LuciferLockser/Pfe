import PageHead from '@/components/backoffice/PageHead'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function Categories() {
  return (
    <div>
    {/*Header */}
    <PageHead title='Categories' route='/dashboard/categories/new' linkTitle='Add new Category'/>
    {/*Table Actions */}
    {/* Export || Search || Bulk Delete */}
    <TableActions/>
    <div className='py-8'>Table</div>
  </div>
  )
}
