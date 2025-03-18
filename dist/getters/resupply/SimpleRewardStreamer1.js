import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_SimpleRewardStreamer1 = '0xCd32c9bf38AbfEEc2F5691Dcb39cbc9aC55f0685';
export function getContract_SimpleRewardStreamer1() {
    const contract = new web3HttpProvider.eth.Contract(getABI_SimpleRewardStreamer1(), address_SimpleRewardStreamer1);
    return contract;
}
export function getABI_SimpleRewardStreamer1() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_registry', type: 'address' },
                { internalType: 'address', name: '_rewardToken', type: 'address' },
                { internalType: 'address', name: '_initialWeightAddress', type: 'address' },
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
            inputs: [{ indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' }],
            name: 'RewardAdded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'user', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' },
            ],
            name: 'RewardPaid',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'user', type: 'address' },
                { indexed: false, internalType: 'address', name: 'redirect', type: 'address' },
            ],
            name: 'RewardRedirected',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'user', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'oldWeight', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'newWeight', type: 'uint256' },
            ],
            name: 'WeightSet',
            type: 'event',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'balanceOf',
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
            name: 'currentRewards',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
            name: 'donate',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'duration',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'earned',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'getReward', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'address', name: '_forwardTo', type: 'address' },
            ],
            name: 'getReward',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'getReward',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'historicalRewards',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastTimeRewardApplicable',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastUpdateTime',
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
            name: 'periodFinish',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_rewards', type: 'uint256' }],
            name: 'queueNewRewards',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'queuedRewards',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
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
            inputs: [],
            name: 'rewardPerToken',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'rewardPerTokenStored',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'rewardRate',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
            inputs: [],
            name: 'rewardToken',
            outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'rewards',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
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
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'setWeight',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_account', type: 'address[]' },
                { internalType: 'uint256[]', name: '_amount', type: 'uint256[]' },
            ],
            name: 'setWeights',
            outputs: [],
            stateMutability: 'nonpayable',
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
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'userRewardPerTokenPaid',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'user_checkpoint',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=SimpleRewardStreamer1.js.map