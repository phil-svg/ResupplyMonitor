import { threshold_reUSD_reward, threshold_RSUP_stake, threshold_unstake } from '../../Thresholds.js';
import { getUser, hyperlink_GovStaker, hyperlink_reUSD, hyperlink_RSUP } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';

export async function getMessage_GovStaker_Staked(event: any): Promise<string | null> {
  if (event.returnValues.amount / 1e18 <= threshold_RSUP_stake) return null;
  const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

  return `
🚀${await getUser(event.returnValues.account)} staked ${formatForPrint(
    event.returnValues.amount / 1e18
  )}${hyperlink_RSUP()} in${hyperlink_GovStaker()}
${lastLine}  
  `;
}

export async function getMessage_GovStaker_RewardPaid(event: any): Promise<string | null> {
  if (event.returnValues.reward / 1e18 <= threshold_reUSD_reward) return null;

  const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

  return `
🚀${await getUser(event.returnValues.recipient)} was rewarded ${formatForPrint(
    event.returnValues.reward / 1e18
  )}${hyperlink_reUSD()} via${hyperlink_GovStaker()}
${lastLine}  
  `;
}

export async function getMessage_GovStaker_Unstaked(event: any): Promise<string | null> {
  if (event.returnValues.amount / 1e18 <= threshold_unstake) return null;

  const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

  return `
🚀${await getUser(event.returnValues.account)} unstaked ${formatForPrint(
    event.returnValues.amount / 1e18
  )}${hyperlink_RSUP()} via${hyperlink_GovStaker()}
${lastLine}  
  `;
}
