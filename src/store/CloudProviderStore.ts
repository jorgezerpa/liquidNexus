import { create } from 'zustand'

interface CloudProviderState {
  selectedProviderIndex: number
  availableProviders: string[]
  setProvider: (providerIndex:number)=>void
}

export const useCloudProviderStore = create<CloudProviderState>()((set) => ({
    selectedProviderIndex: 0,
    availableProviders: ["Google Cloud", "One Drive"],
    setProvider: (providerIndex:number)=>{
        return set((state) => ({ selectedProviderIndex:providerIndex }))
    }
}))