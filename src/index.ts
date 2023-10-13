import axios from 'axios';
import queryString from 'query-string';
import { swapConfig, ISwapPrice, BuildRoutePayload, Route, RawRouteSummary } from "./constants";

export { ISwapPrice, BuildRoutePayload, Route, RawRouteSummary, swapConfig }

export const getRouteSummary = async (chain: string, params: ISwapPrice) => {
  // only support polygon and avalanche
  let _res: any;
  const url = `${swapConfig.KS_SWAP_ROUTE}${chain}/api/v1/routes?${queryString.stringify(params)}`;
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

export const postRouteBuild = async (chain: string, params: BuildRoutePayload) => {
  const url = `${swapConfig.KS_SWAP_ROUTE_BUILD}${chain}/api/v1/route/build`;
  const data = await axios.post(
    url,
    { ...params },
    {
      headers: { ['x-client-id']: 'dappos' },
    },
  );
  return data?.data;
};
