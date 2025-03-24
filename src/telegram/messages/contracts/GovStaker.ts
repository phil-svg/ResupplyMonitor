import { getUser, hyperlink_GovStaker, hyperlink_RSUP } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';

export async function getMessage_GovStaker_Staked(event: any): Promise<string | null> {
  const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

  return `
🚀${await getUser(event.returnValues.account)} staked ${formatForPrint(
    event.returnValues.amount / 1e18
  )}${hyperlink_RSUP()} in${hyperlink_GovStaker()}
${lastLine}  
  `;
}
