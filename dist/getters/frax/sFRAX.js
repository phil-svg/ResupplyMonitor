import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_sFRAX = '0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32';
export function getContract_sFRAX() {
    const contract = new web3HttpProvider.eth.Contract(getABI_sFRAX(), address_sFRAX);
    return contract;
}
export function getABI_sFRAX() {
    const abi = [
        {
            inputs: [
                { internalType: 'contract IERC20', name: '_underlying', type: 'address' },
                { internalType: 'string', name: '_name', type: 'string' },
                { internalType: 'string', name: '_symbol', type: 'string' },
                { internalType: 'uint32', name: '_rewardsCycleLength', type: 'uint32' },
                { internalType: 'uint256', name: '_maxDistributionPerSecondPerAsset', type: 'uint256' },
                { internalType: 'address', name: '_timelockAddress', type: 'address' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            inputs: [
                { internalType: 'address', name: 'pendingTimelockAddress', type: 'address' },
                { internalType: 'address', name: 'actualAddress', type: 'address' },
            ],
            name: 'AddressIsNotPendingTimelock',
            type: 'error',
        },
        {
            inputs: [
                { internalType: 'address', name: 'timelockAddress', type: 'address' },
                { internalType: 'address', name: 'actualAddress', type: 'address' },
            ],
            name: 'AddressIsNotTimelock',
            type: 'error',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'caller', type: 'address' },
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'assets', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'shares', type: 'uint256' },
            ],
            name: 'Deposit',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'rewardsToDistribute', type: 'uint256' }],
            name: 'DistributeRewards',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'oldMax', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'newMax', type: 'uint256' },
            ],
            name: 'SetMaxDistributionPerSecondPerAsset',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint40', name: 'cycleEnd', type: 'uint40' },
                { indexed: false, internalType: 'uint40', name: 'lastSync', type: 'uint40' },
                { indexed: false, internalType: 'uint216', name: 'rewardCycleAmount', type: 'uint216' },
            ],
            name: 'SyncRewards',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'previousTimelock', type: 'address' },
                { indexed: true, internalType: 'address', name: 'newTimelock', type: 'address' },
            ],
            name: 'TimelockTransferStarted',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'previousTimelock', type: 'address' },
                { indexed: true, internalType: 'address', name: 'newTimelock', type: 'address' },
            ],
            name: 'TimelockTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'from', type: 'address' },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'caller', type: 'address' },
                { indexed: true, internalType: 'address', name: 'receiver', type: 'address' },
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'assets', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'shares', type: 'uint256' },
            ],
            name: 'Withdraw',
            type: 'event',
        },
        {
            inputs: [],
            name: 'DOMAIN_SEPARATOR',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
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
            name: 'REWARDS_CYCLE_LENGTH',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'UNDERLYING_PRECISION',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'acceptTransferTimelock', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'address', name: '', type: 'address' },
            ],
            name: 'allowance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'asset',
            outputs: [{ internalType: 'contract ERC20', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        { internalType: 'uint40', name: 'cycleEnd', type: 'uint40' },
                        { internalType: 'uint40', name: 'lastSync', type: 'uint40' },
                        { internalType: 'uint216', name: 'rewardCycleAmount', type: 'uint216' },
                    ],
                    internalType: 'struct LinearRewardsErc4626.RewardsCycleData',
                    name: '_rewardsCycleData',
                    type: 'tuple',
                },
                { internalType: 'uint256', name: '_deltaTime', type: 'uint256' },
            ],
            name: 'calculateRewardsToDistribute',
            outputs: [{ internalType: 'uint256', name: '_rewardToDistribute', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'shares', type: 'uint256' }],
            name: 'convertToAssets',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'assets', type: 'uint256' }],
            name: 'convertToShares',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_assets', type: 'uint256' },
                { internalType: 'address', name: '_receiver', type: 'address' },
            ],
            name: 'deposit',
            outputs: [{ internalType: 'uint256', name: '_shares', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_assets', type: 'uint256' },
                { internalType: 'address', name: '_receiver', type: 'address' },
                { internalType: 'uint256', name: '_deadline', type: 'uint256' },
                { internalType: 'bool', name: '_approveMax', type: 'bool' },
                { internalType: 'uint8', name: '_v', type: 'uint8' },
                { internalType: 'bytes32', name: '_r', type: 'bytes32' },
                { internalType: 'bytes32', name: '_s', type: 'bytes32' },
            ],
            name: 'depositWithSignature',
            outputs: [{ internalType: 'uint256', name: '_shares', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastRewardsDistribution',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'maxDeposit',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxDistributionPerSecondPerAsset',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'maxMint',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
            name: 'maxRedeem',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
            name: 'maxWithdraw',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_shares', type: 'uint256' },
                { internalType: 'address', name: '_receiver', type: 'address' },
            ],
            name: 'mint',
            outputs: [{ internalType: 'uint256', name: '_assets', type: 'uint256' }],
            stateMutability: 'nonpayable',
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
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'nonces',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'pendingTimelockAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'uint256', name: 'deadline', type: 'uint256' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'permit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'assets', type: 'uint256' }],
            name: 'previewDeposit',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'previewDistributeRewards',
            outputs: [{ internalType: 'uint256', name: '_rewardToDistribute', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'shares', type: 'uint256' }],
            name: 'previewMint',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'shares', type: 'uint256' }],
            name: 'previewRedeem',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'previewSyncRewards',
            outputs: [
                {
                    components: [
                        { internalType: 'uint40', name: 'cycleEnd', type: 'uint40' },
                        { internalType: 'uint40', name: 'lastSync', type: 'uint40' },
                        { internalType: 'uint216', name: 'rewardCycleAmount', type: 'uint216' },
                    ],
                    internalType: 'struct LinearRewardsErc4626.RewardsCycleData',
                    name: '_newRewardsCycleData',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'assets', type: 'uint256' }],
            name: 'previewWithdraw',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'pricePerShare',
            outputs: [{ internalType: 'uint256', name: '_pricePerShare', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_shares', type: 'uint256' },
                { internalType: 'address', name: '_receiver', type: 'address' },
                { internalType: 'address', name: '_owner', type: 'address' },
            ],
            name: 'redeem',
            outputs: [{ internalType: 'uint256', name: '_assets', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        { inputs: [], name: 'renounceTimelock', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [],
            name: 'rewardsCycleData',
            outputs: [
                { internalType: 'uint40', name: 'cycleEnd', type: 'uint40' },
                { internalType: 'uint40', name: 'lastSync', type: 'uint40' },
                { internalType: 'uint216', name: 'rewardCycleAmount', type: 'uint216' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_maxDistributionPerSecondPerAsset', type: 'uint256' }],
            name: 'setMaxDistributionPerSecondPerAsset',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'storedTotalAssets',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'syncRewardsAndDistribution', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [],
            name: 'timelockAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalAssets',
            outputs: [{ internalType: 'uint256', name: '_totalAssets', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transfer',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_newTimelock', type: 'address' }],
            name: 'transferTimelock',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_assets', type: 'uint256' },
                { internalType: 'address', name: '_receiver', type: 'address' },
                { internalType: 'address', name: '_owner', type: 'address' },
            ],
            name: 'withdraw',
            outputs: [{ internalType: 'uint256', name: '_shares', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=sFRAX.js.map