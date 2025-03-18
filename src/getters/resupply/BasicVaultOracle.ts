import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_BasicVaultOracle = '0xcb7E25fbbd8aFE4ce73D7Dac647dbC3D847F3c82';

export function getContract_BasicVaultOracle() {
  const contract = new web3HttpProvider.eth.Contract(getABI_BasicVaultOracle(), address_BasicVaultOracle);
  return contract;
}

export function getABI_BasicVaultOracle(): any {
  const abi = [
    {
      inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_vault', type: 'address' }],
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
