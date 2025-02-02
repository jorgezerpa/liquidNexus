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
      
      <div className="flex justify-between">
        <div className="flex-shrink-0 w-[69%] bg-gray-100 rounded-xl p-4">
          <p className="text-5xl font-bold">$1565.55</p>
          <p className="text-xl text-green-600 mb-10">+2% increase per day (last 30d)</p>
          <p className="text-xl text-gray-700 font-bold mb-2">Daily revenue</p>          
          <LineChart data={dataLineChart} lines={[{ dataKey:"amount", stroke:"#8884d8" }]} hasLegend={false} />
        </div>
        <div className="w-[29%] bg-gray-50 h-[500px] overflow-y-scroll rounded-xl px-3">
          <p className="text-2xl font-bold">Recent Activity</p>
          <div className="h-5"></div>
          {
            recentActivity.map((activity, i)=>{
              return(
                <div className="flex-shrink-0 w-[100%] bg-gray-100 rounded-xl px-4 py-1 mb-3">
                  <div className="flex  justify-between mb-4">
                    <p className="text-lg text-gray-700 font-bold">{activity.activity}</p>          
                    <p className="text-xl text-gray-700 ">{ activity.time }</p>          
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
          <p className="text-2xl font-bold">Reward History</p>
          <div className="h-5"></div>
          {
            rewardHistory.map((activity, i)=>{
              return(
                <div className="flex-shrink-0 w-[100%] bg-gray-100 rounded-xl px-4 py-1 mb-3">
                  <div className="flex  justify-between mb-2">
                    <p className="text-lg text-gray-700 font-bold">Reward: {activity.reward}</p>          
                    <p className="text-xl text-gray-700 ">{ activity.time }</p>          
                  </div>
                  <div className="flex  justify-between">
                    <p className="text-lg text-gray-700">paid to: {activity.paidTo}</p>          
                  </div>
                  <div className="flex  justify-between">
                    <p className="text-lg text-gray-700">Contribution: {activity.activity}</p>          
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    
    </div>
  )
}