import { web3HttpProvider } from '../../web3/Web3Basics.js';
export const address_sreUSD = '0x557AB1e003951A73c12D16F0fEA8490E39C33C35';
export function getContract_sreUSD() {
    const contract = new web3HttpProvider.eth.Contract(getABI_sreUSD(), address_sreUSD);
    return contract;
}
export function getABI_sreUSD() {
    const abi = [
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'from', type: 'address' },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'Transfer',
            type: 'event',
        },
    ];
    return abi;
}
//# sourceMappingURL=sreUSD.js.map