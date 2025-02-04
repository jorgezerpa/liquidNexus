'use client'
import { LineChart } from "@/components/charts/LineChart"

const dataLineChart = [
  {
    name: '20/01',
    "amount": 4000,
    amt: 2400,
  },
  {
    name: '21/01',
    "amount": 1398,
    amt: 2210,
  },
  {
    name: '22/01',
    "amount": 9800,
    amt: 2290,
  },
  {
    name: '23/01',
    "amount": 3908,
    amt: 2000,
  },
  {
    name: '24/01',
    "amount": 4800,
    amt: 2181,
  },
  {
    name: '25/01',
    "amount": 3800,
    amt: 2500,
  },
  {
    name: '25/01',
    "amount": 4300,
    amt: 2100,
  },
  {
    name: '26/01',
    "amount": 2400,
    amt: 2400,
  },
  {
    name: '27/01',
    "amount": 1398,
    amt: 2210,
  },
  {
    name: '28/01',
    "amount": 9800,
    amt: 2290,
  },
  {
    name: '29/01',
    "amount": 3908,
    amt: 2000,
  },
  {
    name: '31/01',
    "amount": 4800,
    amt: 2181,
  }
];

const recentActivity = [
  {
    activity: "Contributed 5GB bandwidth to Node X",
    time: "30s ago",
    info1: "Reward amount: 0.04 $NEXUS",
    info2: "Paid to: 0x334...234",
  },
  {
    activity: "Contributed 5GB bandwidth to hyperliquid nodes syncronization",
    time: "47s ago",
    info1: "Reward amount: 0.23 $NEXUS",
    info2: "Paid to: 0x334...234",
  },
  {
    activity: "Disable Google Cloud Storage API",
    time: "2min ago",
    info1: "Connected since: 01/01/2025",
    info2: "Generated amount API contributions: 300$",
  },
  {
    activity: "Enable AWS S3 API for storage contributions",
    time: "wednesday",
    info1: "Storage limit: 2GB",
    info2: "",
  },
  {
    activity: "Contributed 5GB bandwidth to Node X",
    time: "30s ago",
    info1: "Reward amount: 0.04 $NEXUS",
    info2: "Paid to: 0x334...234",
  },
  {
    activity: "Contributed 5GB bandwidth to hyperliquid nodes syncronization",
    time: "47s ago",
    info1: "Reward amount: 0.23 $NEXUS",
    info2: "Paid to: 0x334...234",
  },
  {
    activity: "Disable Google Cloud Storage API",
    time: "2min ago",
    info1: "Connected since: 01/01/2025",
    info2: "Generated amount API contributions: 300$",
  },
  {
    activity: "Enable AWS S3 API for storage contributions",
    time: "wednesday",
    info1: "Storage limit: 2GB",
    info2: "",
  },
]

const rewardHistory = [
  {
    reward: "20 USDT",
    paidTo: "0x334...234",
    activity: "Contributed 5GB bandwidth to Node X",
    time: "30s ago",
    info1: "Reward amount: 0.04 $NEXUS",
    info2: "Paid to: 0x334...234",
  },
  {
    reward: "23 $NEXUS",
    paidTo: "0x334...234",
    activity: "Contributed 5GB bandwidth to hyperliquid nodes syncronization",
    time: "47s ago",
    info1: "Reward amount: 0.23 $NEXUS",
    info2: "Paid to: 0x334...234",
  },
  {
    reward: "45 $NEXUS",
    paidTo: "0x334...234",
    activity: "Disable Google Cloud Storage API",
    time: "2min ago",
    info1: "Connected since: 01/01/2025",
    info2: "Generated amount API contributions: 300$",
  },
  {
    reward: "22 USDT",
    paidTo: "0x334...234",
    activity: "Enable AWS S3 API for storage contributions",
    time: "wednesday",
    info1: "Storage limit: 2GB",
    info2: "",
  },
]

export default function Rewards() {
  return (
    <div className="py-5 px-5">
      
      <div className="flex justify-between flex-col xl:flex-row gap-3 xl:gap-0">
        <div className="flex-shrink-0 w-[100%] xl:w-[69%] bg-black bg-opacity-40 shadow-sm shadow-white rounded-xl p-4">
          <p className="text-4xl md:text-5xl font-bold text-title">$1565.55</p>
          <p className="text-xs md:text-xl text-green-300 mb-10">+2% increase per day (last 30d)</p>
          <p className="text-base md:text-xl text-gray-200 font-bold mb-2">Daily revenue</p>          
          <LineChart data={dataLineChart} lines={[{ dataKey:"amount", stroke:"#8884d8" }]} hasLegend={false} />
        </div>
        <div className="w-[100%] xl:w-[29%] h-[500px] vertical-scroll rounded-xl px-3 bg-black bg-opacity-40 shadow-sm shadow-white py-3">
          <p className="text-2xl font-bold text-gray-200">Recent Activity</p>
          <div className="h-5"></div>
          {
            recentActivity.map((activity, j)=>{
              return(
                <div key={"uniquiidforreaawasdlistsactivsummary"+j} className="flex-shrink-0 w-[100%] bg-white bg-opacity-10 rounded-xl px-4 py-1 mb-3">
                  <div className="flex  justify-between mb-4">
                    <p className="text-small md:text-lg text-gray-100">{activity.activity}</p>          
                    <p className="text-sm  flex-shrink-0">{ activity.time }</p>          
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="h-10"></div>

      <div className="flex justify-between">
        <div className="w-[100%]">
          <p className="text-2xl font-bold text-gray-100">Reward History</p>
          <div className="h-5"></div>
          {
            rewardHistory.map((activity, i)=>{
              return(
                <div key={"dfa"+i+"unqiueidforreqwsummaryhistoreuyal"} className="flex-shrink-0 w-[100%] bg-white bg-opacity-10 rounded-xl px-4 py-1 mb-3">
                  <div className="flex  justify-between mb-2">
                    <p className="text-base sm:text-lg text-gray-100 font-bold"><span className="font-bold">Reward:</span> {activity.reward}</p>          
                    <p className="text-base sm:text-xl text-gray-200 ">{ activity.time }</p>          
                  </div>
                  <div className="flex  justify-between">
                    <p className="text-base sm:text-lg"><span className="font-bold">paid to:</span> {activity.paidTo}</p>          
                  </div>
                  <div className="flex  justify-between">
                    <p className="text-base sm:text-lg"><span className="font-bold">Contribution:</span> {activity.activity}</p>          
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      
      <div className="h-72"></div>
    
    </div>
  )
}