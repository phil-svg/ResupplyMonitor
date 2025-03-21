import { address_RedemptionHandler, getABI_RedemptionHandler } from '../../../getters/resupply/RedemptionHandler.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_RedemptionHandler(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_RedemptionHandler, getABI_RedemptionHandler(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_RedemptionHandler;
                const eventName = event.event;
                const contractName = 'RedemptionHandler';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=RedemptionHandler.js.map