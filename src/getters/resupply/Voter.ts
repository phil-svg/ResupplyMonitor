import { web3HttpProvider } from '../../web3/Web3Basics.js';

export const address_Voter = '0x111111110d3e18e73CC2227A40B565043266DaC1';

export function getContract_Voter() {
  const contract = new web3HttpProvider.eth.Contract(getABI_Voter(), address_Voter);
  return contract;
}

export function getABI_Voter(): any {
  const abi = [
    {
      inputs: [
        { internalType: 'address', name: '_core', type: 'address' },
        { internalType: 'contract IGovStaker', name: '_staker', type: 'address' },
        { internalType: 'uint256', name: '_minCreateProposalPct', type: 'uint256' },
        { internalType: 'uint256', name: '_quorumPct', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
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
      inputs: [{ indexed: true, internalType: 'uint256', name: 'proposalId', type: 'uint256' }],
      name: 'ProposalCancelled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'account', type: 'address' },
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          components: [
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
          ],
          indexed: false,
          internalType: 'struct Voter.Action[]',
          name: 'payload',
          type: 'tuple[]',
        },
        { indexed: false, internalType: 'uint256', name: 'epoch', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'quorumWeight', type: 'uint256' },
      ],
      name: 'ProposalCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: 'uint256', name: 'weight', type: 'uint256' }],
      name: 'ProposalCreationMinPctSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'proposalId', type: 'uint256' },
        { indexed: false, internalType: 'string', name: 'description', type: 'string' },
      ],
      name: 'ProposalDescriptionUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'uint256', name: 'proposalId', type: 'uint256' }],
      name: 'ProposalExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, internalType: 'uint256', name: 'pct', type: 'uint256' }],
      name: 'QuorumPctSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'account', type: 'address' },
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'weightYes', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'weightNo', type: 'uint256' },
      ],
      name: 'VoteCast',
      type: 'event',
    },
    {
      inputs: [],
      name: 'EXECUTION_DEADLINE',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'EXECUTION_DELAY',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_DESCRIPTION_BYTES',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_PCT',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MIN_TIME_BETWEEN_PROPOSALS',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'TOKEN_DECIMALS',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'VOTING_PERIOD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'id', type: 'uint256' },
      ],
      name: 'accountVoteWeights',
      outputs: [
        { internalType: 'uint40', name: 'weightYes', type: 'uint40' },
        { internalType: 'uint40', name: 'weightNo', type: 'uint40' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'canExecute',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'cancelProposal',
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
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        {
          components: [
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
          ],
          internalType: 'struct Voter.Action[]',
          name: 'payload',
          type: 'tuple[]',
        },
        { internalType: 'string', name: 'description', type: 'string' },
      ],
      name: 'createNewProposal',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'nonpayable',
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
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'executeProposal',
      outputs: [],
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
      name: 'getProposalCount',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'getProposalData',
      outputs: [
        { internalType: 'string', name: 'description', type: 'string' },
        { internalType: 'uint256', name: 'epoch', type: 'uint256' },
        { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
        { internalType: 'uint256', name: 'quorumWeight', type: 'uint256' },
        { internalType: 'uint256', name: 'weightYes', type: 'uint256' },
        { internalType: 'uint256', name: 'weightNo', type: 'uint256' },
        { internalType: 'bool', name: 'processed', type: 'bool' },
        { internalType: 'bool', name: 'executable', type: 'bool' },
        {
          components: [
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
          ],
          internalType: 'struct Voter.Action[]',
          name: 'payload',
          type: 'tuple[]',
        },
      ],
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
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'latestProposalTimestamp',
      outputs: [{ internalType: 'uint256', name: 'timestamp', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minCreateProposalPct',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minCreateProposalWeight',
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
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'proposalData',
      outputs: [
        { internalType: 'uint16', name: 'epoch', type: 'uint16' },
        { internalType: 'uint32', name: 'createdAt', type: 'uint32' },
        { internalType: 'uint40', name: 'quorumWeight', type: 'uint40' },
        { internalType: 'bool', name: 'processed', type: 'bool' },
        {
          components: [
            { internalType: 'uint40', name: 'weightYes', type: 'uint40' },
            { internalType: 'uint40', name: 'weightNo', type: 'uint40' },
          ],
          internalType: 'struct Voter.Vote',
          name: 'results',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'proposalDescription',
      outputs: [{ internalType: 'string', name: 'description', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      name: 'proposalPayload',
      outputs: [
        { internalType: 'address', name: 'target', type: 'address' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'quorumPct',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'quorumReached',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
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
      inputs: [{ internalType: 'uint256', name: 'pct', type: 'uint256' }],
      name: 'setMinCreateProposalPct',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'pct', type: 'uint256' }],
      name: 'setQuorumPct',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'staker',
      outputs: [{ internalType: 'contract IGovStaker', name: '', type: 'address' }],
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
      inputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'string', name: 'description', type: 'string' },
      ],
      name: 'updateProposalDescription',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'id', type: 'uint256' },
      ],
      name: 'voteForProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'uint256', name: 'pctYes', type: 'uint256' },
        { internalType: 'uint256', name: 'pctNo', type: 'uint256' },
      ],
      name: 'voteForProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
  return abi;
}
