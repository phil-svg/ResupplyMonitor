import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_RewardHandler = '0xdBF41092e1E310a2B48B0895095EfF6d341D8F00';
export function getContract_RewardHandler() {
    const contract = new web3HttpProvider.eth.Contract(getABI_RewardHandler(), address_RewardHandler);
    return contract;
}
export function getABI_RewardHandler() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_registry', type: 'address' },
                { internalType: 'address', name: '_insurancepool', type: 'address' },
                { internalType: 'address', name: '_debtEmissionsReceiver', type: 'address' },
                { internalType: 'address', name: '_pairEmissions', type: 'address' },
                { internalType: 'address', name: '_insuranceEmissions', type: 'address' },
                { internalType: 'address', name: '_insuranceRevenue', type: 'address' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'bweight', type: 'uint256' }],
            name: 'BaseMinimumWeightSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'user', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'mweight', type: 'uint256' },
            ],
            name: 'MinimumWeightSet',
            type: 'event',
        },
        {
            inputs: [],
            name: 'baseMinimumWeight',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_pair', type: 'address' }],
            name: 'checkNewRewards',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        { inputs: [], name: 'claimInsuranceRewards', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [{ internalType: 'address', name: '_pair', type: 'address' }],
            name: 'claimRewards',
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
            name: 'debtEmissionsReceiver',
            outputs: [{ internalType: 'contract ISimpleReceiver', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'emissionToken',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
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
            name: 'getEpoch',
            outputs: [{ internalType: 'uint256', name: 'epoch', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'govStaker',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'insuranceEmissionReceiver',
            outputs: [{ internalType: 'contract ISimpleReceiver', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'insuranceEmissions',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'insuranceRevenue',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'insurancepool',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'minimumWeights',
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
            inputs: [],
            name: 'pairEmissions',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'pairTimestamp',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'queueInsuranceRewards', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        { inputs: [], name: 'queueStakingRewards', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [],
            name: 'registry',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'revenueToken',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
            name: 'setBaseMinimumWeight',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'setPairMinimumWeight',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_pair', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'setPairWeight',
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
    ];
    return abi;
}
//# sourceMappingURL=RewardHandler.js.map