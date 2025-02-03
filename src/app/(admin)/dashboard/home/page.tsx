'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { PieChart } from "@/components/charts/PieChart"
import { LineChart } from "@/components/charts/LineChart"
import { BarChart } from "@/components/charts/BarChart";

const dataLineChart = [
  {
    name: 'Jan',
    "CPU": 4000,
    "Storage": 4000,
    "Bandwidth": 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    "CPU": 4400,
    "Storage": 3000,
    "Bandwidth": 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    "CPU": 4800,
    "Storage": 2000,
    "Bandwidth": 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    "CPU": 4100,
    "Storage": 2780,
    "Bandwidth": 3908,
    amt: 2000,
  },
  {
    name: 'May',
    "CPU": 4400,
    "Storage": 1890,
    "Bandwidth": 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    "CPU": 4500,
    "Storage": 2390,
    "Bandwidth": 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    "CPU": 4200,
    "Storage": 3490,
    "Bandwidth": 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    "CPU": 4200,
    "Storage": 4000,
    "Bandwidth": 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    "CPU": 4100,
    "Storage": 3000,
    "Bandwidth": 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    "CPU": 4200,
    "Storage": 2000,
    "Bandwidth": 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    "CPU": 4400,
    "Storage": 2780,
    "Bandwidth": 3908,
    amt: 2000,
  },
  {
    name: 'Dic',
    "CPU": 4400,
    "Storage": 1890,
    "Bandwidth": 4800,
    amt: 2181,
  }
];


const PROVIDERS = [
  {
    id: "google-cloud", 
    name: "Google Cloud",
    apis: [
      { name:"Compute Engine", state:"active" },
      { name:"Cloud Storage", state:"paused" },
      { name:"BigQuery", state:"active" },
    ] 
  },
  { 
    id: "azure",
    name: "Azure",
    apis: [
      { name:"Azure Compute REST", state:"active" },
      { name:"Azure Storage REST", state:"active" },
      { name:"Azure Cosmos DB", state:"active" },
    ] 
  },
  { 
    id: "amazon-web-services",
    name: "Amazon Web Services",
    apis: [
      { name:"S3", state:"paused" },
      { name:"EC2", state:"active" },
      { name:"Lambda", state:"active" },
    ] 
  },
  { 
    id: "filecoin",
    name: "Filecoin",
    apis: [
      { name:"Lotus API", state:"active" },
      { name:"Powergate", state:"active" },
    ] 
  },
]

export default function Home() {

  const router = useRouter()

  return (
    <div className="px-10 py-10">


      <p className="text-2xl mb-3 text-title font-bold">Linked Cloud Services Providers</p>          
      
      <div className="flex justify-start gap-5 horizontal-scroll py-3 px-3 bg-white bg-opacity-15 rounded-2xl">
        {
          PROVIDERS.map((provider, i)=>{
            return (
              <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex-shrink-0 w-[25%] bg-black bg-opacity-60 rounded-xl p-4">
                <p className="text-xl text-gray-200 font-bold">{provider.name}</p>   
                <div className="mt-5">
                  <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex justify-between mb-2">
                    <p className="text-base font-bold ">Service</p>   
                    <div className="text-base font-bold ">
                      State
                    </div>
                  </div>
                  <div className="min-h-[150px]">
                    {
                      provider.apis.map((api, j)=>{
                        return(
                          <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex justify-between">
                            <p className="text-base">{api.name}</p>   
                            <div className={`${api.state=="active"&&"text-green-600"} ${api.state=="paused"&&"text-yellow-500"}`}>
                              {api.state}
                            </div>
                          </div>
                        )
                      })
                    }
                    {
                      provider.apis.length>=3 &&
                        <div>
                          <p className="">...5 more</p>
                        </div>
                    }
                  </div>
                  <div className="flex justify-center items-center pt-5 pb-2 cursor-pointer" 
                    onClick={()=>{
                      router.push(`/dashboard/settings/apiKeys?provider=${provider.id}`)
                    }}

                  >
                    <p className="font-bold text-white hover:text-primaryGreen-light">Manage</p>
                  </div>
                </div>       
              </div>
            )
          })
        }
      </div>

      <div className="h-5"></div>

      <div className="py-10">

      <p className="text-2xl text-title font-bold mb-5">Active Contributions Summary</p>          
       {/* <div className="flex justify-between">
         <div className="flex-shrink-0 w-[49%] bg-gray-100 rounded-xl p-4">
           <p className="text-xl text-gray-700 font-bold">Storage usage</p>          
           <PieChart />
         </div>
         <div className="flex-shrink-0 w-[49%] bg-gray-100 rounded-xl p-4">
           <p className="text-xl text-gray-700 font-bold">Computational Power</p>          
           <BarChart />
         </div>
       </div> */}
       {/* <div className="h-5"></div> */}
   
       <div className="flex justify-between">
         <div className="flex-shrink-0 w-[49%] bg-black bg-opacity-50 rounded-xl p-4 shadow-sm shadow-white">
           <p className="text-xl text-gray-400 font-bold mb-2">CPU</p>          
           <LineChart data={dataLineChart} lines={[{ dataKey:"CPU", stroke:"#00BB77" }]} />
         </div>
         <div className="flex-shrink-0 w-[49%] bg-black bg-opacity-50 rounded-xl p-4 shadow-sm shadow-white">
           <p className="text-xl text-gray-400 font-bold mb-2">Bandwidth</p>          
           <LineChart data={dataLineChart} lines={[{ dataKey:"Bandwidth", stroke:"#8884d8" }]} />
         </div>
       </div>
       <div className="mt-5 flex-shrink-0 w-[49%] bg-black bg-opacity-50 rounded-xl p-4 shadow-sm shadow-white">
           <p className="text-xl text-gray-400 font-bold">Storage usage</p>          
           <PieChart />
        </div>

     </div>

    </div>
  )
}

