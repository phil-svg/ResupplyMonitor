import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_FeeDepositController = '0x4AA05D9eDb6d838E0f7fDA523B2Da29b1f337e1D';

export function getContract_FeeDepositController() {
  const contract = new web3HttpProvider.eth.Contract(getABI_FeeDepositController(), address_FeeDepositController);
  return contract;
}

export function getABI_FeeDepositController(): any {
  const abi = [
    {
      inputs: [
        { internalType: 'address', name: '_core', type: 'address' },
        { internalType: 'address', name: '_registry', type: 'address' },
        { internalType: 'address', name: '_feeDeposit', type: 'address' },
        { internalType: 'uint256', name: '_insuranceSplit', type: 'uint256' },
        { internalType: 'uint256', name: '_treasurySplit', type: 'uint256' },
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
        { indexed: false, internalType: 'uint80', name: 'insurance', type: 'uint80' },
        { indexed: false, internalType: 'uint80', name: 'treasury', type: 'uint80' },
        { indexed: false, internalType: 'uint80', name: 'platform', type: 'uint80' },
      ],
      name: 'SplitsSet',
      type: 'event',
    },
    {
      inputs: [],
      name: 'BPS',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'core',
      outputs: [{ internalType: 'contract ICore', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    { inputs: [], name: 'distribute', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
      inputs: [],
      name: 'feeDeposit',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
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
      inputs: [
        { internalType: 'uint256', name: '_insuranceSplit', type: 'uint256' },
        { internalType: 'uint256', name: '_treasurySplit', type: 'uint256' },
        { internalType: 'uint256', name: '_platformSplit', type: 'uint256' },
      ],
      name: 'setSplits',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'splits',
      outputs: [
        { internalType: 'uint80', name: 'insurance', type: 'uint80' },
        { internalType: 'uint80', name: 'treasury', type: 'uint80' },
        { internalType: 'uint80', name: 'platform', type: 'uint80' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'treasury',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  return abi;
}
