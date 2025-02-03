'use client'
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function SupportAndDocumentation() {
  const router = useRouter()
  const params = useSearchParams()
  const provider = params.get("provider") as string


  return (
    <div className="px-5 py-5">
      <p className="text-3xl text-title font-bold mb-5">Support and Documentation</p>
      <div className="flex gap-4">
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
