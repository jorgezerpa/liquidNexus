export const RPC_ENDPOINT =  {
    mainnet:process.env.NEXT_PUBLIC_RPC_ENDPOINT_MAINNET as string,
    arbitrum:process.env.NEXT_PUBLIC_RPC_ENDPOINT_ARBITRUM as string,
    hyperliquid:process.env.NEXT_PUBLIC_RPC_ENDPOINT_HYPER_LIQUID as string,
}

export const WAGMI = {
    walletConnectId: process.env.NEXT_PUBLIC_WALLET_CONNECT as string
}