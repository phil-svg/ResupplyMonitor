import { address_FeeDeposit, getABI_FeeDeposit } from '../../../getters/resupply/FeeDeposit.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_FeeDeposit(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_FeeDeposit, getABI_FeeDeposit(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_FeeDeposit;
                const eventName = event.event;
                const contractName = 'FeeDeposit';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=FeeDeposit.js.map