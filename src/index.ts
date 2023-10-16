import axios from 'axios';
import queryString from 'query-string';
import { swapConfig, ISwapPrice, BuildRoutePayload, Route, RawRouteSummary, ChainIds } from "./constants";

export { ISwapPrice, BuildRoutePayload, Route, RawRouteSummary, swapConfig }

export const getRouteSummary = async (chain: 1 | 10 | 43114 | 137 | 56, params: ISwapPrice) => {
  // only support polygon and avalanche ??
  let _res: any;
  const url = `${swapConfig.KS_SWAP_ROUTE}${ChainIds[chain]}/api/v1/routes?${queryString.stringify(params)}`;
  await axios
    .get(url, {
      headers: { ['x-client-id']: 'dappos' },
    })
    .then((res) => {
      _res = res?.data.data;
    })
    .catch((err) => {
      _res = err?.response?.data;
    });
  return _res;
};

export const postRouteBuild = async (chain: 1 | 10 | 43114 | 137 | 56, params: BuildRoutePayload) => {
  const url = `${swapConfig.KS_SWAP_ROUTE_BUILD}${ChainIds[chain]}/api/v1/route/build`;
  const data = await axios({
    url,
    method: 'post',
    data: params,
    // headers: { ['x-client-id']: 'dappos', 'Content-Type': 'application/json' },
  }
  );
  return data?.data;
};
