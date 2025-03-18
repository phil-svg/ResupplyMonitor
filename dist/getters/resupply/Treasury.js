import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_Treasury = '0x44444444DBdC03c7D8291c4f4a093cb200A918FA';
export function getContract_Treasury() {
    const contract = new web3HttpProvider.eth.Contract(getABI_Treasury(), address_Treasury);
    return contract;
}
export function getABI_Treasury() {
    const abi = [
        {
            inputs: [{ internalType: 'address', name: '_core', type: 'address' }],
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
            inputs: [{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }],
            name: 'RetrieveETH',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'token', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'RetrieveToken',
            type: 'event',
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
            inputs: [{ internalType: 'address', name: '_to', type: 'address' }],
            name: 'retrieveETH',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'retrieveETHExact',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_token', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
            ],
            name: 'retrieveToken',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_token', type: 'address' },
                { internalType: 'address', name: '_to', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'retrieveTokenExact',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_token', type: 'address' },
                { internalType: 'address', name: '_spender', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'setTokenApproval',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        { stateMutability: 'payable', type: 'receive' },
    ];
    return abi;
}
//# sourceMappingURL=Treasury.js.map