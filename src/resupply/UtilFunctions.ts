import { getContract_ResupplyPair } from '../getters/resupply/ResupplyPair.js';
import { web3Call, web3HttpProvider } from '../web3/Web3Basics.js';
import { allMarketsInfoPromise, extractPairName } from './LoadAllMarkets.js';

export async function getTotalFeesOngoingEpoch(): Promise<{
  totalBorrowFees: number;
  totalRedemptionFees: number;
  totalFees: number;
}> {
  let totalBorrowFees = 0;
  let totalRedemptionFees = 0;

  const allMarketsInfo = await allMarketsInfoPromise;
  const blockNumber = await web3HttpProvider.eth.getBlockNumber();

  if (!allMarketsInfo) return { totalBorrowFees, totalRedemptionFees, totalFees: 0 };

  for (const pair of allMarketsInfo) {
    try {
      const contract = getContract_ResupplyPair(pair.resupplyPairAddress);
      const claimableBorrowFees = (await web3Call(contract, 'claimableFees', [], blockNumber)) / 1e18;
      const claimableRedemptionFees = (await web3Call(contract, 'claimableOtherFees', [], blockNumber)) / 1e18;

      totalBorrowFees += claimableBorrowFees;
      totalRedemptionFees += claimableRedemptionFees;
    } catch (error) {
      console.error(`Error getting fees for ${extractPairName(pair.resupplyPairName)}:`, error);
    }
  }

  const totalFees = totalBorrowFees + totalRedemptionFees;

  return {
    totalBorrowFees,
    totalRedemptionFees,
    totalFees,
  };
}
