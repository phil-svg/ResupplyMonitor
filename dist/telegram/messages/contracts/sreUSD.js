import { address_sreUSD, getABI_sreUSD } from '../../../getters/resupply/sreUSD.js';
import { getContract_sreUSDUtility } from '../../../getters/resupply/sreUSDUtility.js';
import { threshold_sreUSD_Deposit, threshold_sreUSD_Withdraw } from '../../../Thresholds.js';
import { web3Call, web3HttpProvider } from '../../../web3/Web3Basics.js';
import { getUser, hyperlink_reUSD, hyperlink_sreUSD } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';
async function getApr_sreUSD(blockNumber) {
    const SECONDS_PER_YEAR = 365 * 24 * 60 * 60;
    const raw = await web3Call(getContract_sreUSDUtility(), 'sreusdRates', [], blockNumber);
    const ratePerSec = Number(Array.isArray(raw) ? raw[0] : raw) / 1e18;
    let apr = ratePerSec * SECONDS_PER_YEAR;
    if (!isFinite(apr) || apr < 0)
        apr = 0;
    return `${(apr * 100).toFixed(2)}%`;
}
async function getTotalAssets_sreUSD(event) {
    const contract = new web3HttpProvider.eth.Contract(getABI_sreUSD(), address_sreUSD);
    return await web3Call(contract, 'storedTotalAssets', [], event.blockNumber);
}
export async function getMessage_sreUSD_Deposit(event) {
    var _a, _b;
    if (Number(event.returnValues.assets) / 1e18 <= threshold_sreUSD_Deposit)
        return null;
    const totalAssets = await getTotalAssets_sreUSD(event);
    const apr = await getApr_sreUSD(event.blockNumber);
    const owner = await getUser(event.returnValues.owner);
    const caller = await getUser(event.returnValues.caller);
    const assets = Number(event.returnValues.assets) / 1e18;
    const callerNote = ((_a = event.returnValues.caller) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== ((_b = event.returnValues.owner) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ? ` (by ${caller})` : '';
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🚀${owner}${callerNote} deposited ${formatForPrint(assets)}${hyperlink_reUSD()} into${hyperlink_sreUSD()}
sreUSD Total Assets: ${formatForPrint(Number(totalAssets) / 1e18)}${hyperlink_reUSD()} | APR: ${apr}
${lastLine}  
  `;
}
export async function getMessage_sreUSD_Withdraw(event) {
    var _a, _b, _c, _d;
    if (Number(event.returnValues.assets) / 1e18 <= threshold_sreUSD_Withdraw)
        return null;
    const totalAssets = await getTotalAssets_sreUSD(event);
    const apr = await getApr_sreUSD(event.blockNumber);
    const owner = await getUser(event.returnValues.owner);
    const receiver = await getUser(event.returnValues.receiver);
    const caller = await getUser(event.returnValues.caller);
    const assets = Number(event.returnValues.assets) / 1e18;
    const callerNote = ((_a = event.returnValues.caller) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== ((_b = event.returnValues.owner) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ? ` (by ${caller})` : '';
    const receiverNote = ((_c = event.returnValues.receiver) === null || _c === void 0 ? void 0 : _c.toLowerCase()) !== ((_d = event.returnValues.owner) === null || _d === void 0 ? void 0 : _d.toLowerCase()) ? ` to ${receiver}` : '';
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
User${owner}${callerNote} withdrew ${formatForPrint(assets)}${hyperlink_reUSD()} from${hyperlink_sreUSD()}${receiverNote}
sreUSD Total Assets: ${formatForPrint(Number(totalAssets) / 1e18)}${hyperlink_reUSD()} | APR: ${apr}
${lastLine}  
  `;
}
//# sourceMappingURL=sreUSD.js.map