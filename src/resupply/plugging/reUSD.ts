import { address_reUSD, getABI_reUSD } from '../../getters/resupply/reUSD.js';
import { getMessage_erc20 } from '../../telegram/messages/Erc20Transfer.js';
import { fetchEventsRealTime, registerHandler } from '../../web3/AllEvents.js';

export async function plugTo_reUSD(eventEmitter: any) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_reUSD, getABI_reUSD(), 'Transfer');
    if (events.length > 0) {
      events.forEach((event: any) => {
        const message = getMessage_erc20(address_reUSD, 'reUSD', 18, event);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
