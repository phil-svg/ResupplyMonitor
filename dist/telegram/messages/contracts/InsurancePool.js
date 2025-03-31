import { address_InsurancePool, getABI_InsurancePool } from '../../../getters/resupply/InsurancePool.js';
import { web3Call, web3HttpProvider } from '../../../web3/Web3Basics.js';
import { getUser, hyperlink_InsurancePool, hyperlink_reUSD, hyperlink_RSUP } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';
async function getTotalAssets(event) {
    const contract = new web3HttpProvider.eth.Contract(getABI_InsurancePool(), address_InsurancePool);
    return await web3Call(contract, 'totalAssets', [], event.blockNumber);
}
export async function getMessage_InsurancePool_Cooldown(event) {
    const totalAssets = await getTotalAssets(event);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
⏳${await getUser(event.returnValues.account)} put ${formatForPrint(event.returnValues.amount / 1e18)}${hyperlink_reUSD()} into Cooldown in${hyperlink_InsurancePool()}
Insurance Pool Balance: ${formatForPrint(totalAssets / 1e18)}${hyperlink_reUSD()}
${lastLine}  
  `;
}
export async function getMessage_InsurancePool_Deposit(event) {
    const totalAssets = await getTotalAssets(event);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🚀${await getUser(event.returnValues.sender)} deposited ${formatForPrint(event.returnValues.assets / 1e18)}${hyperlink_reUSD()} into${hyperlink_InsurancePool()}
Insurance Pool Balance: ${formatForPrint(totalAssets / 1e18)}${hyperlink_reUSD()}
${lastLine}  
    `;
}
export async function getMessage_InsurancePool_RewardPaid(event) {
    const totalAssets = await getTotalAssets(event);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
User${await getUser(event.returnValues._user)} received ${formatForPrint(event.returnValues._rewardAmount / 1e18)}${hyperlink_RSUP()} from${hyperlink_InsurancePool()}
Insurance Pool Balance: ${formatForPrint(totalAssets / 1e18)}${hyperlink_reUSD()}
${lastLine}  
  `;
}
export async function getMessage_InsurancePool_ExitCancel(event) {
    const user = await getUser(event.returnValues.account);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
↩️${user} canceled their exit and stayed in${hyperlink_InsurancePool()}
${lastLine}  
  `;
}
export async function getMessage_InsurancePool_Withdraw(event) {
    const user = await getUser(event.returnValues.owner);
    const amount = Number(event.returnValues.assets) / 1e18;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
User${user} withdrew ${formatForPrint(amount)}${hyperlink_reUSD()} from${hyperlink_InsurancePool()}
${lastLine}  
  `;
}
//# sourceMappingURL=InsurancePool.js.map