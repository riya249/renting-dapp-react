/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RentalAgreement } from "./RentalAgreement";

export class RentalAgreementFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _lessor: string,
    _lessee: string,
    _maxrent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _incentive: BigNumberish,
    _item: string,
    _status: boolean,
    _possibleRents: BigNumberish[],
    _manager: string,
    overrides?: Overrides
  ): Promise<RentalAgreement> {
    return super.deploy(
      _lessor,
      _lessee,
      _maxrent,
      _security,
      _cancellationFee,
      _incentive,
      _item,
      _status,
      _possibleRents,
      _manager,
      overrides || {}
    ) as Promise<RentalAgreement>;
  }
  getDeployTransaction(
    _lessor: string,
    _lessee: string,
    _maxrent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _incentive: BigNumberish,
    _item: string,
    _status: boolean,
    _possibleRents: BigNumberish[],
    _manager: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lessor,
      _lessee,
      _maxrent,
      _security,
      _cancellationFee,
      _incentive,
      _item,
      _status,
      _possibleRents,
      _manager,
      overrides || {}
    );
  }
  attach(address: string): RentalAgreement {
    return super.attach(address) as RentalAgreement;
  }
  connect(signer: Signer): RentalAgreementFactory {
    return super.connect(signer) as RentalAgreementFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RentalAgreement {
    return new Contract(address, _abi, signerOrProvider) as RentalAgreement;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lessor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lessee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxrent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_security",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cancellationFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_incentive",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_item",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "_possibleRents",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "agreementConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RentalAgreement.Check",
        name: "",
        type: "uint8",
      },
    ],
    name: "checked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RentalAgreement.State",
        name: "",
        type: "uint8",
      },
    ],
    name: "contractTerminated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "paidRent",
    type: "event",
  },
  {
    inputs: [],
    name: "amt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelRent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancellationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "check",
    outputs: [
      {
        internalType: "enum RentalAgreement.Check",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createdTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "finalCheckByLessee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "finalCheckByLessor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "incentive",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialCheck",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "initialCheckByLessee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_condition",
        type: "uint48",
      },
    ],
    name: "initialCheckByLessor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "item",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lessee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lessor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "paidrents",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payRent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "payingRent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "possibleRents",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "productManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "security",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum RentalAgreement.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "terminateNormally",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "additionalCharges",
        type: "uint256",
      },
    ],
    name: "terminateWithAdditionalCharges",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620024943803806200249483398101604081905262000034916200031a565b600a80546001600160a01b03808d166001600160a01b031992831617909255600b8054928c1692909116919091179055600288905583516200007e906009906020870190620000f2565b50600487905560058690556006859055600d805460ff60a01b1916600160a01b85151502176001600160a01b0319166001600160a01b0383161790558151620000cf90600890602085019062000187565b5050426001555050600e805460ff60901b19169055506200041795505050505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200012a576000855562000175565b82601f106200014557805160ff191683800117855562000175565b8280016001018555821562000175579182015b828111156200017557825182559160200191906001019062000158565b5062000183929150620001c4565b5090565b8280548282559060005260206000209081019282156200017557916020028201828111156200017557825182559160200191906001019062000158565b5b80821115620001835760008155600101620001c5565b80516001600160a01b0381168114620001f357600080fd5b919050565b600082601f83011262000209578081fd5b81516001600160401b038111156200021d57fe5b60208082026200022f828201620003f3565b838152935081840185830182870184018810156200024c57600080fd5b600092505b848310156200027157805182526001929092019190830190830162000251565b505050505092915050565b80518015158114620001f357600080fd5b600082601f8301126200029e578081fd5b81516001600160401b03811115620002b257fe5b6020620002c8601f8301601f19168201620003f3565b92508183528481838601011115620002df57600080fd5b60005b82811015620002ff578481018201518482018301528101620002e2565b82811115620003115760008284860101525b50505092915050565b6000806000806000806000806000806101408b8d0312156200033a578586fd5b620003458b620001db565b99506200035560208c01620001db565b985060408b0151975060608b0151965060808b0151955060a08b0151945060c08b015160018060401b03808211156200038c578586fd5b6200039a8e838f016200028d565b9550620003aa60e08e016200027c565b94506101008d0151915080821115620003c1578384fd5b50620003d08d828e01620001f8565b925050620003e26101208c01620001db565b90509295989b9194979a5092959850565b6040518181016001600160401b03811182821017156200040f57fe5b604052919050565b61206d80620004276000396000f3fe6080604052600436106101a15760003560e01c80638e629580116100e1578063c9777fc91161008a578063f2a4a82e11610064578063f2a4a82e146103c2578063f426306f146103e4578063f5a3182b146103f9578063f746882c1461040e576101a1565b8063c9777fc91461037a578063f032ea8c1461039a578063f17af517146103ba576101a1565b8063b61cdf89116100bb578063b61cdf8914610330578063c19d93fb14610338578063c8a3752f1461035a576101a1565b80638e629580146102f3578063919840ad14610306578063a709c4fe14610328576101a1565b80633bd7ba001161014e57806354dc7ccd1161012857806354dc7ccd146102865780635f08a1581461029b5780636ef569a5146102b057806374017cee146102c5576101a1565b80633bd7ba0014610254578063481c6a751461025c5780635487991814610271576101a1565b806316eab96b1161017f57806316eab96b146102085780631d4632ac1461021d5780631e36586f14610232576101a1565b806308e5666c146101a657806310309781146101d157806310a52126146101e6575b600080fd5b3480156101b257600080fd5b506101bb610421565b6040516101c89190611fff565b60405180910390f35b3480156101dd57600080fd5b506101bb610427565b3480156101f257600080fd5b50610206610201366004611b27565b61042d565b005b34801561021457600080fd5b506101bb610522565b34801561022957600080fd5b506101bb610528565b34801561023e57600080fd5b5061024761052e565b6040516101c89190611b4d565b61020661053d565b34801561026857600080fd5b5061024761068d565b34801561027d57600080fd5b506101bb61069c565b34801561029257600080fd5b506102066106a2565b3480156102a757600080fd5b506101bb61076c565b3480156102bc57600080fd5b506101bb610772565b3480156102d157600080fd5b506102e56102e0366004611b0f565b610778565b6040516101c8929190612008565b610206610301366004611b27565b6107a6565b34801561031257600080fd5b5061031b6108f6565b6040516101c89190611b82565b610206610906565b610206610e51565b34801561034457600080fd5b5061034d610fb3565b6040516101c89190611b96565b34801561036657600080fd5b50610206610375366004611b27565b610fc3565b34801561038657600080fd5b506101bb610395366004611b0f565b6110f4565b3480156103a657600080fd5b506102066103b5366004611b27565b611115565b6102066111f2565b3480156103ce57600080fd5b506103d7611337565b6040516101c89190611ba4565b3480156103f057600080fd5b506102476113e3565b34801561040557600080fd5b506102476113f2565b61020661041c366004611b0f565b611401565b60025481565b60015481565b600080600e54600160901b900460ff16600381111561044857fe5b1461046e5760405162461bcd60e51b815260040161046590611f0e565b60405180910390fd5b600a546001600160a01b031633146104985760405162461bcd60e51b815260040161046590611ed7565b600e80547fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000001665ffffffffffff84161790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a5906104fb90600090611b82565b60405180910390a1600e80546000919060ff60981b1916600160981b835b02179055505050565b60075481565b60065481565b600b546001600160a01b031681565b600a546001600160a01b0316331461055457600080fd5b600280600e54600160901b900460ff16600381111561056f57fe5b1461058c5760405162461bcd60e51b815260040161046590611f0e565b600580600e54600160981b900460ff1660058111156105a757fe5b146105c45760405162461bcd60e51b815260040161046590611df7565b7f2e3cd55ad0cf96ed0ed48cc64406b6168652724412c75219adad0879663f50a260036040516105f49190611b96565b60405180910390a1600e546c01000000000000000000000000900465ffffffffffff166001146106365760405162461bcd60e51b815260040161046590611e54565b600b546004546040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610672573d6000803e3d6000fd5b50600e80546003919060ff60901b1916600160901b83610519565b600d546001600160a01b031681565b60045481565b600180600e54600160901b900460ff1660038111156106bd57fe5b146106da5760405162461bcd60e51b815260040161046590611f0e565b600280600e54600160981b900460ff1660058111156106f557fe5b146107125760405162461bcd60e51b815260040161046590611df7565b600b546001600160a01b0316331461072957600080fd5b6040517fff274055432556a9f474da8c11df1d265e3bbf0e8eafad4f12bd72a9c175b4db90600090a1600e80546002919060ff60901b1916600160901b83610519565b60035481565b60055481565b6000818154811061078857600080fd5b60009182526020909120600290910201805460019091015490915082565b600080600e54600160981b900460ff1660058111156107c157fe5b146107de5760405162461bcd60e51b815260040161046590611df7565b600a546001600160a01b03163314156108095760405162461bcd60e51b815260040161046590611f6b565b600d80547fffffffffff000000000000ffffffffffffffffffffffffffffffffffffffffff16750100000000000000000000000000000000000000000065ffffffffffff8516021790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a59061088490600190611b82565b60405180910390a1600b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905560045434146108d75760405162461bcd60e51b815260040161046590611d06565b600e805460ff60981b1916600160981b1790556108f26111f2565b5050565b600e54600160981b900460ff1681565b600b546001600160a01b0316331461091d57600080fd5b600280600e54600160901b900460ff16600381111561093857fe5b146109555760405162461bcd60e51b815260040161046590611f0e565b6000805b6008548110156109af576008818154811061097057fe5b90600052602060002001543414156109a757600191506008818154811061099357fe5b6000918252602090912001546003556109af565b600101610959565b50806001146109d05760405162461bcd60e51b815260040161046590611c4c565b7fde56cd81bac5ec7558231ad441ab69a7c068dc8fc88c8159484a8e7b76ca8eb9600354604051610a019190611fff565b60405180910390a1600a546006546001600160a01b03909116906108fc90610a3a90606490610a349034906063036117cb565b9061182d565b6040518115909202916000818181858888f19350505050158015610a62573d6000803e3d6000fd5b50600d546001600160a01b031663805b330a610a85612710610a343460286117cb565b600a546001600160a01b0316610aa2612710610a343460146117cb565b610ab3612710610a343460146117cb565b6040518563ffffffff1660e01b8152600401610ad193929190611b61565b6000604051808303818588803b158015610aea57600080fd5b505af1158015610afe573d6000803e3d6000fd5b5050600d546001600160a01b0316925063805b330a9150610b289050612710610a343460286117cb565b600b546001600160a01b0316610b45612710610a343460146117cb565b610b56612710610a343460146117cb565b6040518563ffffffff1660e01b8152600401610b7493929190611b61565b6000604051808303818588803b158015610b8d57600080fd5b505af1158015610ba1573d6000803e3d6000fd5b5073dd4467b61f789d04efc853fa2016c990adce4ed793508392506108fc9150610bcf9050346103e861182d565b6040518115909202916000818181858888f19350505050158015610bf7573d6000803e3d6000fd5b5073f8dd9146465a112be3bef3f7ddcab9b0b42cbab5806108fc610c1d346103e861182d565b6040518115909202916000818181858888f19350505050158015610c45573d6000803e3d6000fd5b50600d546006546001600160a01b039091169063805b330a90610c709060c890610a349034906117cb565b600a546006546001600160a01b0390911690610c959061019090610a349034906117cb565b610cb0610190610a34600654346117cb90919063ffffffff16565b6040518563ffffffff1660e01b8152600401610cce93929190611b61565b6000604051808303818588803b158015610ce757600080fd5b505af1158015610cfb573d6000803e3d6000fd5b5050600d546006546001600160a01b03909116935063805b330a9250610d2a915060c890610a349034906117cb565b600a546006546001600160a01b0390911690610d4f9061019090610a349034906117cb565b610d6a610190610a34600654346117cb90919063ffffffff16565b6040518563ffffffff1660e01b8152600401610d8893929190611b61565b6000604051808303818588803b158015610da157600080fd5b505af1158015610db5573d6000803e3d6000fd5b5050505050610dd160035460075461186f90919063ffffffff16565b60075550506040805180820190915260008054600181018084526003546020850190815290835591805291517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563600290930292830155517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564909101555050565b600b546001600160a01b03163314610e6857600080fd5b6003600e54600160901b900460ff166003811115610e8257fe5b1415610ea05760405162461bcd60e51b815260040161046590611c15565b60075415610ec05760405162461bcd60e51b815260040161046590611ca9565b600b546004546040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610efc573d6000803e3d6000fd5b506005543414610f0b57600080fd5b7f2e3cd55ad0cf96ed0ed48cc64406b6168652724412c75219adad0879663f50a26003604051610f3b9190611b96565b60405180910390a1600a546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610f7c573d6000803e3d6000fd5b50600554600754610f8c9161186f565b600755600e805460ff60901b19167203000000000000000000000000000000000000179055565b600e54600160901b900460ff1681565b600b546001600160a01b03163314610fda57600080fd5b600280600e54600160901b900460ff166003811115610ff557fe5b146110125760405162461bcd60e51b815260040161046590611f0e565b600380600e54600160981b900460ff16600581111561102d57fe5b1461104a5760405162461bcd60e51b815260040161046590611df7565b600e80547fffffffffffffffffffffffffffff000000000000ffffffffffffffffffffffff166c0100000000000000000000000065ffffffffffff8616021790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a5906110bc90600490611b82565b60405180910390a1600e805460ff60981b19167304000000000000000000000000000000000000001790556110ef6118c9565b505050565b6008818154811061110457600080fd5b600091825260209091200154905081565b600a546001600160a01b0316331461112c57600080fd5b600280600e54600160901b900460ff16600381111561114757fe5b146111645760405162461bcd60e51b815260040161046590611f0e565b600e80547fffffffffffffffffffffffffffffffffffffffff000000000000ffffffffffff16660100000000000065ffffffffffff8516021790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a5906111d090600390611b82565b60405180910390a1600e80546003919060ff60981b1916600160981b83610519565b600080600e54600160901b900460ff16600381111561120d57fe5b1461122a5760405162461bcd60e51b815260040161046590611f0e565b600180600e54600160981b900460ff16600581111561124557fe5b146112625760405162461bcd60e51b815260040161046590611df7565b600e54600d547501000000000000000000000000000000000000000000900465ffffffffffff90811691161480156112bd5750600d547501000000000000000000000000000000000000000000900465ffffffffffff166001145b15610636577f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a560026040516112f29190611b82565b60405180910390a1600e805460ff60981b19167302000000000000000000000000000000000000001760ff60901b1916600160901b1790556113326106a2565b6108f2565b6009805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156113db5780601f106113b0576101008083540402835291602001916113db565b820191906000526020600020905b8154815290600101906020018083116113be57829003601f168201915b505050505081565b600c546001600160a01b031681565b600a546001600160a01b031681565b600a546001600160a01b0316331461141857600080fd5b600280600e54600160901b900460ff16600381111561143357fe5b146114505760405162461bcd60e51b815260040161046590611f0e565b600580600e54600160981b900460ff16600581111561146b57fe5b146114885760405162461bcd60e51b815260040161046590611df7565b7f2e3cd55ad0cf96ed0ed48cc64406b6168652724412c75219adad0879663f50a260036040516114b89190611b96565b60405180910390a1600e546c01000000000000000000000000900465ffffffffffff16156114f85760405162461bcd60e51b815260040161046590611d3d565b60045483111561151a5760405162461bcd60e51b815260040161046590611fa2565b600a546001600160a01b03166108fc6115396064610a348760636117cb565b6040518115909202916000818181858888f19350505050158015611561573d6000803e3d6000fd5b50600d546001600160a01b031663805b330a611584612710610a348760286117cb565b600a546001600160a01b03166115a1612710610a348960146117cb565b6115b2612710610a348a60146117cb565b6040518563ffffffff1660e01b81526004016115d093929190611b61565b6000604051808303818588803b1580156115e957600080fd5b505af11580156115fd573d6000803e3d6000fd5b5050600d546001600160a01b0316925063805b330a91506116279050612710610a348760286117cb565b600b546001600160a01b0316611644612710610a348960146117cb565b611655612710610a348a60146117cb565b6040518563ffffffff1660e01b815260040161167393929190611b61565b6000604051808303818588803b15801561168c57600080fd5b505af11580156116a0573d6000803e3d6000fd5b5073dd4467b61f789d04efc853fa2016c990adce4ed793508392506108fc91506116ce9050866103e861182d565b6040518115909202916000818181858888f193505050501580156116f6573d6000803e3d6000fd5b5073f8dd9146465a112be3bef3f7ddcab9b0b42cbab5806108fc61171c876103e861182d565b6040518115909202916000818181858888f19350505050158015611744573d6000803e3d6000fd5b5060045460009061175590876119d1565b600b546040519192506001600160a01b03169082156108fc029083906000818181858888f19350505050158015611790573d6000803e3d6000fd5b5060075461179e908761186f565b6007555050600e805460ff60901b1916720300000000000000000000000000000000000017905550505050565b6000826117da57506000611827565b828202828482816117e757fe5b04146118245760405162461bcd60e51b81526004018080602001828103825260218152602001806120176021913960400191505060405180910390fd5b90505b92915050565b600061182483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611a13565b600082820183811015611824576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600280600e54600160901b900460ff1660038111156118e457fe5b146119015760405162461bcd60e51b815260040161046590611f0e565b600480600e54600160981b900460ff16600581111561191c57fe5b146119395760405162461bcd60e51b815260040161046590611df7565b600e546601000000000000810465ffffffffffff9081166c01000000000000000000000000909204161461197f5760405162461bcd60e51b815260040161046590611d9a565b7f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a560056040516119af9190611b82565b60405180910390a1600e80546005919060ff60981b1916600160981b83610519565b600061182483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611ab5565b60008183611a9f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611a64578181015183820152602001611a4c565b50505050905090810190601f168015611a915780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611aab57fe5b0495945050505050565b60008184841115611b075760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611a64578181015183820152602001611a4c565b505050900390565b600060208284031215611b20578081fd5b5035919050565b600060208284031215611b38578081fd5b813565ffffffffffff81168114611824578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039390931683526020830191909152604082015260600190565b6020810160068310611b9057fe5b91905290565b6020810160048310611b9057fe5b6000602080835283518082850152825b81811015611bd057858101830151858201604001528201611bb4565b81811115611be15783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6020808252601f908201527f596f752063616e6e6f742063616e63656c206174207468697320737461676500604082015260600190565b6020808252602d908201527f52656e742076616c756520646f65736e277420636f6d6520756e64657220617660408201527f61696c61626c652072656e747300000000000000000000000000000000000000606082015260800190565b60208082526029908201527f596f75206861766520616c7265616479207374617274656420706179696e672060408201527f796f75722072656e740000000000000000000000000000000000000000000000606082015260800190565b60208082526016908201527f536563757269747920616d6f756e74206e656564656400000000000000000000604082015260600190565b60208082526028908201527f596f75206d757374207465726d696e6174652074686520636f6e74726163742060408201527f6e6f726d616c6c79000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f4469737075746520636173653a206e65656420666f72204661697468204d696e60408201527f7573000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f4e6f7420696e206465736972656420436865636b20666f722066756e6374696f60408201527f6e20657865637574696f6e000000000000000000000000000000000000000000606082015260800190565b6020808252604e908201527f506c65617365207465726d696e61746520636f6e7472616374207573696e672060408201527f74686520277465726d696e61746574576974684164646974696f6e616c43686160608201527f72676573272066756e6374696f6e000000000000000000000000000000000000608082015260a00190565b60208082526014908201527f4f6e6c79206c6573736f722063616e2063616c6c000000000000000000000000604082015260600190565b6020808252602b908201527f4e6f7420696e206465736972656420537461746520666f722066756e6374696f60408201527f6e20657865637574696f6e000000000000000000000000000000000000000000606082015260800190565b6020808252600a908201527f4e6f74206c657373656500000000000000000000000000000000000000000000604082015260600190565b6020808252602c908201527f596f752063616e6e6f74206368617267652070656e616c7479206d6f7265207460408201527f68616e2073656375726974790000000000000000000000000000000000000000606082015260800190565b90815260200190565b91825260208201526040019056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212208cbd31f4589156414939d1cb08219cc08f82eb86306f2eb2af4a4af8c682be8e64736f6c63430007040033";
