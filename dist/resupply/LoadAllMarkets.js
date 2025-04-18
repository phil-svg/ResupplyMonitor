import { getABI_ResupplyPair } from '../getters/resupply/ResupplyPair.js';
import { getContract_ResupplyRegistry } from '../getters/resupply/ResupplyRegistry.js';
import { web3Call, web3HttpProvider } from '../web3/Web3Basics.js';
export const allMarketsInfoPromise = loadMarkets();
/*
Returns all PairAddresses with their resupplyPairNames
*/
async function loadMarkets() {
    try {
        const registry = getContract_ResupplyRegistry();
        const allPairAddresses = await web3Call(registry, 'getAllPairAddresses', []);
        const batchSize = 10;
        const results = [];
        for (let i = 0; i < allPairAddresses.length; i += batchSize) {
            const batch = allPairAddresses.slice(i, i + batchSize);
            const batchResults = await Promise.all(batch.map(async (resupplyPairAddress) => {
                try {
                    const contract = new web3HttpProvider.eth.Contract(getABI_ResupplyPair(), resupplyPairAddress);
                    const resupplyPairName = await web3Call(contract, 'name', []);
                    const writeOffTokenAddress = await web3Call(contract, 'redemptionWriteOff', []);
                    const collateralAddress = await web3Call(contract, 'collateral', []);
                    return { resupplyPairAddress, resupplyPairName, writeOffTokenAddress, collateralAddress };
                }
                catch (_a) {
                    return null;
                }
            }));
            if (batchResults.includes(null))
                return null;
            results.push(...batchResults.filter((res) => res !== null));
        }
        return results;
    }
    catch (_a) {
        return null;
    }
}
export function extractPairName(fullName) {
    const match = fullName.match(/Resupply Pair \((.*?): (.*?)\)/);
    if (match && match[2]) {
        return match[2];
    }
    return fullName;
}
//# sourceMappingURL=LoadAllMarkets.js.map