import { address_EmissionsController, getABI_EmissionsController, } from '../../../getters/resupply/EmissionsController.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_EmissionsController(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_EmissionsController, getABI_EmissionsController(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_EmissionsController;
                const eventName = event.event;
                const contractName = 'EmissionsController';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=EmissionsController.js.map