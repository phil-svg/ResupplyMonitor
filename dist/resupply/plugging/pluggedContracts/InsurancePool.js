import { address_InsurancePool, getABI_InsurancePool } from '../../../getters/resupply/InsurancePool.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_InsurancePool(eventEmitter) {
    const solvedEvents = new Set(['foo']);
    const blacklistedEvents = new Set(['Transfer', 'bar']);
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_InsurancePool, getABI_InsurancePool(), 'AllEvents');
        if (events.length > 0) {
            for (const event of events) {
                if (solvedEvents.has(event.event) || blacklistedEvents.has(event.event))
                    continue;
                const contractAddress = address_InsurancePool;
                const eventName = event.event;
                const contractName = 'InsurancePool';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            }
        }
    });
}
//# sourceMappingURL=InsurancePool.js.map