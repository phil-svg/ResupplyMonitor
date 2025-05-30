import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_GovStaker = '0x22222222E9fE38F6f1FC8C61b25228adB4D8B953';
export function getContract_GovStaker() {
    const contract = new web3HttpProvider.eth.Contract(getABI_GovStaker(), address_GovStaker);
    return contract;
}
export function getABI_GovStaker() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_registry', type: 'address' },
                { internalType: 'address', name: '_token', type: 'address' },
                { internalType: 'uint24', name: '_cooldownEpochs', type: 'uint24' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        { inputs: [], name: 'CannotAddStakeToken', type: 'error' },
        { inputs: [], name: 'DecimalsMustBe18', type: 'error' },
        { inputs: [], name: 'InsufficientRealizedStake', type: 'error' },
        { inputs: [], name: 'InvalidAmount', type: 'error' },
        { inputs: [], name: 'InvalidCooldown', type: 'error' },
        { inputs: [], name: 'InvalidDuration', type: 'error' },
        { inputs: [], name: 'MustBeGreaterThanZero', type: 'error' },
        { inputs: [], name: 'OldEpoch', type: 'error' },
        { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
        { inputs: [], name: 'RewardAlreadyAdded', type: 'error' },
        { inputs: [], name: 'RewardTooHigh', type: 'error' },
        { inputs: [], name: 'RewardsStillActive', type: 'error' },
        {
            inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
            name: 'SafeERC20FailedOperation',
            type: 'error',
        },
        { inputs: [], name: 'SupplyMustBeGreaterThanZero', type: 'error' },
        { inputs: [], name: 'Unauthorized', type: 'error' },
        { inputs: [], name: 'ZeroAddress', type: 'error' },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            name: 'Cooldown',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint24', name: 'newDuration', type: 'uint24' }],
            name: 'CooldownEpochsUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: true, internalType: 'address', name: 'delegate', type: 'address' },
                { indexed: false, internalType: 'bool', name: 'isApproved', type: 'bool' },
            ],
            name: 'DelegateApprovalSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }],
            name: 'PermaStakerSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'rewardToken', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'RewardAdded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'user', type: 'address' },
                { indexed: true, internalType: 'address', name: 'rewardToken', type: 'address' },
                { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' },
            ],
            name: 'RewardPaid',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'user', type: 'address' },
                { indexed: true, internalType: 'address', name: 'redirect', type: 'address' },
            ],
            name: 'RewardRedirected',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'rewardsToken', type: 'address' },
                { indexed: true, internalType: 'address', name: 'rewardsDistributor', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'rewardsDuration', type: 'uint256' },
            ],
            name: 'RewardTokenAdded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'rewardsToken', type: 'address' },
                { indexed: true, internalType: 'address', name: 'rewardsDistributor', type: 'address' },
            ],
            name: 'RewardsDistributorSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'rewardsToken', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'duration', type: 'uint256' },
            ],
            name: 'RewardsDurationUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'epoch', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'Staked',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'Unstaked',
            type: 'event',
        },
        {
            inputs: [],
            name: 'MAX_COOLDOWN_DURATION',
            outputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
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
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'accountData',
            outputs: [
                { internalType: 'uint112', name: 'realizedStake', type: 'uint112' },
                { internalType: 'uint112', name: 'pendingStake', type: 'uint112' },
                { internalType: 'uint16', name: 'lastUpdateEpoch', type: 'uint16' },
                { internalType: 'bool', name: 'isPermaStaker', type: 'bool' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_rewardsToken', type: 'address' },
                { internalType: 'address', name: '_rewardsDistributor', type: 'address' },
                { internalType: 'uint256', name: '_rewardsDuration', type: 'uint256' },
            ],
            name: 'addReward',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'checkpointAccount',
            outputs: [
                {
                    components: [
                        { internalType: 'uint112', name: 'realizedStake', type: 'uint112' },
                        { internalType: 'uint112', name: 'pendingStake', type: 'uint112' },
                        { internalType: 'uint16', name: 'lastUpdateEpoch', type: 'uint16' },
                        { internalType: 'bool', name: 'isPermaStaker', type: 'bool' },
                    ],
                    internalType: 'struct GovStaker.AccountData',
                    name: 'acctData',
                    type: 'tuple',
                },
                { internalType: 'uint256', name: 'weight', type: 'uint256' },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'uint256', name: '_epoch', type: 'uint256' },
            ],
            name: 'checkpointAccountWithLimit',
            outputs: [
                {
                    components: [
                        { internalType: 'uint112', name: 'realizedStake', type: 'uint112' },
                        { internalType: 'uint112', name: 'pendingStake', type: 'uint112' },
                        { internalType: 'uint16', name: 'lastUpdateEpoch', type: 'uint16' },
                        { internalType: 'bool', name: 'isPermaStaker', type: 'bool' },
                    ],
                    internalType: 'struct GovStaker.AccountData',
                    name: 'acctData',
                    type: 'tuple',
                },
                { internalType: 'uint256', name: 'weight', type: 'uint256' },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'checkpointTotal',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'cooldown',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'cooldownEpochs',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'cooldowns',
            outputs: [
                { internalType: 'uint104', name: 'end', type: 'uint104' },
                { internalType: 'uint152', name: 'amount', type: 'uint152' },
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
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'address', name: '_rewardsToken', type: 'address' },
            ],
            name: 'earned',
            outputs: [{ internalType: 'uint256', name: 'pending', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'earnedMulti',
            outputs: [{ internalType: 'uint256[]', name: 'pending', type: 'uint256[]' }],
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
            name: 'escrow',
            outputs: [{ internalType: 'contract GovStakerEscrow', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'exit',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'getAccountWeight',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'uint256', name: '_epoch', type: 'uint256' },
            ],
            name: 'getAccountWeightAt',
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
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'address', name: '_rewardsToken', type: 'address' },
            ],
            name: 'getOneReward',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        { inputs: [], name: 'getReward', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'getReward',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_rewardsToken', type: 'address' }],
            name: 'getRewardForDuration',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getTotalWeight',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'epoch', type: 'uint256' }],
            name: 'getTotalWeightAt',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'getUnstakableAmount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'irreversiblyCommitAccountAsPermanentStaker',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'caller', type: 'address' },
            ],
            name: 'isApprovedDelegate',
            outputs: [{ internalType: 'bool', name: 'isApproved', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'isCooldownEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'isPermaStaker',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_rewardsToken', type: 'address' }],
            name: 'lastTimeRewardApplicable',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'migrateStake',
            outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_rewardsToken', type: 'address' },
                { internalType: 'uint256', name: '_rewardAmount', type: 'uint256' },
            ],
            name: 'notifyRewardAmount',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'onPermaStakeMigrate',
            outputs: [],
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
                { internalType: 'address', name: '_tokenAddress', type: 'address' },
                { internalType: 'uint256', name: '_tokenAmount', type: 'uint256' },
            ],
            name: 'recoverERC20',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'registry',
            outputs: [{ internalType: 'contract IResupplyRegistry', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'rewardData',
            outputs: [
                { internalType: 'address', name: 'rewardsDistributor', type: 'address' },
                { internalType: 'uint256', name: 'rewardsDuration', type: 'uint256' },
                { internalType: 'uint256', name: 'periodFinish', type: 'uint256' },
                { internalType: 'uint256', name: 'rewardRate', type: 'uint256' },
                { internalType: 'uint256', name: 'lastUpdateTime', type: 'uint256' },
                { internalType: 'uint256', name: 'rewardPerTokenStored', type: 'uint256' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_rewardsToken', type: 'address' }],
            name: 'rewardPerToken',
            outputs: [{ internalType: 'uint256', name: 'rewardAmount', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'rewardRedirect',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'rewardTokens',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'rewardTokensLength',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'address', name: '', type: 'address' },
            ],
            name: 'rewards',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint24', name: '_epochs', type: 'uint24' }],
            name: 'setCooldownEpochs',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_delegate', type: 'address' },
                { internalType: 'bool', name: '_isApproved', type: 'bool' },
            ],
            name: 'setDelegateApproval',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_to', type: 'address' }],
            name: 'setRewardRedirect',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_rewardsToken', type: 'address' },
                { internalType: 'address', name: '_rewardsDistributor', type: 'address' },
            ],
            name: 'setRewardsDistributor',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_rewardsToken', type: 'address' },
                { internalType: 'uint256', name: '_rewardsDuration', type: 'uint256' },
            ],
            name: 'setRewardsDuration',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
            name: 'stake',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'stake',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'stakeToken',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
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
            name: 'totalLastUpdateEpoch',
            outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalPending',
            outputs: [{ internalType: 'uint112', name: '', type: 'uint112' }],
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
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'address', name: '_receiver', type: 'address' },
            ],
            name: 'unstake',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'address', name: '', type: 'address' },
            ],
            name: 'userRewardPerTokenPaid',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=GovStaker.js.map