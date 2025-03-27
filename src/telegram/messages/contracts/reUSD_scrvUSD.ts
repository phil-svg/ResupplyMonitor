import { getUser, hyperlink_reUSD, hyperlink_reUSD_scrvUSD, hyperlink_scrvUSD } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';

export async function getMessage_reUSD_scrvUSD_AddLiquidity(event: any): Promise<string | null> {
  const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

  const reUSD = Number(event.returnValues.token_amounts[0]) / 1e18;
  const scrvUSD = Number(event.returnValues.token_amounts[1]) / 1e18;

  const parts = [];
  if (reUSD > 0) parts.push(`${formatForPrint(reUSD)}${hyperlink_reUSD()}`);
  if (scrvUSD > 0) parts.push(`${formatForPrint(scrvUSD)} scrvUSD`);

  const provided = parts.join(' + ');

  return `
💧${await getUser(event.returnValues.provider)} added ${provided} to${hyperlink_reUSD_scrvUSD()}
${lastLine}  
  `;
}

export async function getMessage_reUSD_scrvUSD_RemoveLiquidity(event: any): Promise<string | null> {
  const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

  const reUSD = Number(event.returnValues.token_amounts[0]) / 1e18;
  const scrvUSD = Number(event.returnValues.token_amounts[1]) / 1e18;

  const parts = [];
  if (reUSD > 0) parts.push(`${formatForPrint(reUSD)}${hyperlink_reUSD()}`);
  if (scrvUSD > 0) parts.push(`${formatForPrint(scrvUSD)}${hyperlink_scrvUSD()}`);

  const withdrawn = parts.join(' + ');

  return `
💨${await getUser(event.returnValues.provider)} removed ${withdrawn} from${hyperlink_reUSD_scrvUSD()}
${lastLine}  
  `;
}

export async function getMessage_reUSD_scrvUSD_RemoveLiquidityOne(event: any): Promise<string | null> {
  const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

  const tokenId = Number(event.returnValues.token_id);
  const coinAmount = Number(event.returnValues.coin_amount) / 1e18;

  const tokenName = tokenId === 0 ? hyperlink_reUSD() : hyperlink_scrvUSD();

  return `
💨${await getUser(event.returnValues.provider)} withdrew ${formatForPrint(
    coinAmount
  )}${tokenName} from${hyperlink_reUSD_scrvUSD()}
${lastLine}  
  `;
}
