import { address_cvxPrisma, address_PRISMA, address_yPrisma } from '../../../getters/OtherToken.js';
import { address_EmissionsController } from '../../../getters/resupply/EmissionsController.js';
import { getContract_RSUP } from '../../../getters/resupply/RSUP.js';
import { address_SimpleRewardStreamer3 } from '../../../getters/resupply/SimpleRewardStreamer3.js';
import { address_VestManager } from '../../../getters/resupply/VestManager.js';
import { threshold_VestManager_AirdropClaimed, threshold_VestManager_Claimed, threshold_VestManager_TokenRedeemed, } from '../../../Thresholds.js';
import { web3Call } from '../../../web3/Web3Basics.js';
import { getUser, hyperlink_cvxPrisma, hyperlink_Prisma, hyperlink_RSUP, hyperlink_yPrisma } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint } from '../TelegramFormatting.js';
function prisma(address) {
    if (address.toLowerCase() === address_PRISMA.toLowerCase())
        return hyperlink_Prisma();
    if (address.toLowerCase() === address_yPrisma.toLowerCase())
        return hyperlink_yPrisma();
    if (address.toLowerCase() === address_cvxPrisma.toLowerCase())
        return hyperlink_cvxPrisma();
}
async function getRSUPCirculatingSupply(event) {
    try {
        const contract = getContract_RSUP();
        const totalSupply = await web3Call(contract, 'totalSupply', [], event.blockNumber);
        const balanceSimpleRewardStreamer = await web3Call(contract, 'balanceOf', [address_SimpleRewardStreamer3], event.blockNumber);
        const balanceVestManager = await web3Call(contract, 'balanceOf', [address_VestManager], event.blockNumber);
        const balanceEmissionsController = await web3Call(contract, 'balanceOf', [address_EmissionsController], event.blockNumber);
        const circulatingSupply = totalSupply - balanceSimpleRewardStreamer - balanceVestManager - balanceEmissionsController;
        return circulatingSupply / 1e18;
    }
    catch (_a) {
        return null;
    }
}
export async function getMessage_VestManager_Claimed(event) {
    if (event.returnValues.amount / 1e18 <= threshold_VestManager_Claimed)
        return null;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    const circulatingSupplyRSUP = await getRSUPCirculatingSupply(event);
    return `
🎉${await getUser(event.returnValues.account)} claimed ${formatForPrint(event.returnValues.amount / 1e18)}${hyperlink_RSUP()} from Vesting
Circulating Supply: ${formatForPrint(circulatingSupplyRSUP)}${hyperlink_RSUP()} 
${lastLine}  
  `;
}
export async function getMessage_VestManager_TokenRedeemed(event) {
    if (event.returnValues.amount <= threshold_VestManager_TokenRedeemed)
        return null;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    const circulatingSupplyRSUP = await getRSUPCirculatingSupply(event);
    return `
🔁${await getUser(event.returnValues.redeemer)} redeemed ${formatForPrint(event.returnValues.amount / 1e18)}${prisma(event.returnValues.token)} via Vesting
Circulating Supply: ${formatForPrint(circulatingSupplyRSUP)}${hyperlink_RSUP()}  
${lastLine}  
  `;
}
export async function getMessage_VestManager_VestCreated(event) {
    console.log(event);
    return null;
}
export async function getMessage_VestManager_AirdropClaimed(event) {
    var _a;
    if (event.returnValues.amount / 1e18 <= threshold_VestManager_AirdropClaimed)
        return null;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    const circulatingSupplyRSUP = await getRSUPCirculatingSupply(event);
    const allocationTypeMap = {
        '0': 'Perma Stake',
        '1': 'Licensing',
        '2': 'Treasury',
        '3': 'Redemptions',
        '4': 'Airdrop (Team)',
        '5': 'Airdrop (Victims)',
        '6': 'Airdrop (Lock Penalty)',
    };
    const allocationTypeName = (_a = allocationTypeMap[event.returnValues.allocationType]) !== null && _a !== void 0 ? _a : `Unknown Type (${event.returnValues.allocationType})`;
    return `
🎁${await getUser(event.returnValues.account)} claimed ${formatForPrint(event.returnValues.amount / 1e18)}${hyperlink_RSUP()} (vested) from ${allocationTypeName}
Circulating Supply: ${formatForPrint(circulatingSupplyRSUP)}${hyperlink_RSUP()}  
${lastLine}  
  `;
}
export async function getMessage_VestManager_ClaimSettingsSet(event) {
    const user = await getUser(event.returnValues.account);
    const recipient = await getUser(event.returnValues.recipient);
    const allowPermissionlessClaims = event.returnValues.allowPermissionlessClaims;
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
⚙️${user} updated their claim settings
Recipient:${recipient}
Permissionless Claims: ${allowPermissionlessClaims ? 'Enabled' : 'Disabled'}
${lastLine}  
  `;
}
//# sourceMappingURL=VestManager.js.map