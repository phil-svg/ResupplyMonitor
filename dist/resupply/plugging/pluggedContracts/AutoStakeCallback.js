import { address_AutoStakeCallback, getABI_AutoStakeCallback } from '../../../getters/resupply/AutoStakeCallback.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_AutoStakeCallback(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_AutoStakeCallback, getABI_AutoStakeCallback(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_AutoStakeCallback;
                const eventName = event.event;
                const contractName = 'AutoStakeCallback';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=AutoStakeCallback.js.map