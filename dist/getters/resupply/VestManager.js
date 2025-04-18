import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_VestManager = '0x6666666677B06CB55EbF802BB12f8876360f919c';
export function getContract_VestManager() {
    const contract = new web3HttpProvider.eth.Contract(getABI_VestManager(), address_VestManager);
    return contract;
}
export function getABI_VestManager() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_token', type: 'address' },
                { internalType: 'address', name: '_burnAddress', type: 'address' },
                { internalType: 'address[3]', name: '_redemptionTokens', type: 'address[3]' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'enum VestManager.AllocationType', name: 'allocationType', type: 'uint8' },
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'AirdropClaimed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: true, internalType: 'bool', name: 'allowPermissionlessClaims', type: 'bool' },
                { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
            ],
            name: 'ClaimSettingsSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'Claimed',
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
        { anonymous: false, inputs: [], name: 'InitializationParamsSet', type: 'event' },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'enum VestManager.AllocationType', name: 'allocationType', type: 'uint8' },
                { indexed: false, internalType: 'bytes32', name: 'root', type: 'bytes32' },
            ],
            name: 'MerkleRootSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'token', type: 'address' },
                { indexed: true, internalType: 'address', name: 'redeemer', type: 'address' },
                { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'TokenRedeemed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'account', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'duration', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'VestCreated',
            type: 'event',
        },
        {
            inputs: [],
            name: 'BURN_ADDRESS',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'INITIAL_SUPPLY',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'VEST_GLOBAL_START_TIME',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'enum VestManager.AllocationType', name: '', type: 'uint8' }],
            name: 'allocationByType',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'claim',
            outputs: [{ internalType: 'uint256', name: '_claimed', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'claimSettings',
            outputs: [
                { internalType: 'bool', name: 'allowPermissionlessClaims', type: 'bool' },
                { internalType: 'address', name: 'recipient', type: 'address' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'address', name: '_callback', type: 'address' },
            ],
            name: 'claimWithCallback',
            outputs: [{ internalType: 'uint256', name: '_claimed', type: 'uint256' }],
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
            name: 'cvxprisma',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'enum VestManager.AllocationType', name: '', type: 'uint8' }],
            name: 'durationByType',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'getAggregateVestData',
            outputs: [
                { internalType: 'uint256', name: '_totalAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_totalClaimable', type: 'uint256' },
                { internalType: 'uint256', name: '_totalClaimed', type: 'uint256' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'uint256', name: 'index', type: 'uint256' },
            ],
            name: 'getSingleVestData',
            outputs: [
                { internalType: 'uint256', name: '_total', type: 'uint256' },
                { internalType: 'uint256', name: '_claimable', type: 'uint256' },
                { internalType: 'uint256', name: '_claimed', type: 'uint256' },
                { internalType: 'uint256', name: '_timeRemaining', type: 'uint256' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'account', type: 'address' },
                { internalType: 'enum VestManager.AllocationType', name: '', type: 'uint8' },
            ],
            name: 'hasClaimed',
            outputs: [{ internalType: 'bool', name: 'hasClaimed', type: 'bool' }],
            stateMutability: 'view',
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
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'address', name: '_recipient', type: 'address' },
                { internalType: 'uint256', name: '_amount', type: 'uint256' },
                { internalType: 'enum VestManager.AllocationType', name: '_type', type: 'uint8' },
                { internalType: 'bytes32[]', name: '_proof', type: 'bytes32[]' },
                { internalType: 'uint256', name: '_index', type: 'uint256' },
            ],
            name: 'merkleClaim',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'enum VestManager.AllocationType', name: '', type: 'uint8' }],
            name: 'merkleRootByType',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'numAccountVests',
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
            name: 'prisma',
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
            name: 'redeem',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'redemptionRatio',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bool', name: '_allowPermissionlessClaims', type: 'bool' },
                { internalType: 'address', name: '_recipient', type: 'address' },
            ],
            name: 'setClaimSettings',
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
            inputs: [
                { internalType: 'uint256', name: '_maxRedeemable', type: 'uint256' },
                { internalType: 'bytes32[3]', name: '_merkleRoots', type: 'bytes32[3]' },
                { internalType: 'address[4]', name: '_nonUserTargets', type: 'address[4]' },
                { internalType: 'uint256[8]', name: '_vestDurations', type: 'uint256[8]' },
                { internalType: 'uint256[8]', name: '_allocPercentages', type: 'uint256[8]' },
            ],
            name: 'setInitializationParams',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32', name: '_root', type: 'bytes32' },
                { internalType: 'uint256', name: '_allocation', type: 'uint256' },
            ],
            name: 'setLockPenaltyMerkleRoot',
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
            inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'uint256', name: '', type: 'uint256' },
            ],
            name: 'userVests',
            outputs: [
                { internalType: 'uint32', name: 'duration', type: 'uint32' },
                { internalType: 'uint112', name: 'amount', type: 'uint112' },
                { internalType: 'uint112', name: 'claimed', type: 'uint112' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'yprisma',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=VestManager.js.map