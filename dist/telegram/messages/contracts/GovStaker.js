import { threshold_RSUP_RewardPaid, threshold_RSUP_Staked, threshold_RSUP_Unstaked } from '../../../Thresholds.js';
import { getUser, hyperlink_GovStaker, hyperlink_reUSD, hyperlink_RSUP } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';
export async function getMessage_GovStaker_Staked(event) {
    if (event.returnValues.amount / 1e18 <= threshold_RSUP_Staked)
        return null;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🚀${await getUser(event.returnValues.account)} staked ${formatForPrint(event.returnValues.amount / 1e18)}${hyperlink_RSUP()} in${hyperlink_GovStaker()}
${lastLine}  
  `;
}
export async function getMessage_GovStaker_RewardPaid(event) {
    if (event.returnValues.reward / 1e18 <= threshold_RSUP_RewardPaid)
        return null;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🚀${await getUser(event.returnValues.recipient)} was rewarded ${formatForPrint(event.returnValues.reward / 1e18)}${hyperlink_reUSD()} via${hyperlink_GovStaker()}
${lastLine}  
  `;
}
export async function getMessage_GovStaker_Unstaked(event) {
    if (event.returnValues.amount / 1e18 <= threshold_RSUP_Unstaked)
        return null;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🚀${await getUser(event.returnValues.account)} unstaked ${formatForPrint(event.returnValues.amount / 1e18)}${hyperlink_RSUP()} via${hyperlink_GovStaker()}
${lastLine}  
  `;
}
//# sourceMappingURL=GovStaker.js.map