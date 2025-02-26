"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

// ✅ Enregistrer ChartJS une seule fois
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklySalesChart() {
  const [activeTab, setActiveTab] = useState("sales");

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Weekly Performance" },
    },
  };

  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const salesData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: labels.map(() => faker.number.int({ min: 500, max: 5000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const ordersData = {
    labels,
    datasets: [
      {
        label: "Orders",
        data: labels.map(() => faker.number.int({ min: 50, max: 1000 })),
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
      },
    ],
  };

  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">Weekly Charts</h2>

      <div className="p-4">
        {/* Tabs */}
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <button
              onClick={() => setActiveTab("sales")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "sales"
                  ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
            >
              Sales
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab("orders")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "orders"
                  ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
            >
              Orders
            </button>
          </li>
        </ul>

        {/* Content to Display */}
        <div className="mt-4 text-white">
          {activeTab === "sales" && <Line options={options} data={salesData} />}
          {activeTab === "orders" && <Line options={options} data={ordersData} />}
        </div>
      </div>
    </div>
  );
}
