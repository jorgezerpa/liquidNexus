'use client'
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react";
import Toggle from 'react-toggle'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const PROVIDERS = [
  {
    id: "google-cloud",
    name: "Google Cloud",
    apis: [
      { name: "Compute Engine", state: "active" },
      { name: "Cloud Storage", state: "paused" },
      { name: "BigQuery", state: "active" },
      { name: "Cloud SQL", state: "active" },
      { name: "Cloud Functions", state: "paused" },
      { name: "Cloud Run", state: "active" },
      { name: "App Engine", state: "active" },
      { name: "Kubernetes Engine", state: "paused" },
      { name: "Cloud Spanner", state: "active" },
      { name: "Vertex AI", state: "active" },
    ]
  },
  {
    id: "azure",
    name: "Azure",
    apis: [
      { name: "Azure Compute REST", state: "active" },
      { name: "Azure Storage REST", state: "active" },
      { name: "Azure Cosmos DB", state: "active" },
      { name: "Azure Functions", state: "active" },
      { name: "Azure App Service", state: "paused" },
      { name: "Azure Kubernetes Service", state: "active" },
      { name: "Azure SQL Database", state: "active" },
      { name: "Azure Blob Storage", state: "paused" },
      { name: "Azure Queue Storage", state: "active" },
      { name: "Azure Table Storage", state: "active" },
    ]
  },
  {
    id: "amazon-web-services",
    name: "Amazon Web Services",
    apis: [
      { name: "S3", state: "paused" },
      { name: "EC2", state: "active" },
      { name: "Lambda", state: "active" },
      { name: "RDS", state: "active" },
      { name: "DynamoDB", state: "paused" },
      { name: "CloudFront", state: "active" },
      { name: "CloudWatch", state: "active" },
      { name: "Elastic Beanstalk", state: "paused" },
      { name: "Sagemaker", state: "active" },
      { name: "CloudFormation", state: "active" },
    ]
  },
  {
    id: "filecoin",
    name: "Filecoin",
    apis: [
      { name: "Lotus API", state: "active" },
      { name: "Powergate", state: "active" },
      { name: "Filecoin RPC API", state: "active" },
      { name: "Graphsync", state: "paused" },
      { name: "Bitswap", state: "active" },
      { name: "Market API", state: "active" },
      { name: "Retrieval API", state: "paused" },
      { name: "Storage API", state: "active" },
      { name: "Index API", state: "active" },
      { name: "Chain API", state: "paused" },
    ]
  },
];

const PROVIDERS_MAP = {
  "google-cloud": {
    name: "Google Cloud",
    apis: [
      { name: "Compute Engine", state: "active" },
      { name: "Cloud Storage", state: "paused" },
      { name: "BigQuery", state: "active" },
      { name: "Cloud SQL", state: "active" },
      { name: "Cloud Functions", state: "paused" },
      { name: "Cloud Run", state: "active" },
      { name: "App Engine", state: "active" },
      { name: "Kubernetes Engine", state: "paused" },
      { name: "Cloud Spanner", state: "active" },
      { name: "Vertex AI", state: "active" },
    ]
  },
  "azure": {
    name: "Azure",
    apis: [
      { name: "Azure Compute REST", state: "active" },
      { name: "Azure Storage REST", state: "active" },
      { name: "Azure Cosmos DB", state: "active" },
      { name: "Azure Functions", state: "active" },
      { name: "Azure App Service", state: "paused" },
      { name: "Azure Kubernetes Service", state: "active" },
      { name: "Azure SQL Database", state: "active" },
      { name: "Azure Blob Storage", state: "paused" },
      { name: "Azure Queue Storage", state: "active" },
      { name: "Azure Table Storage", state: "active" },
    ]
  },
  "amazon-web-services": {
    name: "Amazon Web Services",
    apis: [
      { name: "S3", state: "paused" },
      { name: "EC2", state: "active" },
      { name: "Lambda", state: "active" },
      { name: "RDS", state: "active" },
      { name: "DynamoDB", state: "paused" },
      { name: "CloudFront", state: "active" },
      { name: "CloudWatch", state: "active" },
      { name: "Elastic Beanstalk", state: "paused" },
      { name: "Sagemaker", state: "active" },
      { name: "CloudFormation", state: "active" },
    ]
  },
  "filecoin": {
    name: "Filecoin",
    apis: [
      { name: "Lotus API", state: "active" },
      { name: "Powergate", state: "active" },
      { name: "Filecoin RPC API", state: "active" },
      { name: "Graphsync", state: "paused" },
      { name: "Bitswap", state: "active" },
      { name: "Market API", state: "active" },
      { name: "Retrieval API", state: "paused" },
      { name: "Storage API", state: "active" },
      { name: "Index API", state: "active" },
      { name: "Chain API", state: "paused" },
    ]
  },
};

let allowed_services = ["google-cloud","filecoin","azure","amazon-web-services"]

let provider_title_map:any = {
  "amazon-web-services":"Amazon Web Sevices",
  "azure":"Azure",
  "google-cloud":"Google Cloud",
  "filecoin":"Filecoin"
}

export default function Settings() {
  const router = useRouter()
  const params = useSearchParams()
  const provider = params.get("provider") as string

  return (
    <div className="px-5 py-5">
        {
          !(allowed_services.includes(provider)) && (
            <div>
              <p className="text-4xl text-title font-bold mb-5">Available Cloud Providers</p>   
              <div className="flex gap-3 flex-wrap">
                {
                  PROVIDERS.map((provider, i)=>{
                    return (
                      <div onClick={()=>router.push(`/dashboard/settings/apiKeys?provider=${provider.id}`)} key={provider.name+"homeproviderslistoverviewdsaa"+i} className="cursor-pointer flex-shrink-0 w-[25%] bg-black bg-opacity-60 rounded-xl p-4 shadow-sm shadow-white">
                        <p className="text-xl text-gray-200 font-bold">{provider.name}</p>   
                        <div className="mt-5">
                          <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex justify-between mb-2">
                            <p className="text-base text-green-600 font-bold">Active</p>   
                            <div className="text-base  ">
                              10
                            </div>
                          </div>
                          <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex justify-between mb-2">
                            <p className="text-base font-bold">Idle</p>   
                            <div className="text-base ">
                              2
                            </div>
                          </div>
                          <div key={provider.name+"homeproviderslistoverviewdsaa"+i} className="flex justify-between mb-2">
                            <p className="text-base text-yellow-500 font-bold">Paused</p>   
                            <div className="text-base  ">
                              0
                            </div>
                          </div>
                        </div>       
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }
        {
          (allowed_services.includes(provider)) && (
            <div>
              <p className="text-base text-gray-300 cursor-pointer py-4 flex gap-1">
                <span onClick={()=>{router.push("/dashboard/settings/apiKeys")}}>API Keys</span><span>&gt;</span><span onClick={()=>{}}>{provider_title_map[provider]}</span>
              </p>   
              <div className="min-h-[150px]">
                <p className="text-3xl text-title font-bold mb-5">APIs</p>   
                {
                  PROVIDERS_MAP[provider as "google-cloud"||"filecoin"||"azure"||"amazon-web-services"].apis.map((api, j)=>{
                    return(
                      <div key={"homeproviderslistoverviewdsaa"+j+api.name}>
                        <API api={api} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }
    </div>
  )
}

function API({api}:any) {
  const [checked, setChecked] = useState(api.state=="active")
  const [show, setShow] = useState(false)

  return (
    <div className="flex justify-start mb-20">
      <p className="text-base w-[150px]">{api.name}</p>   
      <div className="flex gap-1 items-center mr-6">
        <Toggle
          id='cheese-status'
          // defaultChecked={false}
          checked={checked}
          onChange={()=>{setChecked(!checked)}} 
        />
        <label htmlFor='cheese-status' className={`${checked&&"text-green-600"} ${!checked&&"text-yellow-500"}`}>{checked?"active":"paused"}</label>
      </div>
      <div className="w-[50%] flex">
        <p className="text-base flex-shrink-0">api key:</p>   
        <input type={show?"text":"password"} className="bg-white bg-opacity-0 border-b border-gray-400 w-[100%] px-2 outline-none" />
        <div onClick={()=>setShow(!show)} className="cursor-pointer ml-4">
          {show?<FaEye />:<FaEyeSlash />}
        </div>   
      </div>
    </div>
  )
}