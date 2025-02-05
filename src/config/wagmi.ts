import { http, createConfig } from 'wagmi'
import { HyperLiquid, Arbitrum, Mainnet } from './customChains'
import { injected, walletConnect, metaMask } from 'wagmi/connectors'
import { WAGMI } from '@/constants/web3'

export const config = createConfig({
  chains: [
   Arbitrum,
   Mainnet,
   HyperLiquid
],
  connectors: [
    injected(),
    walletConnect({ projectId:WAGMI.walletConnectId }),
    metaMask(),
    // safe(),
  ],
  transports: {
    [Arbitrum.id]: http(Arbitrum.rpcUrls.default.http[0]),
    [Mainnet.id]: http(Mainnet.rpcUrls.default.http[0]),
    [HyperLiquid.id]: http(HyperLiquid.rpcUrls.default.http[0])
  },
  
})