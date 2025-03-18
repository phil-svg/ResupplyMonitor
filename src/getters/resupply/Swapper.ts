import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_Swapper = '0x042f48346be16Be381190a7397A80808243f3b2e';

export function getContract_Swapper() {
  const contract = new web3HttpProvider.eth.Contract(getABI_Swapper(), address_Swapper);
  return contract;
}

export function getABI_Swapper(): any {
  const abi = [
    {
      inputs: [
        { internalType: 'address', name: '_core', type: 'address' },
        { internalType: 'address', name: '_registry', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'SafeERC20FailedOperation',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: '_tokenIn', type: 'address' },
        { indexed: true, internalType: 'address', name: '_tokenOut', type: 'address' },
        {
          components: [
            { internalType: 'address', name: 'swappool', type: 'address' },
            { internalType: 'int32', name: 'tokenInIndex', type: 'int32' },
            { internalType: 'int32', name: 'tokenOutIndex', type: 'int32' },
            { internalType: 'uint32', name: 'swaptype', type: 'uint32' },
          ],
          indexed: false,
          internalType: 'struct Swapper.SwapInfo',
          name: '_info',
          type: 'tuple',
        },
      ],
      name: 'PairAdded',
      type: 'event',
    },
    {
      inputs: [],
      name: 'TYPE_DEPOSIT',
      outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'TYPE_SWAP',
      outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'TYPE_UNDEFINED',
      outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'TYPE_WITHDRAW',
      outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_tokenIn', type: 'address' },
        { internalType: 'address', name: '_tokenOut', type: 'address' },
        {
          components: [
            { internalType: 'address', name: 'swappool', type: 'address' },
            { internalType: 'int32', name: 'tokenInIndex', type: 'int32' },
            { internalType: 'int32', name: 'tokenOutIndex', type: 'int32' },
            { internalType: 'uint32', name: 'swaptype', type: 'uint32' },
          ],
          internalType: 'struct Swapper.SwapInfo',
          name: '_swapInfo',
          type: 'tuple',
        },
      ],
      name: 'addPairing',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'core',
      outputs: [{ internalType: 'contract ICore', name: '', type: 'address' }],
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
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        { internalType: 'address[]', name: 'path', type: 'address[]' },
        { internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'swap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'swapPools',
      outputs: [
        { internalType: 'address', name: 'swappool', type: 'address' },
        { internalType: 'int32', name: 'tokenInIndex', type: 'int32' },
        { internalType: 'int32', name: 'tokenOutIndex', type: 'int32' },
        { internalType: 'uint32', name: 'swaptype', type: 'uint32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  return abi;
}
