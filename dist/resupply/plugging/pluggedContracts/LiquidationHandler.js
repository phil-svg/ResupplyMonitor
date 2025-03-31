import { address_LiquidationHandler, getABI_LiquidationHandler } from '../../../getters/resupply/LiquidationHandler.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_LiquidationHandler(eventEmitter) {
    const blacklistedEvents = new Set(['CollateralProccessed', 'SomeOtherEvent']);
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, address_LiquidationHandler, getABI_LiquidationHandler(), 'AllEvents');
        if (events.length > 0) {
            const contractAddress = address_LiquidationHandler;
            const contractName = 'LiquidationHandler';
            const handlers = {
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
}
//# sourceMappingURL=LiquidationHandler.js.map