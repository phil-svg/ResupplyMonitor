import { address_reusdscrv_gauge, getABI_reusdscrv_gauge } from '../../../getters/resupply/reusdscrv_gauge.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_reusdscrv_gauge(eventEmitter: any) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_reusdscrv_gauge, getABI_reusdscrv_gauge(), 'AllEvents');
    if (events.length > 0) {
      events.forEach(async (event: any) => {
        const contractAddress = address_reusdscrv_gauge;
        const eventName = event.event;
        const contractName = 'reusdscrv_gauge';
        const txHash = event.transactionHash;
        const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
