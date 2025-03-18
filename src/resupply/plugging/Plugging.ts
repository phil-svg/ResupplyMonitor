import { plugTo_reUSD } from './reUSD.js';
import { plugTo_RSUP } from './RSUP.js';

export async function startListeningToAllContracts(eventEmitter: any) {
  await plugTo_reUSD(eventEmitter);
  await plugTo_RSUP(eventEmitter);
}
