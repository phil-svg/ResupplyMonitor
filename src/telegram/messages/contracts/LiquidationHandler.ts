import { hyperlink_reUSD } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';

// export async function getMessage_LiquidationHandler_CollateralProccessed(event: any): Promise<string | null> {
//   const lastLine = await getLastLine(event.transactionHash, event.blockNumber);

//   const reUSDBurned = Number(event.returnValues._debtBurned) / 1e18;

//   return `
// 🔥 Liquidation processed: ${formatForPrint(reUSDBurned)}${hyperlink_reUSD()} debt burned
// ${lastLine}
//   `;
// }
