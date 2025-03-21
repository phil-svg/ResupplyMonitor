import { address_ResupplyRegistry, getABI_ResupplyRegistry } from '../../../getters/resupply/ResupplyRegistry.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_ResupplyRegistry(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_ResupplyRegistry, getABI_ResupplyRegistry(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_ResupplyRegistry;
                const eventName = event.event;
                const contractName = 'ResupplyRegistry';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=ResupplyRegistry.js.map