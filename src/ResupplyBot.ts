import { EventEmitter } from 'events';
import { telegramBotMain } from './telegram/TelegramBot.js';
import { getLogsForBlock, startListeningToAllEvents } from './web3/AllEvents.js';
import { allMarketsInfoPromise } from './resupply/LoadAllMarkets.js';
import { startListeningToAllContracts } from './resupply/plugging/Wrapper.js';
console.clear();

export const threshold_erc20_transfer = 100;

const ENV = 'prod';
// const ENV = 'test';

const eventEmitter = new EventEmitter();

// runs the app for a specific block, once.
async function histo() {
  const blockNumber = 22290472; //22034863 lunch, 22335666;22337728
  await telegramBotMain(ENV, eventEmitter);
  await startListeningToAllContracts(eventEmitter);
  await getLogsForBlock(blockNumber);
}
// await histo();

async function main() {
  await telegramBotMain(ENV, eventEmitter);
  startListeningToAllEvents();
  await startListeningToAllContracts(eventEmitter);
  const allMarketsInfo = await allMarketsInfoPromise;
  console.log('allMarketsInfo', allMarketsInfo);
}
await main();
