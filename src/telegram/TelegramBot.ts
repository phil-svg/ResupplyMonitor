import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { EventEmitter } from 'events';
import { ethers } from 'ethers';
dotenv.config({ path: '../.env' });

export function getTokenURL(tokenAddress: string): string {
  return 'https://etherscan.io/token/' + tokenAddress;
}

export function getBlockUrlEtherscan(blockNumber: number): string {
  return 'https://etherscan.io/block/' + blockNumber;
}

export function getBlockLinkEtherscan(blockNumber: number): string {
  const url = getBlockUrlEtherscan(blockNumber);
  const link = hyperlink(url, blockNumber.toString());
  return link;
}

export function getAddressURL(address: string) {
  return 'https://etherscan.io/address/' + address;
}

export function getTxHashURLfromEtherscan(txHash: string) {
  return 'https://etherscan.io/tx/' + txHash;
}

export function getTxHashURLfromEigenPhi(txHash: string) {
  return 'https://eigenphi.io/mev/eigentx/' + txHash;
}

export function formatForPrint(someNumber: any) {
  if (typeof someNumber === 'string' && someNumber.includes(',')) return someNumber;
  if (someNumber > 100) {
    someNumber = Number(Number(someNumber).toFixed(0)).toLocaleString();
  } else {
    someNumber = Number(Number(someNumber).toFixed(2)).toLocaleString();
  }
  return someNumber;
}

export function hyperlink(link: string, name: string): string {
  return "<a href='" + link + "/'> " + name + '</a>';
}

let sentMessages: Record<string, boolean> = {};
export function send(bot: any, message: string, groupID: number) {
  const key = `${groupID}:${message}`;

  if (sentMessages[key]) {
    // console.log("This message has already been sent to this group in the past 30 seconds.");
    return;
  }

  if (message.includes('undefined') || message.includes('NaN')) {
    console.log('Error: Invalid message content:', message);
    return;
  }

  bot.sendMessage(groupID, message, { parse_mode: 'HTML', disable_web_page_preview: 'true' });

  if (!message.startsWith('last seen')) {
    // Track the message as sent
    sentMessages[key] = true;

    // Delete the message from tracking after 30 seconds
    setTimeout(() => {
      delete sentMessages[key];
    }, 30000); // 30000 ms = 30 seconds
  }
}

function getLabels() {
  const labels: Record<string, string> = {
    '0x3451B6b219478037a1AC572706627FC2BDa1e812': '1Inch',
    '0xB28Ca7e465C452cE4252598e0Bc96Aeba553CF82': 'Odos Router',
    '0x9008D19f58AAbD9eD0D60971565AA8510560ab41': 'Cow Swap',
    '0x45312ea0eFf7E09C83CBE249fa1d7598c4C8cd4e': 'Curve Router v1.2',
  };
  return labels;
}

export async function resolveEnsName(address: string): Promise<string | null> {
  // Ensure you have a valid Ethereum RPC provider URL
  const provider = new ethers.JsonRpcProvider(process.env.WEB3_HTTP_MAINNET);

  try {
    // Validate the input address
    if (!ethers.isAddress(address)) {
      throw new Error('Invalid Ethereum address.');
    }

    // Resolve the ENS name for the given address
    const ensName = await provider.lookupAddress(address);

    // If no ENS name is associated with the address, return null
    if (!ensName) {
      return null;
    }

    // Verify reverse resolution (optional but recommended)
    const resolvedAddress = await provider.resolveName(ensName);
    if (resolvedAddress && resolvedAddress.toLowerCase() === address.toLowerCase()) {
      return ensName;
    }

    return null; // Reverse resolution failed
  } catch (error) {
    console.error(`Error resolving ENS name for address ${address}:`, error);
    return null;
  }
}

export async function shortenAddress(address: string): Promise<string> {
  const labels = getLabels();
  const addressLower = address.toLowerCase();

  const ensName = await resolveEnsName(address);

  for (const [labelAddress, label] of Object.entries(labels)) {
    if (labelAddress.toLowerCase() === addressLower) {
      return label;
    }
  }
  if (ensName) return ensName;
  return address.slice(0, 7) + '..' + address.slice(-2);
}

function getTimeMessage(timestamp: Date): string {
  if (!timestamp) return 'never seen'; // If no transaction was seen

  const differenceInSeconds = (new Date().getTime() - timestamp.getTime()) / 1000;

  if (differenceInSeconds < 60) {
    const seconds = Math.floor(differenceInSeconds);
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
  }
  if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  const hours = Math.floor(differenceInSeconds / 3600);
  return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
}

export async function telegramBotMain(env: string, eventEmitter: EventEmitter) {
  eventEmitter.on('newMessage', (message: string) => {
    if (groupID) {
      send(bot, message, parseInt(groupID));
    }
  });

  let telegramGroupToken: string | undefined;
  let groupID: string | undefined;

  if (env == 'prod') {
    telegramGroupToken = process.env.TELEGRAM_RESUPPLY_PROD_KEY!;
    groupID = process.env.TELEGRAM_PROD_GROUP_ID!;
  }
  if (env == 'test') {
    telegramGroupToken = process.env.TELEGRAM_RESUPPLY_TEST_KEY!;
    groupID = process.env.TELEGRAM_TEST_GROUP_ID!;
  }

  const bot = new TelegramBot(telegramGroupToken!, { polling: true });

  bot.on('message', async (msg: any) => {
    if (msg && msg.text && msg.text.toLowerCase() === 'bot u with us') {
      await new Promise((resolve) => setTimeout(resolve, 950));
      bot.sendMessage(msg.chat.id, 'with you');
    }
  });
}
