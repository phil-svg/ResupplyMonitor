import { address_RSUP, getABI_RSUP } from '../../../getters/resupply/RSUP.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_RSUP(eventEmitter) {
    const solvedEvents = new Set(['Transfer', 'foo']);
    const blacklistedEvents = new Set(['Approval', 'bar']);
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_RSUP, getABI_RSUP(), 'AllEvents');
        if (events.length > 0) {
            for (const event of events) {
                if (solvedEvents.has(event.event) || blacklistedEvents.has(event.event))
                    continue;
                const contractAddress = address_RSUP;
                const eventName = event.event;
                const contractName = 'RSUP';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            }
        }
    });
    // registerHandler(async (logs) => {
    //   const events = await fetchEventsRealTime(logs, address_RSUP, getABI_RSUP(), 'Transfer');
    //   if (events.length > 0) {
    //     events.forEach(async (event: any) => {
    //       const message = await getMessage_erc20(address_RSUP, 'RSUP', 18, event);
    //       eventEmitter.emit('newMessage', message);
    //     });
    //   }
    // });
}
//# sourceMappingURL=RSUP.js.map