import { getAddressURL, getTxHashURLfromEtherscan, hyperlink, shortenTxHash } from './TelegramFormatting.js';
export async function getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash) {
    const txHashUrlEtherscan = getTxHashURLfromEtherscan(txHash);
    const urlContract = getAddressURL(contractAddress);
    return `
New ${eventName} spotted in${hyperlink(urlContract, contractName)}
Links:${hyperlink(txHashUrlEtherscan, await shortenTxHash(txHash))} 🦛🦛🦛
`;
}
//# sourceMappingURL=PrimitiveEventMessage.js.map