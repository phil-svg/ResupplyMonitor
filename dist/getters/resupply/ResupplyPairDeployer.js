import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_ResupplyPairDeployer = '0x5555555524De7C56C1B20128dbEAace47d2C0417';
export function getContract_ResupplyPairDeployer() {
    const contract = new web3HttpProvider.eth.Contract(getABI_ResupplyPairDeployer(), address_ResupplyPairDeployer);
    return contract;
}
export function getABI_ResupplyPairDeployer() {
    const abi = [
        {
            inputs: [
                { internalType: 'address', name: '_core', type: 'address' },
                { internalType: 'address', name: '_registry', type: 'address' },
                { internalType: 'address', name: '_govToken', type: 'address' },
                { internalType: 'address', name: '_initialoperator', type: 'address' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        { inputs: [], name: 'Create2Failed', type: 'error' },
        { inputs: [], name: 'NonUniqueName', type: 'error' },
        { inputs: [], name: 'ProtocolAlreadyExists', type: 'error' },
        { inputs: [], name: 'ProtocolNameEmpty', type: 'error' },
        { inputs: [], name: 'ProtocolNameTooLong', type: 'error' },
        { inputs: [], name: 'ProtocolNotFound', type: 'error' },
        { inputs: [], name: 'WhitelistedDeployersOnly', type: 'error' },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'address_', type: 'address' },
                { indexed: true, internalType: 'address', name: 'collateral', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'protocolId', type: 'uint256' },
                { indexed: false, internalType: 'string', name: 'name', type: 'string' },
                { indexed: false, internalType: 'bytes', name: 'configData', type: 'bytes' },
                { indexed: false, internalType: 'bytes', name: 'immutables', type: 'bytes' },
                { indexed: false, internalType: 'bytes', name: 'customConfigData', type: 'bytes' },
            ],
            name: 'LogDeploy',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'uint256', name: 'protocolId', type: 'uint256' },
                { indexed: false, internalType: 'string', name: 'protocolName', type: 'string' },
                { indexed: false, internalType: 'bytes4', name: 'borrowTokenSig', type: 'bytes4' },
                { indexed: false, internalType: 'bytes4', name: 'collateralTokenSig', type: 'bytes4' },
            ],
            name: 'ProtocolUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: '_op', type: 'address' },
                { indexed: false, internalType: 'bool', name: '_valid', type: 'bool' },
            ],
            name: 'SetOperator',
            type: 'event',
        },
        {
            inputs: [
                { internalType: 'string', name: '_protocolName', type: 'string' },
                { internalType: 'bytes4', name: '_borrowTokenSig', type: 'bytes4' },
                { internalType: 'bytes4', name: '_collateralTokenSig', type: 'bytes4' },
            ],
            name: 'addSupportedProtocol',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: 'protocolId', type: 'uint256' },
                { internalType: 'address', name: 'borrowToken', type: 'address' },
                { internalType: 'address', name: 'collateralToken', type: 'address' },
            ],
            name: 'collateralId',
            outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'contractAddress1',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'contractAddress2',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
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
                { internalType: 'uint256', name: '_protocolId', type: 'uint256' },
                { internalType: 'bytes', name: '_configData', type: 'bytes' },
                { internalType: 'address', name: '_underlyingStaking', type: 'address' },
                { internalType: 'uint256', name: '_underlyingStakingId', type: 'uint256' },
            ],
            name: 'deploy',
            outputs: [{ internalType: 'address', name: '_pairAddress', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_protocolId', type: 'uint256' },
                { internalType: 'address', name: '_collateral', type: 'address' },
            ],
            name: 'getNextName',
            outputs: [
                { internalType: 'string', name: '_name', type: 'string' },
                { internalType: 'address', name: '_borrowToken', type: 'address' },
                { internalType: 'address', name: '_collateralToken', type: 'address' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'govToken',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'operators',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
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
            inputs: [{ internalType: 'uint256', name: 'protocolId', type: 'uint256' }],
            name: 'platformNameById',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
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
            inputs: [{ internalType: 'bytes', name: '_creationCode', type: 'bytes' }],
            name: 'setCreationCode',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_operator', type: 'address' },
                { internalType: 'bool', name: '_valid', type: 'bool' },
            ],
            name: 'setOperator',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'supportedProtocols',
            outputs: [
                { internalType: 'string', name: 'protocolName', type: 'string' },
                { internalType: 'bytes4', name: 'borrowTokenSig', type: 'bytes4' },
                { internalType: 'bytes4', name: 'collateralTokenSig', type: 'bytes4' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: 'protocolId', type: 'uint256' },
                { internalType: 'string', name: '_protocolName', type: 'string' },
                { internalType: 'bytes4', name: '_borrowTokenSig', type: 'bytes4' },
                { internalType: 'bytes4', name: '_collateralTokenSig', type: 'bytes4' },
            ],
            name: 'updateSupportedProtocol',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'version',
            outputs: [
                { internalType: 'uint256', name: '_major', type: 'uint256' },
                { internalType: 'uint256', name: '_minor', type: 'uint256' },
                { internalType: 'uint256', name: '_patch', type: 'uint256' },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
    ];
    return abi;
}
//# sourceMappingURL=ResupplyPairDeployer.js.map