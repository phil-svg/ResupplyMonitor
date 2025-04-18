import {
  address_ResupplyPairDeployer,
  getABI_ResupplyPairDeployer,
} from '../../../getters/resupply/ResupplyPairDeployer.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_ResupplyPairDeployer(eventEmitter: any) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(
      logs,
      address_ResupplyPairDeployer,
      getABI_ResupplyPairDeployer(),
      'AllEvents'
    );
    if (events.length > 0) {
      events.forEach(async (event: any) => {
        const contractAddress = address_ResupplyPairDeployer;
        const eventName = event.event;
        const contractName = 'ResupplyPairDeployer';
        const txHash = event.transactionHash;
        const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
