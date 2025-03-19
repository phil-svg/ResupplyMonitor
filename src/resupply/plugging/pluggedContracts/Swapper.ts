import { address_Swapper, getABI_Swapper } from '../../../getters/resupply/Swapper.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_Swapper(eventEmitter: any) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_Swapper, getABI_Swapper(), 'AllEvents');
    if (events.length > 0) {
      events.forEach(async (event: any) => {
        const contractAddress = address_Swapper;
        const eventName = event.event;
        const contractName = 'Swapper';
        const txHash = event.transactionHash;
        const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
