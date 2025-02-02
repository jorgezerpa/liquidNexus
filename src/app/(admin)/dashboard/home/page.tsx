'use client'
import { useRouter, useSearchParams } from "next/navigation"

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


      <p className="text-xl text-gray-700 font-bold">Linked Cloud Services Providers</p>          
      
      <div className="flex justify-start gap-5 horizontal-scroll py-3 px-3 bg-gray-100 rounded-2xl">
        {
          PROVIDERS.map((provider, i)=>{
            return (
              <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex-shrink-0 w-[25%] bg-gray-200 rounded-xl p-4">
                <p className="text-xl text-gray-700 font-bold">{provider.name}</p>   
                <div className="mt-5">
                  <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex justify-between mb-2">
                    <p className="text-base font-bold text-black">Service</p>   
                    <div className="text-base font-bold text-black">
                      State
                    </div>
                  </div>
                  {
                    provider.apis.map((api, j)=>{
                      return(
                        <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex justify-between">
                          <p className="text-base text-gray-600">{api.name}</p>   
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
                        <p className="text-gray-600">...5 more</p>
                      </div>
                  }
                  <div className="flex justify-center items-center pt-5 pb-2 cursor-pointer" 
                    onClick={()=>{
                      router.push(`/dashboard/settings/apiKeys?provider=${provider.id}`)
                    }}

                  >
                    <p>Manage</p>
                  </div>
                </div>       
              </div>
            )
          })
        }
      </div>

      <div className="h-5"></div>
      
    </div>
  )
}


















// 'use client'
// import { PieChart } from "@/components/charts/PieChart"
// import { BarChart } from "@/components/charts/BarChart"
// import { LineChart } from "@/components/charts/LineChart"

// const dataLineChart = [
//   {
//     name: 'Jan',
//     "Storage": 4000,
//     "Band Width": 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Feb',
//     "Storage": 3000,
//     "Band Width": 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Mar',
//     "Storage": 2000,
//     "Band Width": 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Apr',
//     "Storage": 2780,
//     "Band Width": 3908,
//     amt: 2000,
//   },
//   {
//     name: 'May',
//     "Storage": 1890,
//     "Band Width": 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Jun',
//     "Storage": 2390,
//     "Band Width": 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Jul',
//     "Storage": 3490,
//     "Band Width": 4300,
//     amt: 2100,
//   },
//   {
//     name: 'Aug',
//     "Storage": 4000,
//     "Band Width": 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Sep',
//     "Storage": 3000,
//     "Band Width": 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Oct',
//     "Storage": 2000,
//     "Band Width": 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Nov',
//     "Storage": 2780,
//     "Band Width": 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Dic',
//     "Storage": 1890,
//     "Band Width": 4800,
//     amt: 2181,
//   }
// ];

// export default function Home() {
//   return (
//     <div className="px-10 py-10">

//       <div className="flex justify-between">
//         <div className="flex-shrink-0 w-[49%] bg-gray-100 rounded-xl p-4">
//           <p className="text-xl text-gray-700 font-bold">Storage usage</p>          
//           <PieChart />
//         </div>
//         <div className="flex-shrink-0 w-[49%] bg-gray-100 rounded-xl p-4">
//           <p className="text-xl text-gray-700 font-bold">Computational Power</p>          
//           <BarChart />
//         </div>
//       </div>

//       <div className="h-5"></div>
      
//       <div className="flex">
//         <div className="flex-shrink-0 w-[100%] bg-gray-100 rounded-xl p-4">
//           <p className="text-xl text-gray-700 font-bold mb-2">Timeline of Consumed resources</p>          
//           <LineChart data={dataLineChart} lines={[{ dataKey:"Band Width", stroke:"#8884d8" }, { dataKey:"Storage", stroke:"#82ca9d" }]} />
//         </div>
//       </div>

//     </div>
//   )
// }