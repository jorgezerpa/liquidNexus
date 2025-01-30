"use client"
// providers for NextAuth, Stream.io theme and Metamask SDK
import React from 'react'
import { WagmiProvider } from 'wagmi'
import { config as wagmiConfig} from '@/config/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}