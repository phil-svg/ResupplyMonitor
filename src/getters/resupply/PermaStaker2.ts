import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_PermaStaker2 = '0x12341234B35c8a48908c716266db79CAeA0100E8';

export function getContract_PermaStaker2() {
  const contract = new web3HttpProvider.eth.Contract(getABI_PermaStaker2(), address_PermaStaker2);
  return contract;
}

export function getABI_PermaStaker2(): any {
  const abi = [
    {
      inputs: [
        { internalType: 'address', name: '_core', type: 'address' },
        { internalType: 'address', name: '_registry', type: 'address' },
        { internalType: 'address', name: '_owner', type: 'address' },
        { internalType: 'address', name: '_vestManager', type: 'address' },
        { internalType: 'string', name: '_name', type: 'string' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
      name: 'OwnableInvalidOwner',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'OwnableUnauthorizedAccount',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'address', name: 'operator', type: 'address' }],
      name: 'OperatorUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
      ],
      name: 'OwnershipTransferStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
      inputs: [],
      name: 'claimAndStake',
      outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'core',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'target', type: 'address' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'execute',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
        { internalType: 'bytes', name: '', type: 'bytes' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    { inputs: [], name: 'migrateStaker', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
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
      name: 'pendingOwner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'registry',
      outputs: [{ internalType: 'contract IResupplyRegistry', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
      inputs: [
        { internalType: 'address', name: 'target', type: 'address' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'safeExecute',
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_operator', type: 'address' }],
      name: 'setOperator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'staker',
      outputs: [{ internalType: 'contract IGovStaker', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'vestManager',
      outputs: [{ internalType: 'contract IVestManager', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  return abi;
}
