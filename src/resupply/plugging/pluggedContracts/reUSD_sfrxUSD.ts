import { address_reUSD_sfrxUSD, getABI_reUSD_sfrxUSD } from '../../../getters/curve/reUSD_sfrxUSD.js';
import {
  getMessage_reUSD_sfrxUSD_AddLiquidity,
  getMessage_reUSD_sfrxUSD_RemoveLiquidity,
  getMessage_reUSD_sfrxUSD_RemoveLiquidityOne,
} from '../../../telegram/messages/contracts/reUSD_sfrxUSD.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_reUSD_sfrxUSD(eventEmitter: any) {
  const contractAddress = address_reUSD_sfrxUSD;

  const blacklistedEvents = new Set(['Transfer', 'bar']);

  const handlers: Record<string, (event: any) => Promise<void>> = {
    AddLiquidity: async (event) => {
      const message = await getMessage_reUSD_sfrxUSD_AddLiquidity(event);
      if (message) eventEmitter.emit('newMessage', message);
    },
    RemoveLiquidity: async (event) => {
      const message = await getMessage_reUSD_sfrxUSD_RemoveLiquidity(event);
      if (message) eventEmitter.emit('newMessage', message);
    },
    RemoveLiquidityOne: async (event) => {
      const message = await getMessage_reUSD_sfrxUSD_RemoveLiquidityOne(event);
      if (message) eventEmitter.emit('newMessage', message);
    },
    Primitive: async (event) => {
      // const { event: eventName, transactionHash: txHash } = event;
      // const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
      // eventEmitter.emit('newMessage', message);
    },
  };

  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, contractAddress, getABI_reUSD_sfrxUSD(), 'AllEvents');

    for (const event of events) {
      const { event: eventName } = event;

      const handler = handlers[eventName];

      if (handler) {
        await handler(event);
      } else if (!blacklistedEvents.has(eventName)) {
        await handlers['Primitive'](event);
      }
    }
  });
}
