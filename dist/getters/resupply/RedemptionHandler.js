import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_RedemptionHandler = '0x99999999BeaAE496551793313a7653553d1e0B3A';
export function getContract_RedemptionHandler() {
    const contract = new web3HttpProvider.eth.Contract(getABI_RedemptionHandler(), address_RedemptionHandler);
    return contract;
}
export function getABI_RedemptionHandler() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_registry', type: 'address' },
                { internalType: 'address', name: '_underlyingOracle', type: 'address' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: '_fee', type: 'uint256' }],
            name: 'SetBaseRedemptionFee',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_fee', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_maxUsage', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_maxDiscount', type: 'uint256' },
            ],
            name: 'SetDiscountInfo',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: '_oracle', type: 'address' }],
            name: 'SetUnderlyingOracle',
            type: 'event',
        },
        {
            inputs: [],
            name: 'PRECISION',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'baseRedemptionFee',
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
            name: 'debtToken',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_pair', type: 'address' }],
            name: 'getMaxRedeemableDebt',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_pair', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'getRedemptionFeePct',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxDiscount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxUsage',
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
            inputs: [
                { internalType: 'address', name: '_pair', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'previewRedeem',
            outputs: [
                { internalType: 'uint256', name: '_returnedUnderlying', type: 'uint256' },
                { internalType: 'uint256', name: '_returnedCollateral', type: 'uint256' },
                { internalType: 'uint256', name: '_fee', type: 'uint256' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'ratingData',
            outputs: [
                { internalType: 'uint64', name: 'timestamp', type: 'uint64' },
                { internalType: 'uint192', name: 'usage', type: 'uint192' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_pair', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
                { internalType: 'uint256', name: '_maxFeePct', type: 'uint256' },
                { internalType: 'address', name: '_receiver', type: 'address' },
                { internalType: 'bool', name: '_redeemToUnderlying', type: 'bool' },
            ],
            name: 'redeemFromPair',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
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
            inputs: [{ internalType: 'uint256', name: '_fee', type: 'uint256' }],
            name: 'setBaseRedemptionFee',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_rate', type: 'uint256' },
                { internalType: 'uint256', name: '_maxUsage', type: 'uint256' },
                { internalType: 'uint256', name: '_maxDiscount', type: 'uint256' },
            ],
            name: 'setDiscountInfo',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_oracle', type: 'address' }],
            name: 'setUnderlyingOracle',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'underlyingOracle',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'usageDecayRate',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=RedemptionHandler.js.map