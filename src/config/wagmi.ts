import { http, createConfig } from 'wagmi'
import { HyperLiquid, Arbitrum, Mainnet } from './customChains'
import { injected} from 'wagmi/connectors'


export const config = createConfig({
  chains: [
   Arbitrum,
   Mainnet,
   HyperLiquid
],
  connectors: [
    injected(),
    // walletConnect({ projectId }),
    // metaMask(),
    // safe(),
  ],
  transports: {
    [Arbitrum.id]: http(Arbitrum.rpcUrls.default.http[0]),
    [Mainnet.id]: http(Mainnet.rpcUrls.default.http[0]),
    [HyperLiquid.id]: http(HyperLiquid.rpcUrls.default.http[0])
  },
  
})