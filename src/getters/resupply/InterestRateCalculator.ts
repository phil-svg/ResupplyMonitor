import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_InterestRateCalculator = '0x77777777729C405efB6Ac823493e6111F0070D67';

export function getContract_InterestRateCalculator() {
  const contract = new web3HttpProvider.eth.Contract(getABI_InterestRateCalculator(), address_InterestRateCalculator);
  return contract;
}

export function getABI_InterestRateCalculator(): any {
  const abi = [
    {
      inputs: [
        { internalType: 'string', name: '_suffix', type: 'string' },
        { internalType: 'uint256', name: '_minimumRate', type: 'uint256' },
        { internalType: 'uint256', name: '_rateRatio', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        { internalType: 'address', name: '_vault', type: 'address' },
        { internalType: 'uint256', name: '_deltaTime', type: 'uint256' },
        { internalType: 'uint256', name: '_previousShares', type: 'uint256' },
      ],
      name: 'getNewRate',
      outputs: [
        { internalType: 'uint64', name: '_newRatePerSec', type: 'uint64' },
        { internalType: 'uint128', name: '_newShares', type: 'uint128' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minimumRate',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
      name: 'rateRatio',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sfrxusd',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sfrxusdRates',
      outputs: [{ internalType: 'uint256', name: 'fraxPerSecond', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'suffix',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'version',
      outputs: [
        { internalType: 'uint256', name: '_major', type: 'uint256' },
        { internalType: 'uint256', name: '_minor', type: 'uint256' },
        { internalType: 'uint256', name: '_patch', type: 'uint256' },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ];
  return abi;
}
