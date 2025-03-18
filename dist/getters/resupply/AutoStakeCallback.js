import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_AutoStakeCallback = '0x4888205F02df9832274d470C685baA728f128745';
export function getContract_AutoStakeCallback() {
    const contract = new web3HttpProvider.eth.Contract(getABI_AutoStakeCallback(), address_AutoStakeCallback);
    return contract;
}
export function getABI_AutoStakeCallback() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_govStaker', type: 'address' },
                { internalType: 'address', name: '_vestManager', type: 'address' },
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
                { indexed: true, internalType: 'address', name: 'token', type: 'address' },
                { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'RecoveredERC20',
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
            name: 'govStaker',
            outputs: [{ internalType: 'contract IGovStaker', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'onClaim',
            outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
            stateMutability: 'nonpayable',
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
            inputs: [
                { internalType: 'address', name: '_token', type: 'address' },
                { internalType: 'address', name: '_recipient', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'recoverERC20',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'token',
            outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'vestManager',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=AutoStakeCallback.js.map