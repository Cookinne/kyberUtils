export const swapConfig = {
  KS_TOKEN_API: 'https://ks-setting.kyberswap.com/',
  KS_SWAP_ROUTE: 'https://aggregator-api.kyberswap.com/',
  KS_SWAP_ROUTE_BUILD: 'https://aggregator-api.kyberswap.com/'
}

export const ChainIds = {
  43114: 'avalanche',
  137: 'polygon',
  56: 'bsc',
  1: 'ethereum',
  10: 'optimism',
}

export type Route = {
  pool: string;

  tokenIn: string;
  swapAmount: string;

  tokenOut: string;
  amountOut: string;

  limitReturnAmount: string;
  exchange: string;
  poolLength: number;
  poolType: string;
  extra: string;
};

export enum ChargeFeeBy {
  CURRENCY_IN = 'currency_in',
  CURRENCY_OUT = 'currency_out',
  NONE = '',
}

export type RawRouteSummary = {
  tokenIn: string;
  amountIn: string;
  amountInUsd: string;

  tokenOut: string;
  amountOut: string;
  amountOutUsd: string;
  tokenOutMarketPriceAvailable: null;

  gas: string;
  gasUsd: string;
  gasPrice: string;

  extraFee: {
    feeAmount: string;
    chargeFeeBy: ChargeFeeBy;
    isInBps: boolean;
    feeReceiver: string;
    feeAmountUsd: string;
  };

  route: Route[][];
};

export type BuildRoutePayload = {
  routeSummary: RawRouteSummary;
  deadline: number;
  slippageTolerance: number;
  sender: string;
  recipient: string;
  source: 'kyberswap';
  skipSimulateTx: boolean;
  permit?: string;
};

export interface ISwapPrice {
  tokenIn: string;
  tokenOut: string;
  amountIn: string;
  saveGas: boolean;
  gasInclude: boolean;
}
