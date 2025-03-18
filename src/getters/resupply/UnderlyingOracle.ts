import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_UnderlyingOracle = '0x414CFAFa12FeE1260114BCd22058D5293da27c94';

export function getContract_UnderlyingOracle() {
  const contract = new web3HttpProvider.eth.Contract(getABI_UnderlyingOracle(), address_UnderlyingOracle);
  return contract;
}

export function getABI_UnderlyingOracle(): any {
  const abi = [
    {
      inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'crvusd',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'crvusd_oracle',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'frxusd',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'frxusd_oracle',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
      name: 'getPrices',
      outputs: [{ internalType: 'uint256', name: '_price', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oracleType',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  return abi;
}
