import { address_InsurancePool, getABI_InsurancePool } from '../../../getters/resupply/InsurancePool.js';
import {
  getMessage_InsurancePool_Cooldown,
  getMessage_InsurancePool_Deposit,
  getMessage_InsurancePool_RewardPaid,
} from '../../../telegram/messages/contracts/InsurancePool.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';

export async function plugTo_InsurancePool(eventEmitter: any) {
  const contractAddress = address_InsurancePool;
  const contractName = 'InsurancePool';

  const blacklistedEvents = new Set(['Transfer', 'bar']);

  const handlers: Record<string, (event: any) => Promise<void>> = {
    Cooldown: async (event) => {
      const message = await getMessage_InsurancePool_Cooldown(event);
      if (message) eventEmitter.emit('newMessage', message);
    },
    Deposit: async (event) => {
      const message = await getMessage_InsurancePool_Deposit(event);
      if (message) eventEmitter.emit('newMessage', message);
    },
    RewardPaid: async (event) => {
      const message = await getMessage_InsurancePool_RewardPaid(event);
      if (message) eventEmitter.emit('newMessage', message);
    },
    Primitive: async (event) => {
      const { event: eventName, transactionHash: txHash } = event;
      const message = await getMessage_primitiveEvent(contractAddress, eventName, contractName, txHash);
      eventEmitter.emit('newMessage', message);
    },
  };

  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, contractAddress, getABI_InsurancePool(), 'AllEvents');

    for (const event of events) {
      const { event: eventName } = event;

      const handler = handlers[eventName];

      if (handler) {
        await handler(event);
      } else if (!blacklistedEvents.has(eventName)) {
        await handlers['Primitive'](event);
      }
    }
  });
}
