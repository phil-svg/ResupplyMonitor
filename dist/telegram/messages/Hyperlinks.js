import { address_CRV, address_crvUSD, address_CVX, address_cvxPrisma, address_frxUSD, address_PRISMA, address_yPrisma, } from '../../getters/OtherToken.js';
import { address_GovStaker } from '../../getters/resupply/GovStaker.js';
import { address_InsurancePool } from '../../getters/resupply/InsurancePool.js';
import { address_reUSD } from '../../getters/resupply/reUSD.js';
import { address_RSUP } from '../../getters/resupply/RSUP.js';
import { getAddressURL, getTokenURL, hyperlink, shortenAddress } from './TelegramFormatting.js';
export async function getUser(userAddress) {
    const shortenAgent = await shortenAddress(userAddress);
    return `${hyperlink(getAddressURL(userAddress), shortenAgent)}`;
}
export function hyperlink_reUSD() {
    return `${hyperlink(getTokenURL(address_reUSD), 'reUSD')}`;
}
export function hyperlink_RSUP() {
    return `${hyperlink(getTokenURL(address_RSUP), 'RSUP')}`;
}
export function hyperlink_CVX() {
    return `${hyperlink(getTokenURL(address_CVX), 'CVX')}`;
}
export function hyperlink_CRV() {
    return `${hyperlink(getTokenURL(address_CRV), 'CRV')}`;
}
export function hyperlink_frxUSD() {
    return `${hyperlink(getTokenURL(address_frxUSD), 'frxUSD')}`;
}
export function hyperlink_crvUSD() {
    return `${hyperlink(getTokenURL(address_crvUSD), 'crvUSD')}`;
}
export function hyperlink_Prisma() {
    return `${hyperlink(getTokenURL(address_PRISMA), 'Prisma')}`;
}
export function hyperlink_yPrisma() {
    return `${hyperlink(getTokenURL(address_yPrisma), 'yPrisma')}`;
}
export function hyperlink_cvxPrisma() {
    return `${hyperlink(getTokenURL(address_cvxPrisma), 'cvxPrisma')}`;
}
export function hyperlink_InsurancePool() {
    return `${hyperlink(getTokenURL(address_InsurancePool), 'Resupply Insurance Pool')}`;
}
export function hyperlink_GovStaker() {
    return `${hyperlink(getTokenURL(address_GovStaker), 'GovStaker')}`;
}
export function hyperlink_ResupplyPair(address, name) {
    return `${hyperlink(getTokenURL(address), name)}`;
}
//# sourceMappingURL=Hyperlinks.js.map