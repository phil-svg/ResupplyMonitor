import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_SimpleReceiverProxy2 = '0x8b36aD6A6605745529908C90cCC90F05901155b4';
export function getContract_SimpleReceiverProxy2() {
    const contract = new web3HttpProvider.eth.Contract(getABI_SimpleReceiver(), address_SimpleReceiverProxy2);
    return contract;
}
export function getABI_SimpleReceiver() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_emissionsController', type: 'address' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'claimer', type: 'address' },
                { indexed: true, internalType: 'bool', name: 'approved', type: 'bool' },
            ],
            name: 'ClaimerApproved',
            type: 'event',
        },
        {
            inputs: [],
            name: 'allocateEmissions',
            outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'approvedClaimers',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
            name: 'claimEmissions',
            outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'claimableEmissions',
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
        {
            inputs: [],
            name: 'emissionsController',
            outputs: [{ internalType: 'contract IEmissionsController', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getReceiverId',
            outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'govToken',
            outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'string', name: '_name', type: 'string' },
                { internalType: 'address[]', name: '_approvedClaimers', type: 'address[]' },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'initialized',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
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
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'claimer', type: 'address' },
                { internalType: 'bool', name: 'approved', type: 'bool' },
            ],
            name: 'setApprovedClaimer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=SimpleReceiverProxy2.js.map