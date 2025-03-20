import { getAddressURL, getTxHashURLfromEtherscan, hyperlink } from '../TelegramBot.js';

export function getMessage_erc20(address: string, tokenName: string, tokenDecimals: number, event: any) {
  const amount = event.returnValues.value / 10 ** tokenDecimals;
  const txHashUrlEtherscan = getTxHashURLfromEtherscan(event.transactionHash);

  return `
Transfer of ${amount.toFixed(0).toLocaleString()} ${tokenName} spotted
Links:${hyperlink(txHashUrlEtherscan, 'txHash')} |${hyperlink(getAddressURL(address), tokenName)} 🦛🦛🦛
`;
}
