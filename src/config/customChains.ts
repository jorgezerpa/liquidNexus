import { defineChain } from 'viem'
import { 
  arbitrum,
  mainnet,
} from 'wagmi/chains'
import {RPC_ENDPOINT} from "@/constants/web3"

export const Arbitrum = defineChain({
  ...arbitrum,
  id: 42161,
  rpcUrls: { default: { http:[RPC_ENDPOINT.arbitrum] } }
}) 

export const Mainnet = defineChain({
  ...mainnet,
  id: 1,
  rpcUrls: { default: { http:[RPC_ENDPOINT.mainnet] } }
}) 

export const HyperLiquid = defineChain
({
 id: 998,
 name: 'Hyperliquid',
 nativeCurrency: { 
    name: 'Nexus', 
    symbol: '$NEXUS', 
    decimals: 18 
  },
  rpcUrls: { default: { http:[RPC_ENDPOINT.mainnet] } }
//   rpcUrls: {
//    default: { http: ["https://api.hyperliquid-testnet.xyz/evm"] },
//  }
})