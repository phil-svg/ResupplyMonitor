import { getContract_FraxlendMarket } from '../../../frax/FraxlendMarket.js';
import { getContract_CurveLendingMarket } from '../../../getters/curve/LendingMarket.js';
import { getABI_ResupplyPair } from '../../../getters/resupply/ResupplyPair.js';
import { web3Call, web3HttpProvider } from '../../../web3/Web3Basics.js';
import { getUser, hyperlink_CRV, hyperlink_crvUSD, hyperlink_CVX, hyperlink_frxUSD, hyperlink_ResupplyPair, hyperlink_reUSD, hyperlink_RSUP, } from '../Hyperlinks.js';
import { getLastLine } from '../ResupplyGenericFormatting.js';
import { formatForPrint, getTokenURL, hyperlink } from '../TelegramFormatting.js';
import { extractPairName } from '../../../resupply/LoadAllMarkets.js';
function getCollateral(name) {
    if (name.includes('CurveLend')) {
        return hyperlink_crvUSD();
    }
    if (name.includes('Fraxlend')) {
        return hyperlink_frxUSD();
    }
}
function getRewardToken(tokenAddress) {
    if (tokenAddress.toLowerCase() === '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B'.toLowerCase()) {
        return `${hyperlink_CVX()}`;
    }
    if (tokenAddress.toLowerCase() === '0xD533a949740bb3306d119CC777fa900bA034cd52'.toLowerCase()) {
        return `${hyperlink_CRV()}`;
    }
    if (tokenAddress.toLowerCase() === '0x419905009e4656fdC02418C7Df35B1E61Ed5F726'.toLowerCase()) {
        return `${hyperlink_RSUP()}`;
    }
    return `${hyperlink(getTokenURL(tokenAddress), 'Token')}`;
}
async function getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress) {
    const contract = new web3HttpProvider.eth.Contract(getABI_ResupplyPair(), pairAddress);
    const currentRateInfo = await web3Call(contract, 'currentRateInfo', [], event.blockNumber);
    const borrowRateReUSD = (100 * (currentRateInfo.ratePerSec * 365 * 86400)) / 1e18;
    const pairAccounting = await web3Call(contract, 'getPairAccounting', [], event.blockNumber);
    const totalCollateralShares = pairAccounting._totalCollateral / 1e18;
    const totalBorrowAmount = pairAccounting._totalBorrowAmount / 1e18;
    const totalCollateral = await convertSharesToAmount(event, pairName, collateralAddress, totalCollateralShares);
    return `Total Borrowed ${formatForPrint(totalBorrowAmount)}${hyperlink_reUSD()} | Total Supplied ${formatForPrint(totalCollateral)}${getCollateral(pairName)} | Cost ${formatForPrint(borrowRateReUSD)}%`;
}
async function convertSharesToAmount(event, name, contractAddress, sharesAmount) {
    if (name.includes('CurveLend')) {
        const contract = getContract_CurveLendingMarket(contractAddress);
        const pricePerShare = await web3Call(contract, 'pricePerShare', [], event.blockNumber);
        return sharesAmount * (pricePerShare / 1e18);
    }
    if (name.includes('Fraxlend')) {
        const contract = getContract_FraxlendMarket(contractAddress);
        const pricePerShare = await web3Call(contract, 'pricePerShare', [], event.blockNumber);
        return sharesAmount * (pricePerShare / 1e18);
    }
}
export async function getMessage_ResupplyPair_RewardPaid(event, pairAddress, pairName) {
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🎁${await getUser(event.returnValues._user)} received ${formatForPrint(event.returnValues._rewardAmount / 1e18)}${getRewardToken(event.returnValues._rewardToken)} from${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lastLine}  
  `;
}
export async function getMessage_ResupplyPair_AddCollateral(event, pairAddress, pairName, collateralAddress) {
    const lineResupplyPairAggregatedInfo = await getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    const collateral = getCollateral(pairName);
    const collateralAmount = await convertSharesToAmount(event, pairName, collateralAddress, event.returnValues.collateralAmount / 1e18);
    return `
🏦${await getUser(event.returnValues.borrower)} added ${formatForPrint(collateralAmount)}${collateral} to${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lineResupplyPairAggregatedInfo}  
${lastLine}  
  `;
}
export async function getMessage_ResupplyPair_Borrow(event, pairAddress, pairName, collateralAddress) {
    const lineResupplyPairAggregatedInfo = await getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
💸${await getUser(event.returnValues._borrower)} borrowed ${formatForPrint(event.returnValues._borrowAmount / 1e18)}${hyperlink_reUSD()} from${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lineResupplyPairAggregatedInfo}  
${lastLine}  
  `;
}
export async function getMessage_ResupplyPair_LeveragedPosition(event, pairAddress, pairName) {
    return null;
}
export async function getMessage_ResupplyPair_RemoveCollateral(event, pairAddress, pairName, collateralAddress) {
    const collateral = getCollateral(pairName);
    const collateralAmount = await convertSharesToAmount(event, pairName, collateralAddress, event.returnValues._collateralAmount / 1e18);
    const lineResupplyPairAggregatedInfo = await getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🏚️${await getUser(event.returnValues._borrower)} removed ${formatForPrint(collateralAmount)}${collateral} from${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lineResupplyPairAggregatedInfo}  
${lastLine}  
  `;
}
export async function getMessage_ResupplyPair_Repay(event, pairAddress, pairName, collateralAddress) {
    const lineResupplyPairAggregatedInfo = await getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
💵${await getUser(event.returnValues.borrower)} repaid ${formatForPrint(event.returnValues.amountToRepay / 1e18)}${hyperlink_reUSD()} to${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lineResupplyPairAggregatedInfo}  
${lastLine}  
  `;
}
export async function getMessage_ResupplyPair_Redeemed(event, pairAddress, pairName, collateralAddress) {
    const collateral = getCollateral(pairName);
    const collateralAmount = await convertSharesToAmount(event, pairName, collateralAddress, event.returnValues._collateralFreed / 1e18);
    const lineResupplyPairAggregatedInfo = await getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🔓${await getUser(event.returnValues._caller)} redeemed ${formatForPrint(event.returnValues._amount / 1e18)}${hyperlink_reUSD()} and freed ${formatForPrint(collateralAmount)}${collateral}
Protocol Fee: ${formatForPrint(event.returnValues._protocolFee / 1e18)}${hyperlink_reUSD()} | Market:${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lineResupplyPairAggregatedInfo}  
${lastLine}  
  `;
}
export async function getMessage_ResupplyPair_Liquidate(event, pairAddress, pairName, collateralAddress) {
    const borrower = await getUser(event.returnValues._borrower);
    const repayAmount = Number(event.returnValues._amountLiquidatorToRepay) / 1e18;
    const collateralShares = Number(event.returnValues._collateralForLiquidator) / 1e18;
    const unlockedCollateral = await convertSharesToAmount(event, pairName, collateralAddress, collateralShares);
    const lineResupplyPairAggregatedInfo = await getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🧹 Position of${borrower} was liquidated
Liquidator repaid ${formatForPrint(repayAmount)}${hyperlink_reUSD()} and received ${formatForPrint(unlockedCollateral)}${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lineResupplyPairAggregatedInfo}  
${lastLine}  
  `;
}
export async function getMessage_ResupplyPair_RepayWithCollateral(event, pairAddress, pairName, collateralAddress) {
    const borrower = await getUser(event.returnValues._borrower);
    const collateral = getCollateral(pairName);
    const collateralShares = Number(event.returnValues._collateralToSwap) / 1e18;
    const repaidAmount = Number(event.returnValues._amountAssetOut) / 1e18;
    const unlockedCollateral = await convertSharesToAmount(event, pairName, collateralAddress, collateralShares);
    const lineResupplyPairAggregatedInfo = await getResupplyPairAggregatedInfo(event, pairAddress, pairName, collateralAddress);
    const lastLine = await getLastLine(event.transactionHash, event.blockNumber);
    return `
🔁${borrower} repaid ${formatForPrint(repaidAmount)}${hyperlink_reUSD()} by swapping ${formatForPrint(unlockedCollateral)}${collateral}
Market: ${hyperlink_ResupplyPair(pairAddress, extractPairName(pairName))}
${lineResupplyPairAggregatedInfo}  
${lastLine}  
  `;
}
//# sourceMappingURL=ResupplyPair.js.map