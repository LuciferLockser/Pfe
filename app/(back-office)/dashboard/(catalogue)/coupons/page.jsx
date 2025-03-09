import PageHead from '@/components/backoffice/PageHead'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function Coupons() {
  return (
    <div>
    {/*Header */}
    <PageHead title='Coupons' route='/dashboard/coupons/new' linkTitle='Add new Coupon'/>
    {/*Table Actions */}
    {/* Export || Search || Bulk Delete */}
    <TableActions/>
    <div className='py-8'>Table</div>
  </div>
  )
}
