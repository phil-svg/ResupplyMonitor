import { threshold_erc20_transfer } from '../Thresholds.js';
import { getAddressURL, getTxHashURLfromEtherscan, hyperlink, shortenTxHash } from './TelegramFormatting.js';
export async function getMessage_erc20(address, tokenName, tokenDecimals, event) {
    const amount = event.returnValues.value / 10 ** tokenDecimals;
    if (amount <= threshold_erc20_transfer)
        return;
    const txHashUrlEtherscan = getTxHashURLfromEtherscan(event.transactionHash);
    return `
Transfer of ${Number(amount.toFixed(0)).toLocaleString()} ${tokenName} spotted
Links:${hyperlink(txHashUrlEtherscan, await shortenTxHash(event.transactionHash))} |${hyperlink(getAddressURL(address), tokenName)} 🦛🦛🦛
`;
}
export async function getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash) {
    const txHashUrlEtherscan = getTxHashURLfromEtherscan(txHash);
    const urlContract = getAddressURL(contractAddress);
    return `
New ${eventName} spotted in${hyperlink(urlContract, contractName)}
Links:${hyperlink(txHashUrlEtherscan, await shortenTxHash(txHash))} 🦛🦛🦛
`;
}
export async function getLastLine(txHash) {
    const txHashUrlEtherscan = getTxHashURLfromEtherscan(txHash);
    return `Links:${hyperlink(txHashUrlEtherscan, await shortenTxHash(txHash))} 🦛🦛🦛`;
}
//# sourceMappingURL=ResupplyGenericFormatting.js.map