import { address_RSUP, getABI_RSUP } from '../../getters/resupply/RSUP.js';
import { getMessage_primitiveEvent } from '../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../web3/AllEvents.js';
// export async function plugTo_RSUP(eventEmitter: any) {
//   registerHandler(async (logs) => {
//     const events = await fetchEventsRealTime(logs, address_RSUP, getABI_RSUP(), 'Transfer');
//     if (events.length > 0) {
//       events.forEach((event: any) => {
//         const message = getMessage_erc20(address_RSUP, 'RSUP', 18, event);
//         eventEmitter.emit('newMessage', message);
//       });
//     }
//   });
// }
export async function plugTo_RSUP(eventEmitter) {
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_RSUP, getABI_RSUP(), 'AllEvents');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const contractAddress = address_RSUP;
                const eventName = event.event;
                const contractName = 'RSUP';
                const txHash = event.transactionHash;
                const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=RSUP.js.map