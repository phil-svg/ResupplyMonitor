import { address_sreUSD, getABI_sreUSD } from '../../../getters/resupply/sreUSD.js';
import { getMessage_erc20 } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_sreUSD(eventEmitter) {
    const solvedEvents = new Set(['Transfer', 'foo']);
    const blacklistedEvents = new Set(['Approval', 'bar']);
    // registerHandler(async (logs) => {
    //   const events = await fetchEventsRealTime(logs, address_sreUSD, getABI_sreUSD(), 'AllEvents');
    //   if (events.length > 0) {
    //     for (const event of events) {
    //       if (solvedEvents.has(event.event) || blacklistedEvents.has(event.event)) continue;
    //       const contractAddress = address_sreUSD;
    //       const eventName = event.event;
    //       const contractName = 'sreUSD';
    //       const txHash = event.transactionHash;
    //       const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
    //       eventEmitter.emit('newMessage', message);
    //     }
    //   }
    // });
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_sreUSD, getABI_sreUSD(), 'Transfer');
        if (events.length > 0) {
            events.forEach(async (event) => {
                const message = await getMessage_erc20(address_sreUSD, 'sreUSD', 18, event);
                eventEmitter.emit('newMessage', message);
            });
        }
    });
}
//# sourceMappingURL=sreUSD.js.map