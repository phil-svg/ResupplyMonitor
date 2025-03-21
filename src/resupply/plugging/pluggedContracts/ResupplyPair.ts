import { getABI_ResupplyPair } from '../../../getters/resupply/ResupplyPair.js';
import {
  getMessage_ResupplyPair_RewardPaid,
  getMessage_ResupplyPair_AddCollateral,
  getMessage_ResupplyPair_Borrow,
  getMessage_ResupplyPair_LeveragedPosition,
  getMessage_ResupplyPair_RemoveCollateral,
  getMessage_ResupplyPair_Repay,
  getMessage_ResupplyPair_Redeemed,
} from '../../../telegram/messages/contracts/ResupplyPair.js';
import { getMessage_primitiveEvent } from '../../../telegram/messages/ResupplyGenericFormatting.js';
import { fetchEventsRealTime, registerHandler } from '../../../web3/AllEvents.js';
import { allMarketsInfoPromise } from '../../LoadAllMarkets.js';

export async function plugTo_ResupplyPair(eventEmitter: any) {
  const allMarketsInfo = await allMarketsInfoPromise;

  if (allMarketsInfo) {
    for (const pair of allMarketsInfo) {
      await handler(eventEmitter, pair.resupplyPairAddress, pair.resupplyPairName, pair.collateralAddress);
    }
  }
}

async function handler(eventEmitter: any, address: string, name: string, collateralAddress: string) {
  const blacklistedEvents = new Set([
    'LeveragedPosition',
    'RewardPaid',
    'UpdateExchangeRate',
    'UpdateRate',
    'AddInterest',
  ]);

  const handlers: Record<string, (event: any) => Promise<void>> = {
    // RewardPaid: async (event) => {
    //   const msg = await getMessage_ResupplyPair_RewardPaid(event, address, name);
    //   if (msg) eventEmitter.emit('newMessage', msg);
    // },
    AddCollateral: async (event) => {
      const msg = await getMessage_ResupplyPair_AddCollateral(event, address, name, collateralAddress);
      if (msg) eventEmitter.emit('newMessage', msg);
    },
    Borrow: async (event) => {
      const msg = await getMessage_ResupplyPair_Borrow(event, address, name, collateralAddress);
      if (msg) eventEmitter.emit('newMessage', msg);
    },
    // LeveragedPosition: async (event) => {
    //   const msg = await getMessage_ResupplyPair_LeveragedPosition(event, address, name);
    //   if (msg) eventEmitter.emit('newMessage', msg);
    // },
    RemoveCollateral: async (event) => {
      const msg = await getMessage_ResupplyPair_RemoveCollateral(event, address, name, collateralAddress);
      if (msg) eventEmitter.emit('newMessage', msg);
    },
    Repay: async (event) => {
      const msg = await getMessage_ResupplyPair_Repay(event, address, name, collateralAddress);
      if (msg) eventEmitter.emit('newMessage', msg);
    },
    Redeemed: async (event) => {
      const msg = await getMessage_ResupplyPair_Redeemed(event, address, name, collateralAddress);
      if (msg) eventEmitter.emit('newMessage', msg);
    },
    Primitive: async (event) => {
      const { event: eventName, transactionHash: txHash } = event;
      const msg = await getMessage_primitiveEvent(address, eventName, name, txHash);
      if (msg) eventEmitter.emit('newMessage', msg);
    },
  };

  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address, getABI_ResupplyPair(), 'AllEvents');

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
