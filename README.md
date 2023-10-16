```javescript

declare const swapConfig: {
    KS_TOKEN_API: string;
    KS_SWAP_ROUTE: string;
    KS_SWAP_ROUTE_BUILD: string;
};
type Route = {
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
declare enum ChargeFeeBy {
    CURRENCY_IN = "currency_in",
    CURRENCY_OUT = "currency_out",
    NONE = ""
}
type RawRouteSummary = {
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
type BuildRoutePayload = {
    routeSummary: RawRouteSummary;
    deadline: number;
    slippageTolerance: number;
    sender: string;
    recipient: string;
    source: 'kyberswap';
    skipSimulateTx: boolean;
    permit?: string;
};
interface ISwapPrice {
    tokenIn: string;
    tokenOut: string;
    amountIn: string;
    saveGas: boolean;
    gasInclude: boolean;
}

declare const getRouteSummary: (chain: string, params: ISwapPrice) => Promise<any>;
declare const postRouteBuild: (chain: string, params: BuildRoutePayload) => Promise<any>;

export { type BuildRoutePayload, type ISwapPrice, type RawRouteSummary, type Route, getRouteSummary, postRouteBuild, swapConfig };

```

### getRouteSummary params

- eg:

```bash
    amountIn: 1000000
    gasInclude: true
    saveGas: false
    tokenIn: 0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359
    tokenOut: 0xc2132D05D31c914a87C6611C10748AEb04B58e8F
```

### getRouteSummary result

- eg:

```bash
"routeSummary": {
    "tokenIn": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    "amountIn": "1000000",
    "amountInUsd": "0",
    "tokenInMarketPriceAvailable": false,
    "tokenOut": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "amountOut": "999523",
    "amountOutUsd": "0.998970263781",
    "tokenOutMarketPriceAvailable": false,
    "gas": "290000",
    "gasPrice": "65191477521",
    "gasUsd": "0.009813235952093942",
    "extraFee": {
        "feeAmount": "0",
        "chargeFeeBy": "",
        "isInBps": false,
        "feeReceiver": ""
    },
    "route": [
        [
            {
                "pool": "0xc0aaf2992b04d3424768d7ba3f1f1979dc14ae46",
                "tokenIn": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
                "tokenOut": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
                "limitReturnAmount": "0",
                "swapAmount": "1000000",
                "amountOut": "999602",
                "exchange": "kyberswap-elastic",
                "poolLength": 2,
                "poolType": "elastic",
                "poolExtra": null,
                "extra": {}
            },
            {
                "pool": "0x38766867c0ee0bd530777f5f19b0d0d28d270ab8",
                "tokenIn": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
                "tokenOut": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
                "limitReturnAmount": "0",
                "swapAmount": "999602",
                "amountOut": "999523",
                "exchange": "kyberswap",
                "poolLength": 2,
                "poolType": "dmm",
                "poolExtra": null,
                "extra": null
            }
        ]
    ]
},
"routerAddress": "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"
```

### postRouteBuild params

- eg:

```bash
deadline: 1697425374
recipient: "0x69e58330fd71c0034de6cfa06a0552d52d8df766"
routeSummary: ...
sender: "0x6764e71d06f5947784b81718a834affaf548b5cb"
skipSimulateTx: false
slippageTolerance: 50
source: "kyberswap"
```

### postRouteBuild result

-eg:

```bash
{
    "amountIn": "1000000",
    "amountInUsd": "0",
    "amountOut": "999523",
    "amountOutUsd": "0.998970263781",
    "gas": "290000",
    "gasUsd": "0.009813235952093942",
    "outputChange": {
        "amount": "0",
        "percent": 0,
        "level": 0
    },
    "data": "xxx",
    "routerAddress": "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5"
},
```
