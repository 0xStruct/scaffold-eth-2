import { defineChain } from "viem";

export const lukso = /*#__PURE__*/ defineChain({
  id: 42,
  network: "lukso",
  name: "LUKSO",
  nativeCurrency: {
    name: "LUKSO",
    symbol: "LYX",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"],
    },
    public: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "LUKSO Mainnet Explorer",
      url: "https://explorer.execution.mainnet.lukso.network",
    },
  },
});

export const luksoTestnet = defineChain({
  id: 4201,
  network: "luksoTestnet",
  name: "LUKSO Testnet",
  nativeCurrency: {
    name: "LUKSO",
    symbol: "LYXt",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.lukso.network"],
      webSocket: ["wss://ws-rpc.testnet.lukso.network"],
    },
    public: {
      http: ["https://rpc.testnet.lukso.network"],
      webSocket: ["wss://ws-rpc.testnet.lukso.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "LUKSO Testnet Explorer",
      url: "https://explorer.execution.testnet.lukso.network",
    },
  },
});
