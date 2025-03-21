import { ethers } from 'ethers';

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

function getLabels() {
  const labels: Record<string, string> = {
    '0x3451B6b219478037a1AC572706627FC2BDa1e812': '1Inch',
    '0xB28Ca7e465C452cE4252598e0Bc96Aeba553CF82': 'Odos Router',
    '0x9008D19f58AAbD9eD0D60971565AA8510560ab41': 'Cow Swap',
    '0x45312ea0eFf7E09C83CBE249fa1d7598c4C8cd4e': 'Curve Router v1.2',
  };
  return labels;
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
  if (ensName) {
    return ensName.length > 20 ? ensName.slice(0, 18) + '...' : ensName;
  }
  return address.slice(0, 7) + '..' + address.slice(-2);
}

export async function shortenTxHash(address: string): Promise<string> {
  return address.slice(0, 7) + '..' + address.slice(-2);
}
