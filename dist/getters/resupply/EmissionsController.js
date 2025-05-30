import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_EmissionsController = '0x33333333df05b0D52edD13D230461E5A0f5a4706';
export function getContract_EmissionsController() {
    const contract = new web3HttpProvider.eth.Contract(getABI_EmissionsController(), address_EmissionsController);
    return contract;
}
export function getABI_EmissionsController() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_govToken', type: 'address' },
                { internalType: 'uint256[]', name: '_emissionsSchedule', type: 'uint256[]' },
                { internalType: 'uint256', name: '_epochsPer', type: 'uint256' },
                { internalType: 'uint256', name: '_tailRate', type: 'uint256' },
                { internalType: 'uint256', name: '_bootstrapEpochs', type: 'uint256' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'receiver', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'epoch', type: 'uint256' },
                { indexed: true, internalType: 'bool', name: 'unallocated', type: 'bool' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'EmissionsAllocated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'uint256', name: 'epoch', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'rate', type: 'uint256' },
            ],
            name: 'EmissionsRateUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256[]', name: 'rates', type: 'uint256[]' },
                { indexed: false, internalType: 'uint256', name: 'epochsPer', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'tailRate', type: 'uint256' },
            ],
            name: 'EmissionsScheduleSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }],
            name: 'ReceiverActivated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
                { indexed: true, internalType: 'address', name: 'receiver', type: 'address' },
            ],
            name: 'ReceiverAdded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }],
            name: 'ReceiverDeactivated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256[]', name: 'receiverIds', type: 'uint256[]' },
                { indexed: false, internalType: 'uint256[]', name: 'weights', type: 'uint256[]' },
            ],
            name: 'ReceiverWeightsSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'UnallocatedRecovered',
            type: 'event',
        },
        {
            inputs: [],
            name: 'BOOTSTRAP_EPOCHS',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
            name: 'activateReceiver',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
            name: 'allocated',
            outputs: [
                { internalType: 'uint56', name: 'lastAllocEpoch', type: 'uint56' },
                { internalType: 'uint200', name: 'amount', type: 'uint200' },
            ],
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
            inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
            name: 'deactivateReceiver',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'epoch', type: 'uint256' }],
            name: 'emissionsPerEpoch',
            outputs: [{ internalType: 'uint256', name: 'emissions', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'emissionsRate',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'epochLength',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'epochsPer',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'fetchEmissions',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getEpoch',
            outputs: [{ internalType: 'uint256', name: 'epoch', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getSchedule',
            outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getScheduleLength',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'govToken',
            outputs: [{ internalType: 'contract IGovToken', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
            name: 'idToReceiver',
            outputs: [
                { internalType: 'bool', name: 'active', type: 'bool' },
                { internalType: 'address', name: 'receiver', type: 'address' },
                { internalType: 'uint24', name: 'weight', type: 'uint24' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_receiver', type: 'address' }],
            name: 'isRegisteredReceiver',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastEmissionsUpdate',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastMintEpoch',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nextReceiverId',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
            inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
            name: 'receiverToId',
            outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_recipient', type: 'address' }],
            name: 'recoverUnallocated',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_receiver', type: 'address' }],
            name: 'registerReceiver',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_rates', type: 'uint256[]' },
                { internalType: 'uint256', name: '_epochsPer', type: 'uint256' },
                { internalType: 'uint256', name: '_tailRate', type: 'uint256' },
            ],
            name: 'setEmissionsSchedule',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_receiverIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_newWeights', type: 'uint256[]' },
            ],
            name: 'setReceiverWeights',
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
            name: 'tailRate',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_recipient', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'transferFromAllocation',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'unallocated',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=EmissionsController.js.map