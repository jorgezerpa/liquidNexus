'use client'
import { PieChart } from "@/components/charts/PieChart"
import { BarChart } from "@/components/charts/BarChart"
import { LineChart } from "@/components/charts/LineChart"

export default function CloudInsights() {
  return (
    <div className="px-10 py-10">

      <div className="flex justify-between">
        <div className="flex-shrink-0 w-[49%] bg-gray-100 rounded-xl p-4">
          <p className="text-xl text-gray-700 font-bold">Storage usage</p>          
          <PieChart />
        </div>
        <div className="flex-shrink-0 w-[49%] bg-gray-100 rounded-xl p-4">
          <p className="text-xl text-gray-700 font-bold">Computational Power</p>          
          <BarChart />
        </div>
      </div>

      <div className="h-5"></div>
      
      <div className="flex">
        <div className="flex-shrink-0 w-[100%] bg-gray-100 rounded-xl p-4">
          <p className="text-xl text-gray-700 font-bold mb-2">Timeline of Consumed resources</p>          
          <LineChart />
        </div>
      </div>

    </div>
  )
}