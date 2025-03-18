import { getContract_sFRAX } from '../getters/frax/sFRAX.js';
import { web3Call } from '../web3/Web3Basics.js';

/*
sfrxUSD_APR = sfrxUSDRate.apr; // used for finding reUSD Rate
sfrxUSD_APY = sfrxUSDRate.apy; // not used for reUSD Rate
*/
export async function getsfrxUSDRate(blockNumber: number): Promise<{ apr: string; apy: string } | null> {
  try {
    const contract_sFRAX = await getContract_sFRAX();

    const rewardsCycleLength = Number(await web3Call(contract_sFRAX, 'REWARDS_CYCLE_LENGTH', [], blockNumber));

    const BLOCKS_PER_YEAR = 31536000 / 12; // seconds per year / seconds per block
    const CYCLES_PER_YEAR = 31536000 / Number(rewardsCycleLength); // seconds per year / seconds per cycle

    const maxDistributionPerSecondPerAsset = Number(
      await web3Call(contract_sFRAX, 'maxDistributionPerSecondPerAsset', [], blockNumber)
    );

    const sfraxTotalAssets = await web3Call(contract_sFRAX, 'totalAssets', [], blockNumber);
    const maxRewardForCycle = (maxDistributionPerSecondPerAsset * rewardsCycleLength * sfraxTotalAssets) / 1e36;
    const sfraxStoredTotalAssets = await web3Call(contract_sFRAX, 'storedTotalAssets', [], blockNumber);
    const rewardsCycleData = await web3Call(contract_sFRAX, 'rewardsCycleData', [], blockNumber);
    const lastSfraxRewardAmount = rewardsCycleData.rewardCycleAmount;

    const sfraxRewardPerYear = Math.min(maxRewardForCycle, lastSfraxRewardAmount / 1e18) * CYCLES_PER_YEAR;
    const sfraxAprStored = sfraxRewardPerYear / (sfraxStoredTotalAssets / 1e18);

    const sfraxApr = sfraxRewardPerYear / (sfraxTotalAssets / 1e18);
    const sfraxApy = (1 + sfraxAprStored / BLOCKS_PER_YEAR) ** BLOCKS_PER_YEAR - 1;

    return {
      apr: `${(sfraxApr * 100).toFixed(4)}%`,
      apy: `${(sfraxApy * 100).toFixed(4)}%`,
    };
  } catch (err) {
    console.log('Error in getSfraxApr:', err);
    return null;
  }
}
