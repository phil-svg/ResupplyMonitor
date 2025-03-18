import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_SimpleReceiverFactory = '0x20d55f2bb72ebDe67A4325FB757348ea3d9014D8';
export function getContract_SimpleReceiverFactory() {
    const contract = new web3HttpProvider.eth.Contract(getABI_SimpleReceiverFactory(), address_SimpleReceiverFactory);
    return contract;
}
export function getABI_SimpleReceiverFactory() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_emissionsController', type: 'address' },
                { internalType: 'address', name: '_implementation', type: 'address' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        { inputs: [], name: 'FailedDeployment', type: 'error' },
        {
            inputs: [
                { internalType: 'uint256', name: 'balance', type: 'uint256' },
                { internalType: 'uint256', name: 'needed', type: 'uint256' },
            ],
            name: 'InsufficientBalance',
            type: 'error',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'uint256', name: 'index', type: 'uint256' },
                { indexed: true, internalType: 'address', name: 'claimer', type: 'address' },
            ],
            name: 'ClaimerApproved',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: 'implementation', type: 'address' }],
            name: 'ImplementationSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'receiver', type: 'address' },
                { indexed: true, internalType: 'address', name: 'implementation', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'index', type: 'uint256' },
            ],
            name: 'ReceiverDeployed',
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
            inputs: [
                { internalType: 'string', name: '_name', type: 'string' },
                { internalType: 'address[]', name: '_approvedClaimers', type: 'address[]' },
            ],
            name: 'deployNewReceiver',
            outputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'emissionsController',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
            name: 'getDeterministicAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
            name: 'getReceiverByName',
            outputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_receiver', type: 'address' }],
            name: 'getReceiverId',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getReceiversLength',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'implementation',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            name: 'nameHashToReceiver',
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
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'receivers',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_implementation', type: 'address' }],
            name: 'setImplementation',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=SimpleReceiverFactory.js.map