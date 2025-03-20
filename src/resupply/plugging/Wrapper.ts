import { plugTo_AutoStakeCallback } from './pluggedContracts/AutoStakeCallback.js';
import { plugTo_EmissionsController } from './pluggedContracts/EmissionsController.js';
import { plugTo_FeeDeposit } from './pluggedContracts/FeeDeposit.js';
import { plugTo_GovStaker } from './pluggedContracts/GovStaker.js';
import { plugTo_InsurancePool } from './pluggedContracts/InsurancePool.js';
import { plugTo_LiquidationHandler } from './pluggedContracts/LiquidationHandler.js';
import { plugTo_RedemptionHandler } from './pluggedContracts/RedemptionHandler.js';
import { plugTo_ResupplyPair } from './pluggedContracts/ResupplyPair.js';
import { plugTo_ResupplyPairDeployer } from './pluggedContracts/ResupplyPairDeployer.js';
import { plugTo_ResupplyRegistry } from './pluggedContracts/ResupplyRegistry.js';
import { plugTo_reUSD } from './pluggedContracts/reUSD.js';
import { plugTo_RewardHandler } from './pluggedContracts/RewardHandler.js';
import { plugTo_RSUP } from './pluggedContracts/RSUP.js';
import { plugTo_Swapper } from './pluggedContracts/Swapper.js';
import { plugTo_Treasury } from './pluggedContracts/Treasury.js';
import { plugTo_VestManager } from './pluggedContracts/VestManager.js';
import { plugTo_Voter } from './pluggedContracts/Voter.js';

export async function startListeningToAllContracts(eventEmitter: any) {
  await plugTo_reUSD(eventEmitter);
  await plugTo_RSUP(eventEmitter);
  await plugTo_AutoStakeCallback(eventEmitter);
  await plugTo_EmissionsController(eventEmitter);
  await plugTo_FeeDeposit(eventEmitter);
  await plugTo_GovStaker(eventEmitter);
  await plugTo_InsurancePool(eventEmitter);
  await plugTo_LiquidationHandler(eventEmitter);
  await plugTo_RedemptionHandler(eventEmitter);
  await plugTo_ResupplyPair(eventEmitter);
  await plugTo_ResupplyPairDeployer(eventEmitter);
  await plugTo_ResupplyRegistry(eventEmitter);
  await plugTo_RewardHandler(eventEmitter);
  await plugTo_Swapper(eventEmitter);
  await plugTo_Treasury(eventEmitter);
  await plugTo_VestManager(eventEmitter);
  await plugTo_Voter(eventEmitter);
}
