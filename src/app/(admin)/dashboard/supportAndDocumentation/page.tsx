'use client'

export default function SupportAndDocumentation() {

  return (
    <div className="px-5 py-5">
      <p className="text-3xl text-title font-bold mb-5">Support and Documentation</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="px-5 py-5 bg-white bg-opacity-15 rounded-xl shadow-white shadow-sm cursor-pointer w-[250px]">
            <p className="text-xl text-title  mb-5">Documentation</p>
        </div>
        <div className="px-5 py-5 bg-white bg-opacity-15 rounded-xl shadow-white shadow-sm cursor-pointer w-[250px]">
            <p className="text-xl text-title  mb-5">Support chat</p>
        </div>
      </div>
    </div>
  )
}
