import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_FeeDeposit = '0x07Ad4630985ADe5B5307806C43E57e0A9A932C52';

export function getContract_FeeDeposit() {
  const contract = new web3HttpProvider.eth.Contract(getABI_FeeDeposit(), address_FeeDeposit);
  return contract;
}

export function getABI_FeeDeposit(): any {
  const abi = [
    {
      inputs: [
        { internalType: 'address', name: '_core', type: 'address' },
        { internalType: 'address', name: '_registry', type: 'address' },
        { internalType: 'address', name: '_feeToken', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'SafeERC20FailedOperation',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: '_address', type: 'address' },
        { indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'FeesDistributed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: '_address', type: 'address' },
        { indexed: false, internalType: 'uint256', name: '_fees', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: '_otherFees', type: 'uint256' },
      ],
      name: 'ReceivedRevenue',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: 'address', name: 'oldAddress', type: 'address' },
        { indexed: false, internalType: 'address', name: 'newAddress', type: 'address' },
      ],
      name: 'SetOperator',
      type: 'event',
    },
    {
      inputs: [],
      name: 'core',
      outputs: [{ internalType: 'contract ICore', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    { inputs: [], name: 'distributeFees', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
      inputs: [],
      name: 'epochLength',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'feeToken',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getEpoch',
      outputs: [{ internalType: 'uint256', name: 'epoch', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_fees', type: 'uint256' },
        { internalType: 'uint256', name: '_otherFees', type: 'uint256' },
      ],
      name: 'incrementPairRevenue',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lastDistributedEpoch',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'operator',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'registry',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_newAddress', type: 'address' }],
      name: 'setOperator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'startTime',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  return abi;
}
