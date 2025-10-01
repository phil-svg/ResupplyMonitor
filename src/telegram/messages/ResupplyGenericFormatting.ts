import { getContract_reUSD } from '../../getters/resupply/reUSD.js';
import { getTotalFeesOngoingEpoch } from '../../resupply/UtilFunctions.js';
import { threshold_erc20_transfer } from '../../Thresholds.js';
import { web3Call } from '../../web3/Web3Basics.js';
import { hyperlink_reUSD } from './Hyperlinks.js';
import {
  formatForPrint,
  getAddressURL,
  getTxHashURLfromEtherscan,
  hyperlink,
  shortenTxHash,
} from './TelegramFormatting.js';

export async function getMessage_erc20(address: string, tokenName: string, tokenDecimals: number, event: any) {
  const amount = event.returnValues.value / 10 ** tokenDecimals;
  if (amount <= threshold_erc20_transfer) return;
  const txHashUrlEtherscan = getTxHashURLfromEtherscan(event.transactionHash);

  return `
🚀 Transfer of ${Number(amount.toFixed(0)).toLocaleString()} ${tokenName} spotted
Links:${hyperlink(txHashUrlEtherscan, await shortenTxHash(event.transactionHash))} |${hyperlink(
    getAddressURL(address),
    tokenName
  )} 🦛🦛🦛
`;
}

export async function getMessage_primitiveEvent(
  contractAddress: string,
  eventName: string,
  contractName: string,
  txHash: string
) {
  const txHashUrlEtherscan = getTxHashURLfromEtherscan(txHash);
  const urlContract = getAddressURL(contractAddress);

  return `
New ${eventName} spotted in${hyperlink(urlContract, contractName)}
Links:${hyperlink(txHashUrlEtherscan, await shortenTxHash(txHash))} 🦛🦛🦛
`;
}

export async function getLastLine(txHash: string, blockNumber: number): Promise<string> {
  const totalReUSDBorrowed = (await web3Call(getContract_reUSD(), 'totalSupply', [], blockNumber)) / 1e18;
  const txHashUrlEtherscan = getTxHashURLfromEtherscan(txHash);
  const shortenedTx = await shortenTxHash(txHash);

  const { totalFees } = await getTotalFeesOngoingEpoch();

  return `Total${hyperlink_reUSD()} borrowed: ${formatForPrint(
    totalReUSDBorrowed
  )} | Total Claimable Fees: ${formatForPrint(totalFees)}${hyperlink_reUSD()}
Links:${hyperlink(txHashUrlEtherscan, shortenedTx)} 🦛🦛🦛`;
}
