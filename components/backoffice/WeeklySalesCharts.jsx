'use client'
import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

export default function WeeklySalesCharts() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];

    const tabs = [
        {
            title: "Sales",
            type: "sales",
            data: {
                labels,
                datasets: [
                    {
                        label: 'Sales',
                        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(22, 163, 74)',
                        backgroundColor: 'rgba(22, 163, 74, 0.5)',
                    },
                ],
            },
            icon: (
                <svg className="w-4 h-4 me-2 text-green-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>),
            activeColor: "text-green-600 border-green-600 dark:text-green-500 dark:border-green-500",
        },
        {
            title: "Orders",
            type: "orders",
            data: {
                labels,
                datasets: [
                    {
                        label: 'Orders',
                        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(251, 146, 60)',
                        backgroundColor: 'rgba(251, 146, 60, 0.5)',
                    },
                ],
            },
            icon: (
                <svg className="w-4 h-4 me-2 text-orange-400 group-hover:text-orange-500 dark:text-orange-500 dark:group-hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>),
            activeColor: "text-orange-600 border-orange-600 dark:text-orange-500 dark:border-orange-500",
        },
    ];

    const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

    return (
        <div className='bg-slate-50 shadow-xl dark:bg-slate-700 p-8 rounded-lg'>
            <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Weekly Sales</h2>
            <div className="p-4">
                {/* Tabs */}
                <div className="border-b border-gray-400 dark:border-gray-300">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-200 dark:text-gray-400">
                        {
                            tabs.map((tab, i) => (
                                <li className="me-2" key={i}>
                                    <button
                                        onClick={() => setChartToDisplay(tab.type)}
                                        className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group 
                                            ${chartToDisplay === tab.type
                                                ? tab.activeColor
                                                : "border-transparent text-slate-800 dark:text-slate-500 hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100"
                                            }`}
                                    >
                                        {tab.icon}
                                        {tab.title}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Content to display */}
                {tabs.map((tab, i) => (
                    chartToDisplay === tab.type ? (
                        <Line key={i} options={options} data={tab.data} />
                    ) : null
                ))}
            </div>
        </div>
    );
}