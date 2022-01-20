/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OHMPreSale, OHMPreSaleInterface } from "../OHMPreSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressToSendDai",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DAI",
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
    name: "aOHM",
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
    name: "addressToSendDai",
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
    inputs: [
      {
        internalType: "uint256",
        name: "paymentAmount_",
        type: "uint256",
      },
    ],
    name: "calculateSaleQuote",
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
    name: "endOfSale",
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
    name: "getAllotmentPerBuyer",
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
        internalType: "address",
        name: "_dai",
        type: "address",
      },
      {
        internalType: "address",
        name: "_aOHM",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_saleLength",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amountDAI",
        type: "uint256",
      },
    ],
    name: "purchaseaOHM",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "salePrice",
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
    name: "saleStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sendaOHMTo",
        type: "address",
      },
    ],
    name: "sendRemainingaOHM",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWhiteListed",
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
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_buyers",
        type: "address[]",
      },
    ],
    name: "whiteListBuyers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611f3c380380611f3c8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050611dec806101506000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063831f4df111610097578063e0bab4c411610066578063e0bab4c4146103d2578063eb990c5914610406578063f2fde38b14610494578063f51f96dd146104d8576100ff565b8063831f4df11461032e5780638da5cb5b14610362578063a07b206f14610396578063d0f3ca9a146103b4576100ff565b8063529bdc01116100d3578063529bdc01146102b25780635c474f9e146102e6578063715018a61461030657806374f4783e14610310576100ff565b80624073b8146101045780631b362f4f146101485780631eef7659146101a25780632092c12b14610270575b600080fd5b6101306004803603602081101561011a57600080fd5b81019080803590602001909291905050506104f6565b60405180821515815260200191505060405180910390f35b61018a6004803603602081101561015e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061094a565b60405180821515815260200191505060405180910390f35b610258600480360360208110156101b857600080fd5b81019080803590602001906401000000008111156101d557600080fd5b8201836020820111156101e757600080fd5b8035906020019184602083028401116401000000008311171561020957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610c27565b60405180821515815260200191505060405180910390f35b61029c6004803603602081101561028657600080fd5b8101908080359060200190929190505050610e1d565b6040518082815260200191505060405180910390f35b6102ba610e2f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ee610e55565b60405180821515815260200191505060405180910390f35b61030e610e68565b005b610318610fe7565b6040518082815260200191505060405180910390f35b610336610fed565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61036a611013565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61039e61103c565b6040518082815260200191505060405180910390f35b6103bc611042565b6040518082815260200191505060405180910390f35b6103da611121565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61047c6004803603608081101561041c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611147565b60405180821515815260200191505060405180910390f35b6104d6600480360360208110156104aa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061135c565b005b6104e0611560565b6040518082815260200191505060405180910390f35b600060011515600760009054906101000a900460ff16151514610581576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4e6f74207374617274656400000000000000000000000000000000000000000081525060200191505060405180910390fd5b60011515600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610647576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4e6f742077686974656c6973746564000000000000000000000000000000000081525060200191505060405180910390fd5b60001515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461070d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f416c72656164792070617274696369706174656400000000000000000000000081525060200191505060405180910390fd5b6006544210610784576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f53616c65206f766572000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060006107e783611566565b90506107f1611042565b811115610866576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f4d6f7265207468616e20616c6c6f74656400000000000000000000000000000081525060200191505060405180910390fd5b61087c600160055461159a90919063ffffffff16565b6005819055506108f333600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166115e4909392919063ffffffff16565b6109403382600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166116a59092919063ffffffff16565b6001915050919050565b60003373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60011515600760009054906101000a900460ff16151514610a96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4e6f74207374617274656400000000000000000000000000000000000000000081525060200191505060405180910390fd5b600654421015610b0e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e6f7420656e646564000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610c1e82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610b9b57600080fd5b505afa158015610baf573d6000803e3d6000fd5b505050506040513d6020811015610bc557600080fd5b8101908080519060200190929190505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166116a59092919063ffffffff16565b60019050919050565b60003373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60001515600760009054906101000a900460ff16151514610d73576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f416c726561647920696e697469616c697a65640000000000000000000000000081525060200191505060405180910390fd5b610d89825160055461174790919063ffffffff16565b60058190555060005b8251811015610e1357600160096000858481518110610dad57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080600101915050610d92565b5060019050919050565b6000610e2882611566565b9050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f29576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60065481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60055481565b600061111c600554600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156110d357600080fd5b505afa1580156110e7573d6000803e3d6000fd5b505050506040513d60208110156110fd57600080fd5b81019080805190602001909291905050506117cf90919063ffffffff16565b905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461120a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60001515600760009054906101000a900460ff16151514611293576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f416c726561647920696e697469616c697a65640000000000000000000000000081525060200191505060405180910390fd5b83600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260048190555061132f428361174790919063ffffffff16565b6006819055506001600760006101000a81548160ff02191690831515021790555060019050949350505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461141d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156114a3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611d466026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60045481565b600061159360045461158584633b9aca0061181990919063ffffffff16565b6117cf90919063ffffffff16565b9050919050565b60006115dc83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061189f565b905092915050565b61169f846323b872dd60e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061195f565b50505050565b6117428363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061195f565b505050565b6000808284019050838110156117c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061181183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611a4e565b905092915050565b60008083141561182c5760009050611899565b600082840290508284828161183d57fe5b0414611894576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611d6c6021913960400191505060405180910390fd5b809150505b92915050565b600083831115829061194c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156119115780820151818401526020810190506118f6565b50505050905090810190601f16801561193e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60606119c1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b149092919063ffffffff16565b9050600081511115611a49578080602001905160208110156119e257600080fd5b8101908080519060200190929190505050611a48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611d8d602a913960400191505060405180910390fd5b5b505050565b60008083118290611afa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611abf578082015181840152602081019050611aa4565b50505050905090810190601f168015611aec5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611b0657fe5b049050809150509392505050565b6060611b238484600085611b2c565b90509392505050565b6060611b3785611d32565b611ba9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310611bf95780518252602082019150602081019050602083039250611bd6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611c5b576040519150601f19603f3d011682016040523d82523d6000602084013e611c60565b606091505b50915091508115611c75578092505050611d2a565b600081511115611c885780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cef578082015181840152602081019050611cd4565b50505050905090810190601f168015611d1c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b949350505050565b600080823b90506000811191505091905056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122006eed7417bf86a472815bc71482034876126385c2d65e491f1b7f1105ac8c57364736f6c63430007050033";

type OHMPreSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OHMPreSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OHMPreSale__factory extends ContractFactory {
  constructor(...args: OHMPreSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _addressToSendDai: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OHMPreSale> {
    return super.deploy(
      _addressToSendDai,
      overrides || {}
    ) as Promise<OHMPreSale>;
  }
  getDeployTransaction(
    _addressToSendDai: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_addressToSendDai, overrides || {});
  }
  attach(address: string): OHMPreSale {
    return super.attach(address) as OHMPreSale;
  }
  connect(signer: Signer): OHMPreSale__factory {
    return super.connect(signer) as OHMPreSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OHMPreSaleInterface {
    return new utils.Interface(_abi) as OHMPreSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OHMPreSale {
    return new Contract(address, _abi, signerOrProvider) as OHMPreSale;
  }
}