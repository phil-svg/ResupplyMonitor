import { address_RSUP, getABI_RSUP } from '../../getters/resupply/RSUP.js';
import { getMessage_erc20 } from '../../telegram/messages/Erc20Transfer.js';
import { fetchEventsRealTime, registerHandler } from '../../web3/AllEvents.js';

export async function plugTo_RSUP(eventEmitter: any) {
  registerHandler(async (logs) => {
    const events = await fetchEventsRealTime(logs, address_RSUP, getABI_RSUP(), 'Transfer');
    if (events.length > 0) {
      events.forEach((event: any) => {
        const message = getMessage_erc20(address_RSUP, 'RSUP', 18, event);
        eventEmitter.emit('newMessage', message);
      });
    }
  });
}
