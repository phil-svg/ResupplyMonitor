import { address_GovStaker, getABI_GovStaker } from '../../../getters/resupply/GovStaker.js';
import { getMessage_GovStaker_Staked } from '../../../telegram/messages/contracts/GovStaker.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_GovStaker(eventEmitter: any) {
  const blacklistedEvents = new Set(['foobar']);

  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_GovStaker, getABI_GovStaker(), 'AllEvents');
    if (events.length > 0) {
      const contractAddress = address_GovStaker;
      const contractName = 'GovStaker';

      const handlers: Record<string, (event: any) => Promise<void>> = {
        Staked: async (event) => {
          const message = await getMessage_GovStaker_Staked(event);
          if (message) eventEmitter.emit('newMessage', message);
        },
        foo: async (event) => {
          // handle foo
        },
        bar: async (event) => {
          // handle bar
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
