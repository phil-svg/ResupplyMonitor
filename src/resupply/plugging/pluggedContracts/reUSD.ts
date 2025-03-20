import { address_reUSD, getABI_reUSD } from '../../../getters/resupply/reUSD.js';
import { getMessage_erc20 } from '../../../telegram/messages/Erc20Transfer.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_reUSD(eventEmitter: any) {
  const solvedEvents = new Set(['Transfer', 'foo']);
  const blacklistedEvents = new Set(['Approve', 'bar']);

  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_reUSD, getABI_reUSD(), 'AllEvents');
    if (events.length > 0) {
      for (const event of events) {
        if (solvedEvents.has(event.event) || blacklistedEvents.has(event.event)) continue;

        const contractAddress = address_reUSD;
        const eventName = event.event;
        const contractName = 'reUSD';
        const txHash = event.transactionHash;
        const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
        eventEmitter.emit('newMessage', message);
      }
    }
  });

  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_reUSD, getABI_reUSD(), 'Transfer');
    if (events.length > 0) {
      events.forEach((event: any) => {
        const message = getMessage_erc20(address_reUSD, 'reUSD', 18, event);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
