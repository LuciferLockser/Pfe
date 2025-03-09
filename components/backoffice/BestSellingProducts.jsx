'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProducts() {
    const data = {
        labels: ['Writing Tools', 'Paper Products', 'Books & Stories', 'Office Supplies', 'Art/Craft Supplies', 'School Supplies', 'Technology & Accessories', 'Gifts & Games'],
        datasets: [
          {
            label: 'Sales',
            data: [32, 46, 41, 3, 11, 21, 21],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 105, 180, 0.7)'  /* Hot Pink */

            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 105, 180, 1)'  /* Hot Pink */

            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='bg-slate-50 shadow-xl dark:bg-slate-700 p-8 rounded-lg'>
        <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Best Selling Charts</h2>
        {/* Chart */}
        
        <div className="p-4">
        <Pie data={data}/>
        </div>
    </div>
  )
}
