import { address_InsurancePool, getABI_InsurancePool } from '../../../getters/resupply/InsurancePool.js';
import { web3Call, web3HttpProvider } from '../../../web3/Web3Basics.js';
import { getUser, hyperlink_InsurancePool, hyperlink_reUSD } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';

async function getTotalAssets(event: any) {
  const contract = new web3HttpProvider.eth.Contract(getABI_InsurancePool(), address_InsurancePool);
  return await web3Call(contract, 'totalAssets', [], event.blockNumber);
}

export async function getMessage_InsurancePool_Cooldown(event: any): Promise<string | null> {
  const totalAssets = await getTotalAssets(event);

  const lastLine = await getLastLine(event.transactionHash);

  return `
⏳${await getUser(event.returnValues.account)} put ${formatForPrint(
    event.returnValues.amount / 1e18
  )}${hyperlink_reUSD()} into Cooldown in${hyperlink_InsurancePool()}
Balance InsurancePool: ${formatForPrint(totalAssets / 1e18)}${hyperlink_reUSD()}
${lastLine}  
  `;
}

export async function getMessage_InsurancePool_Deposit(event: any): Promise<string | null> {
  const totalAssets = await getTotalAssets(event);

  const lastLine = await getLastLine(event.transactionHash);

  return `
🚀${await getUser(event.returnValues.sender)} deposited ${formatForPrint(
    event.returnValues.assets / 1e18
  )}${hyperlink_reUSD()} into${hyperlink_InsurancePool()}
Balance InsurancePool: ${formatForPrint(totalAssets / 1e18)}${hyperlink_reUSD()}
${lastLine}  
    `;
}

export async function getMessage_InsurancePool_RewardPaid(event: any): Promise<string | null> {
  const totalAssets = await getTotalAssets(event);

  const lastLine = await getLastLine(event.transactionHash);

  return `
User${await getUser(event.returnValues._user)} received ${formatForPrint(
    event.returnValues._rewardAmount / 1e18
  )}${hyperlink_reUSD()} from${hyperlink_InsurancePool()}
Balance InsurancePool: ${formatForPrint(totalAssets / 1e18)}${hyperlink_reUSD()}
${lastLine}  
  `;
}
