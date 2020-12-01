/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IRentingDappManager } from "./IRentingDappManager";

export class IRentingDappManagerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRentingDappManager {
    return new Contract(address, _abi, signerOrProvider) as IRentingDappManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_treeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_introducerAmount",
        type: "uint256",
      },
    ],
    name: "payRewards",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];