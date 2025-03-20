import { getAddressURL, getTxHashURLfromEtherscan, hyperlink, shortenTxHash } from '../TelegramBot.js';

export async function getMessage_erc20(address: string, tokenName: string, tokenDecimals: number, event: any) {
  const amount = event.returnValues.value / 10 ** tokenDecimals;
  const txHashUrlEtherscan = getTxHashURLfromEtherscan(event.transactionHash);

  return `
Transfer of ${Number(amount.toFixed(0)).toLocaleString()} ${tokenName} spotted
Links:${hyperlink(txHashUrlEtherscan, await shortenTxHash(event.transactionHash))} |${hyperlink(
    getAddressURL(address),
    tokenName
  )} 🦛🦛🦛
`;
}
