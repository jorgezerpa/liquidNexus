'use client'
import { useEffect, useState } from "react"
import { PieChart } from "@/components/charts/PieChart";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const initialDataLines = [
    {
      name: 'Jan',
      "gb": 2345,
    },
    {
      name: 'Feb',
      "gb": 2245,
    },
    {
      name: 'Mar',
      "gb": 2145,
    },
    {
      name: 'Apr',
      "gb": 2245,
    },
    {
      name: 'May',
      "gb": 2345,
    },
    {
      name: 'Jun',
      "gb": 2445,
    },
    {
      name: 'Jul',
      "gb": 2245,
    },
    {
      name: 'Aug',
      "gb": 2243,
    },
    {
      name: 'Sep',
      "gb": 2221,
    },
    {
      name: 'Oct',
      "gb": 2221,
    },
    {
      "gb": 2176,
      name: 'Nov',
    },
    {
      name: 'Dec',
      "gb": 2000,
    }
  ];


const initialLines = [
    { key: 1, dataKey:"gb", stroke:"#8884d8", totalValue: "23 Gbps" }, 
]

export default function Storage() {

    const [selectedGraph,] = useState<number>(1)
    const [, setDataLineChart] = useState<any[]>(initialDataLines)
    const [, setLines] = useState(initialLines)
    const [, setHiddenLines] = useState<number[]>([])

    const [slider1, setSlider1] = useState<number>(50)

    useEffect(()=>{
        if(selectedGraph==1){
            setDataLineChart(initialDataLines)
            setLines(initialLines)
            setHiddenLines([])
        }
        if(selectedGraph==2){
            setDataLineChart(initialDataLines)
            setLines(initialLines)
            setHiddenLines([])
        }
        if(selectedGraph==3){
            setDataLineChart(initialDataLines)
            setLines(initialLines)
            setHiddenLines([])
        }
    }, [selectedGraph])

  return (
    <div className="py-10 px-5">

      <div>
        <p className="mb-5 text-2xl text-title font-bold mt-5">Bandwidth</p>
        <div className="flex">
          <div className="flex-shrink-0 w-[50%] rounded-xl ">
            <p className="mb-5 text-xl text-title">Current Consumption</p>
            {/* <LineChart data={dataLineChart} lines={lines} hasDot={false} /> */}
            <PieChart />
          </div>
          <div className="flex-shrink-0 w-[50%] flex flex-col justify-center  flex-wrap gap-3">
            <div className="mb-5">
              <p className="text-xl text-gray-200">Max. gb</p>
              <div className="h-3 w-[100%]">
                  <Slider value={slider1} onChange={(e)=>setSlider1(e as number)} />
              </div>
              <p className="text-base">{slider1}%</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}