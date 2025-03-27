import { address_reUSD_scrvUSD, getABI_reUSD_scrvUSD } from '../../../getters/curve/reUSD_scrvUSD.js';
import { getMessage_reUSD_scrvUSD_AddLiquidity, getMessage_reUSD_scrvUSD_RemoveLiquidity, getMessage_reUSD_scrvUSD_RemoveLiquidityOne, } from '../../../telegram/messages/contracts/reUSD_scrvUSD.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
export async function plugTo_reUSD_scrvUSD(eventEmitter) {
    const contractAddress = address_reUSD_scrvUSD;
    const blacklistedEvents = new Set(['Transfer', 'bar']);
    const handlers = {
        AddLiquidity: async (event) => {
            const message = await getMessage_reUSD_scrvUSD_AddLiquidity(event);
            if (message)
                eventEmitter.emit('newMessage', message);
        },
        RemoveLiquidity: async (event) => {
            const message = await getMessage_reUSD_scrvUSD_RemoveLiquidity(event);
            if (message)
                eventEmitter.emit('newMessage', message);
        },
        RemoveLiquidityOne: async (event) => {
            const message = await getMessage_reUSD_scrvUSD_RemoveLiquidityOne(event);
            if (message)
                eventEmitter.emit('newMessage', message);
        },
        Primitive: async (event) => {
            // const { event: eventName, transactionHash: txHash } = event;
            // const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
            // eventEmitter.emit('newMessage', message);
        },
    };
    registerHandler(async (logs) => {
        const events = await fetchEventsRealTime(logs, contractAddress, getABI_reUSD_scrvUSD(), 'AllEvents');
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
    });
}
//# sourceMappingURL=reUSD_scrvUSD.js.map