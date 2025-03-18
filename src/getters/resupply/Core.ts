import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_Core = '0xc07e000044F95655c11fda4cD37F70A94d7e0a7d';

export function getContract_Core() {
  const contract = new web3HttpProvider.eth.Contract(getABI_Core(), address_Core);
  return contract;
}

export function getABI_Core(): any {
  const abi = [
    {
      inputs: [
        { internalType: 'address', name: '_voter', type: 'address' },
        { internalType: 'uint256', name: '_epochLength', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    { inputs: [{ internalType: 'address', name: 'target', type: 'address' }], name: 'AddressEmptyCode', type: 'error' },
    { inputs: [], name: 'FailedCall', type: 'error' },
    {
      inputs: [
        { internalType: 'uint256', name: 'balance', type: 'uint256' },
        { internalType: 'uint256', name: 'needed', type: 'uint256' },
      ],
      name: 'InsufficientBalance',
      type: 'error',
    },
    { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'caller', type: 'address' },
        { indexed: true, internalType: 'address', name: 'target', type: 'address' },
        { indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'OperatorExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'caller', type: 'address' },
        { indexed: true, internalType: 'address', name: 'target', type: 'address' },
        { indexed: false, internalType: 'bool', name: 'authorized', type: 'bool' },
        { indexed: false, internalType: 'bytes4', name: 'selector', type: 'bytes4' },
        { indexed: false, internalType: 'contract IAuthHook', name: 'authHook', type: 'address' },
      ],
      name: 'OperatorSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'address', name: 'newVoter', type: 'address' }],
      name: 'VoterSet',
      type: 'event',
    },
    {
      inputs: [],
      name: 'epochLength',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'target', type: 'address' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'execute',
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'caller', type: 'address' },
        { internalType: 'address', name: 'target', type: 'address' },
        { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
      ],
      name: 'operatorPermissions',
      outputs: [
        { internalType: 'bool', name: 'authorized', type: 'bool' },
        { internalType: 'contract IAuthHook', name: 'hook', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'caller', type: 'address' },
        { internalType: 'address', name: 'target', type: 'address' },
        { internalType: 'bytes4', name: 'selector', type: 'bytes4' },
        { internalType: 'bool', name: 'authorized', type: 'bool' },
        { internalType: 'contract IAuthHook', name: 'authHook', type: 'address' },
      ],
      name: 'setOperatorPermissions',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newVoter', type: 'address' }],
      name: 'setVoter',
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
    {
      inputs: [],
      name: 'voter',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  return abi;
}
