'use client'
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function AccountPreferences() {
  const router = useRouter()
  const params = useSearchParams()
  const provider = params.get("provider") as string

  return (
    <div className="px-5 py-5">
      <p className="text-3xl text-title font-bold mb-5">Account Preferences</p>
    </div>
  )
}
