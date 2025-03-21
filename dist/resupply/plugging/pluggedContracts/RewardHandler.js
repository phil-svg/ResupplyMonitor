import { address_RewardHandler, getABI_RewardHandler } from '../../../getters/resupply/RewardHandler.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_RewardHandler(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_RewardHandler, getABI_RewardHandler(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_RewardHandler;
                const eventName = event.event;
                const contractName = 'RewardHandler';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=RewardHandler.js.map