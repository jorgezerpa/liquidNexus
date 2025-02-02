'use client'
import { PieChart } from "@/components/charts/PieChart"
import { BarChart } from "@/components/charts/BarChart"
import { LineChart } from "@/components/charts/LineChart"

const dataLineChart = [
  {
    name: 'Jan',
    "Storage": 4000,
    "Band Width": 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    "Storage": 3000,
    "Band Width": 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    "Storage": 2000,
    "Band Width": 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    "Storage": 2780,
    "Band Width": 3908,
    amt: 2000,
  },
  {
    name: 'May',
    "Storage": 1890,
    "Band Width": 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    "Storage": 2390,
    "Band Width": 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    "Storage": 3490,
    "Band Width": 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    "Storage": 4000,
    "Band Width": 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    "Storage": 3000,
    "Band Width": 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    "Storage": 2000,
    "Band Width": 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    "Storage": 2780,
    "Band Width": 3908,
    amt: 2000,
  },
  {
    name: 'Dic',
    "Storage": 1890,
    "Band Width": 4800,
    amt: 2181,
  }
];

export default function Home() {
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
          <LineChart data={dataLineChart} lines={[{ dataKey:"Band Width", stroke:"#8884d8" }, { dataKey:"Storage", stroke:"#82ca9d" }]} />
        </div>
      </div>

    </div>
  )
}