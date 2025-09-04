import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_sreUSDUtility = '0x2B2df195212766FD87fDc8415D67E5Aba5dCaa04';

export function getContract_sreUSDUtility() {
  const contract = new web3HttpProvider.eth.Contract(getABI_sreUSDUtility(), address_sreUSDUtility);
  return contract;
}

export function getABI_sreUSDUtility(): any {
  const abi = [
    {
      inputs: [{ internalType: 'address', name: '_registry', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'EXCHANGE_PRECISION',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'INTEREST_RATE_CALCULATORV1',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'LIQ_PRECISION',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'LTV_PRECISION',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PAIR_DECIMALS',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'RATE_PRECISION',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'SHARE_REFACTOR_PRECISION',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
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
        { internalType: 'uint256', name: '_rate', type: 'uint256' },
        { internalType: 'uint256', name: '_priceOfReward', type: 'uint256' },
        { internalType: 'uint256', name: '_priceOfDeposit', type: 'uint256' },
      ],
      name: 'apr',
      outputs: [{ internalType: 'uint256', name: '_apr', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'convexPoolUtil',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getInsurancePoolRewardRates',
      outputs: [
        { internalType: 'address[]', name: 'tokens', type: 'address[]' },
        { internalType: 'uint256[]', name: 'rates', type: 'uint256[]' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_pair', type: 'address' }],
      name: 'getPairInterestRate',
      outputs: [{ internalType: 'uint256', name: '_ratePerSecond', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_pair', type: 'address' }],
      name: 'getPairRsupRate',
      outputs: [
        { internalType: 'address[]', name: 'tokens', type: 'address[]' },
        { internalType: 'uint256[]', name: 'rates', type: 'uint256[]' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
        { internalType: 'address', name: '_swapper', type: 'address' },
        { internalType: 'address[]', name: '_path', type: 'address[]' },
      ],
      name: 'getSwapRouteAmountOut',
      outputs: [{ internalType: 'uint256', name: '_returnAmount', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_pair', type: 'address' }],
      name: 'getUnderlyingSupplyRate',
      outputs: [{ internalType: 'uint256', name: '_rate', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_pair', type: 'address' },
        { internalType: 'address', name: '_account', type: 'address' },
      ],
      name: 'isSolvent',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_pair', type: 'address' },
        { internalType: 'uint256', name: '_maxLTV', type: 'uint256' },
        { internalType: 'address', name: '_account', type: 'address' },
        { internalType: 'uint256', name: '_addUnderlying', type: 'uint256' },
        { internalType: 'uint256', name: '_borrowAmount', type: 'uint256' },
        { internalType: 'uint256', name: '_slippage', type: 'uint256' },
        { internalType: 'address', name: '_swapper', type: 'address' },
        { internalType: 'address[]', name: '_path', type: 'address[]' },
      ],
      name: 'isSolventAfterLeverage',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_pair', type: 'address' }],
      name: 'pairCollateralRewardRates',
      outputs: [
        { internalType: 'address[]', name: 'tokens', type: 'address[]' },
        { internalType: 'uint256[]', name: 'rates', type: 'uint256[]' },
      ],
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
      inputs: [{ internalType: 'address', name: '_vault', type: 'address' }],
      name: 'savingsRate',
      outputs: [{ internalType: 'uint256', name: 'ratePerSecond', type: 'uint256' }],
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
      outputs: [{ internalType: 'uint256', name: 'ratePerSecond', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sreusd',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sreusdRates',
      outputs: [{ internalType: 'uint256', name: 'ratePerSecond', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];
  return abi;
}
