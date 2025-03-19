import { address_reusdsfrx_gauge, getABI_reusdsfrx_gauge } from '../../../getters/resupply/reusdsfrx_gauge.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_reusdsfrx_gauge(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_reusdsfrx_gauge, getABI_reusdsfrx_gauge(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_reusdsfrx_gauge;
                const eventName = event.event;
                const contractName = 'reusdsfrx_gauge';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=reusdsfrx_gauge.js.map