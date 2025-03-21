import { web3HttpProvider } from '../../web3/Web3Basics.js';

export function getContract_CurveLendingMarket(address: string) {
  const contract = new web3HttpProvider.eth.Contract(getABI_CurveLendingMarket(), address);
  return contract;
}

export function getABI_CurveLendingMarket(): any {
  const abi = [
    {
      name: 'Approval',
      inputs: [
        { name: 'owner', type: 'address', indexed: true },
        { name: 'spender', type: 'address', indexed: true },
        { name: 'value', type: 'uint256', indexed: false },
      ],
      anonymous: false,
      type: 'event',
    },
    {
      name: 'Transfer',
      inputs: [
        { name: 'sender', type: 'address', indexed: true },
        { name: 'receiver', type: 'address', indexed: true },
        { name: 'value', type: 'uint256', indexed: false },
      ],
      anonymous: false,
      type: 'event',
    },
    {
      name: 'Deposit',
      inputs: [
        { name: 'sender', type: 'address', indexed: true },
        { name: 'owner', type: 'address', indexed: true },
        { name: 'assets', type: 'uint256', indexed: false },
        { name: 'shares', type: 'uint256', indexed: false },
      ],
      anonymous: false,
      type: 'event',
    },
    {
      name: 'Withdraw',
      inputs: [
        { name: 'sender', type: 'address', indexed: true },
        { name: 'receiver', type: 'address', indexed: true },
        { name: 'owner', type: 'address', indexed: true },
        { name: 'assets', type: 'uint256', indexed: false },
        { name: 'shares', type: 'uint256', indexed: false },
      ],
      anonymous: false,
      type: 'event',
    },
    { stateMutability: 'nonpayable', type: 'constructor', inputs: [], outputs: [] },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'initialize',
      inputs: [
        { name: 'amm_impl', type: 'address' },
        { name: 'controller_impl', type: 'address' },
        { name: 'borrowed_token', type: 'address' },
        { name: 'collateral_token', type: 'address' },
        { name: 'A', type: 'uint256' },
        { name: 'fee', type: 'uint256' },
        { name: 'price_oracle', type: 'address' },
        { name: 'monetary_policy', type: 'address' },
        { name: 'loan_discount', type: 'uint256' },
        { name: 'liquidation_discount', type: 'uint256' },
      ],
      outputs: [
        { name: '', type: 'address' },
        { name: '', type: 'address' },
      ],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'borrow_apr',
      inputs: [],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'lend_apr',
      inputs: [],
      outputs: [{ name: '', type: 'uint256' }],
    },
    { stateMutability: 'view', type: 'function', name: 'asset', inputs: [], outputs: [{ name: '', type: 'address' }] },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'totalAssets',
      inputs: [],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'pricePerShare',
      inputs: [],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'pricePerShare',
      inputs: [{ name: 'is_floor', type: 'bool' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'convertToShares',
      inputs: [{ name: 'assets', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'convertToAssets',
      inputs: [{ name: 'shares', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'maxDeposit',
      inputs: [{ name: 'receiver', type: 'address' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'previewDeposit',
      inputs: [{ name: 'assets', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'deposit',
      inputs: [{ name: 'assets', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'deposit',
      inputs: [
        { name: 'assets', type: 'uint256' },
        { name: 'receiver', type: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'maxMint',
      inputs: [{ name: 'receiver', type: 'address' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'previewMint',
      inputs: [{ name: 'shares', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'mint',
      inputs: [{ name: 'shares', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'mint',
      inputs: [
        { name: 'shares', type: 'uint256' },
        { name: 'receiver', type: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'maxWithdraw',
      inputs: [{ name: 'owner', type: 'address' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'previewWithdraw',
      inputs: [{ name: 'assets', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'withdraw',
      inputs: [{ name: 'assets', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'withdraw',
      inputs: [
        { name: 'assets', type: 'uint256' },
        { name: 'receiver', type: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'withdraw',
      inputs: [
        { name: 'assets', type: 'uint256' },
        { name: 'receiver', type: 'address' },
        { name: 'owner', type: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'maxRedeem',
      inputs: [{ name: 'owner', type: 'address' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'previewRedeem',
      inputs: [{ name: 'shares', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'redeem',
      inputs: [{ name: 'shares', type: 'uint256' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'redeem',
      inputs: [
        { name: 'shares', type: 'uint256' },
        { name: 'receiver', type: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'redeem',
      inputs: [
        { name: 'shares', type: 'uint256' },
        { name: 'receiver', type: 'address' },
        { name: 'owner', type: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'transferFrom',
      inputs: [
        { name: '_from', type: 'address' },
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'transfer',
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'approve',
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'increaseAllowance',
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_add_value', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      name: 'decreaseAllowance',
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_sub_value', type: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool' }],
    },
    { stateMutability: 'view', type: 'function', name: 'admin', inputs: [], outputs: [{ name: '', type: 'address' }] },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'borrowed_token',
      inputs: [],
      outputs: [{ name: '', type: 'address' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'collateral_token',
      inputs: [],
      outputs: [{ name: '', type: 'address' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'price_oracle',
      inputs: [],
      outputs: [{ name: '', type: 'address' }],
    },
    { stateMutability: 'view', type: 'function', name: 'amm', inputs: [], outputs: [{ name: '', type: 'address' }] },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'controller',
      inputs: [],
      outputs: [{ name: '', type: 'address' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'factory',
      inputs: [],
      outputs: [{ name: '', type: 'address' }],
    },
    { stateMutability: 'view', type: 'function', name: 'decimals', inputs: [], outputs: [{ name: '', type: 'uint8' }] },
    { stateMutability: 'view', type: 'function', name: 'name', inputs: [], outputs: [{ name: '', type: 'string' }] },
    { stateMutability: 'view', type: 'function', name: 'symbol', inputs: [], outputs: [{ name: '', type: 'string' }] },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'allowance',
      inputs: [
        { name: 'arg0', type: 'address' },
        { name: 'arg1', type: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'balanceOf',
      inputs: [{ name: 'arg0', type: 'address' }],
      outputs: [{ name: '', type: 'uint256' }],
    },
    {
      stateMutability: 'view',
      type: 'function',
      name: 'totalSupply',
      inputs: [],
      outputs: [{ name: '', type: 'uint256' }],
    },
  ];
  return abi;
}
