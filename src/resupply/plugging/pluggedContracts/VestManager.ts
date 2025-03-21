import { address_VestManager, getABI_VestManager } from '../../../getters/resupply/VestManager.js';
import {
  getMessage_VestManager_Claimed,
  getMessage_VestManager_TokenRedeemed,
  getMessage_VestManager_VestCreated,
  getMessage_VestManager_AirdropClaimed,
} from '../../../telegram/messages/contracts/VestManager.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_VestManager(eventEmitter: any) {
  const blacklistedEvents = new Set(['VestCreated', 'foobar']);

  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_VestManager, getABI_VestManager(), 'AllEvents');
    if (events.length > 0) {
      const contractAddress = address_VestManager;
      const contractName = 'VestManager';

      const handlers: Record<string, (event: any) => Promise<void>> = {
        Claimed: async (event) => {
          const message = await getMessage_VestManager_Claimed(event);
          if (message) eventEmitter.emit('newMessage', message);
        },
        TokenRedeemed: async (event) => {
          const message = await getMessage_VestManager_TokenRedeemed(event);
          if (message) eventEmitter.emit('newMessage', message);
        },
        // VestCreated: async (event) => {
        //   const message = await getMessage_VestManager_VestCreated(event);
        //   if (message) eventEmitter.emit('newMessage', message);
        // },
        AirdropClaimed: async (event) => {
          const message = await getMessage_VestManager_AirdropClaimed(event);
          if (message) eventEmitter.emit('newMessage', message);
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
        } else if (!blacklistedEvents.has(eventName)) {
          await handlers['Primitive'](event);
        }
      }
    }
  });
}
