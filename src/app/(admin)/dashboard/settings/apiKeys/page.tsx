'use client'
import { useSearchParams } from "next/navigation"

export default function Settings() {
  const params = useSearchParams()
  const provider = params.get("provider") as string

  return (
    <>
        provider: {provider}
    </>
  )
}