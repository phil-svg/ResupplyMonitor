import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_LiquidationHandler = '0x88888888c227c36401493Ed9F3e3Dcc3800B2634';
export function getContract_LiquidationHandler() {
    const contract = new web3HttpProvider.eth.Contract(getABI_LiquidationHandler(), address_LiquidationHandler);
    return contract;
}
export function getABI_LiquidationHandler() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_registry', type: 'address' },
                { internalType: 'address', name: '_insurancePool', type: 'address' },
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
                { indexed: true, internalType: 'address', name: '_collateral', type: 'address' },
                { indexed: false, internalType: 'uint256', name: '_collateralAmount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_debtAmount', type: 'uint256' },
            ],
            name: 'CollateralDistributedAndDebtCleared',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: '_collateral', type: 'address' },
                { indexed: false, internalType: 'uint256', name: '_collateralAmount', type: 'uint256' },
                { indexed: false, internalType: 'address', name: '_newHandler', type: 'address' },
            ],
            name: 'CollateralMigrated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: '_collateral', type: 'address' },
                { indexed: false, internalType: 'uint256', name: '_debtBurned', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_amountWithdrawn', type: 'uint256' },
            ],
            name: 'CollateralProccessed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: '_incentive', type: 'uint256' }],
            name: 'SetLiquidationIncentive',
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
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'debtByCollateral',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_collateral', type: 'address' }],
            name: 'distributeCollateralAndClearDebt',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'insurancePool',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_pair', type: 'address' },
                { internalType: 'address', name: '_borrower', type: 'address' },
            ],
            name: 'liquidate',
            outputs: [{ internalType: 'uint256', name: '_collateralForLiquidator', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'liquidateIncentive',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_collateral', type: 'address' }],
            name: 'migrateCollateral',
            outputs: [{ internalType: 'uint256', name: 'debtCanceled', type: 'uint256' }],
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
            inputs: [{ internalType: 'address', name: '_collateral', type: 'address' }],
            name: 'processCollateral',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_collateral', type: 'address' },
                { internalType: 'uint256', name: '_collateralAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_debtAmount', type: 'uint256' },
            ],
            name: 'processLiquidationDebt',
            outputs: [],
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
            inputs: [{ internalType: 'uint256', name: '_incentive', type: 'uint256' }],
            name: 'setLiquidationIncentive',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=LiquidationHandler.js.map