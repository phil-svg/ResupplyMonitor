import { getABI_WriteOffToken } from '../../../getters/resupply/WriteOffToken.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
import { allMarketsInfoPromise } from '../../LoadAllMarkets.js';

export async function plugTo_WriteOffToken(eventEmitter: any) {
  const allMarketsInfo = await allMarketsInfoPromise;

  if (allMarketsInfo) {
    for (const pair of allMarketsInfo) {
      await handler(eventEmitter, pair.writeOffTokenAddress, pair.resupplyPairName);
    }
  }
}

async function handler(eventEmitter: any, address: string, name: string) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address, getABI_WriteOffToken(), 'AllEvents');
    if (events.length > 0) {
      events.forEach(async (event: any) => {
        const contractAddress = address;
        const eventName = event.event;
        const contractName = 'WriteOffToken ' + name;
        const txHash = event.transactionHash;
        const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
