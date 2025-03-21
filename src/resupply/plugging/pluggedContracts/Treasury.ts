import { address_Treasury, getABI_Treasury } from '../../../getters/resupply/Treasury.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_Treasury(eventEmitter: any) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_Treasury, getABI_Treasury(), 'AllEvents');
    if (events.length > 0) {
      events.forEach(async (event: any) => {
        const contractAddress = address_Treasury;
        const eventName = event.event;
        const contractName = 'Treasury';
        const txHash = event.transactionHash;
        const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
