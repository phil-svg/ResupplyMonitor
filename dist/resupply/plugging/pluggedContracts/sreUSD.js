import { address_sreUSD, getABI_sreUSD } from '../../../getters/resupply/sreUSD.js';
import { getMessage_sreUSD_Deposit, getMessage_sreUSD_Withdraw } from '../../../telegram/messages/contracts/sreUSD.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_sreUSD(eventEmitter) {
    const blacklistedEvents = new Set(['Approval', 'Transfer', , 'DistributeRewards', 'foobar']);
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_sreUSD, getABI_sreUSD(), 'AllEvents');
        if (events.length > 0) {
            const contractAddress = address_sreUSD;
            const contractName = 'sreUSD';
            const handlers = {
                Deposit: async (event) => {
                    const message = await getMessage_sreUSD_Deposit(event);
                    if (message)
                        eventEmitter.emit('newMessage', message);
                },
                Withdraw: async (event) => {
                    const message = await getMessage_sreUSD_Withdraw(event);
                    if (message)
                        eventEmitter.emit('newMessage', message);
                },
                Primitive: async (event) => {
                    const { event: eventName, transactionHash: txHash } = event;
                    const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
                    eventEmitter.emit('newMessage', message);
                },
            };
            for (const event of events) {
                const { event: eventName } = event;
                const handler = handlers[eventName];
                if (handler) {
                    await handler(event);
                }
                else if (!blacklistedEvents.has(eventName)) {
                    await handlers['Primitive'](event);
                }
            }
        }
    });
    // registerHandler(async (logs) => {
    //   const events = await fetchEventsRealTime(logs, address_sreUSD, getABI_sreUSD(), 'Transfer');
    //   if (events.length > 0) {
    //     events.forEach(async (event: any) => {
    //       const message = await getMessage_erc20(address_sreUSD, 'sreUSD', 18, event);
    //       eventEmitter.emit('newMessage', message);
    //     });
    //   }
    // });
}
//# sourceMappingURL=sreUSD.js.map