import { address_LiquidationHandler, getABI_LiquidationHandler } from '../../../getters/resupply/LiquidationHandler.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/PrimitiveEventMessage.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_LiquidationHandler(eventEmitter: any) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(
      logs,
      address_LiquidationHandler,
      getABI_LiquidationHandler(),
      'AllEvents'
    );
    if (events.length > 0) {
      events.forEach(async (event: any) => {
        const contractAddress = address_LiquidationHandler;
        const eventName = event.event;
        const contractName = 'LiquidationHandler';
        const txHash = event.transactionHash;
        const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
