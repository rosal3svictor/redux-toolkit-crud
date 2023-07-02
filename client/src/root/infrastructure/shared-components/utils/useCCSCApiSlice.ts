import { LaunchConfig } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useLaunchConfigSelectors } from "../states";

/**
  @Description Central API Slice definition to perform CCSC Requests

  @Documentation
    ```markdown
    The following references serve as a guideline to understand how to:
      1. Define a set of endpoints, based on a central API Slice Definition.
      2. Describe how to retrieve data from a series of endpoints, including
         configuration of how to fetch and transform that data.
      3. Work with the "cache tag" system to automate re-fetching for query endpoints
    ```
    - Target: `Creation of an API slice definition.`
    - Reference: https://redux-toolkit.js.org/rtk-query/api/createApi

    - Target: `Setting default Headers On Requests.`
    - Reference: https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery

    - Target: `RTK Query Overview.`
    - Reference: https://redux-toolkit.js.org/rtk-query/overview

    - Target: `Cache Behavior.`
    - Reference: https://redux-toolkit.js.org/rtk-query/usage/cache-behavior

    - Target: `Automated Re-fetching.`
    - Reference: https://redux-toolkit.js.org/rtk-query/usage/automated-refetching
 */
export const useCCSCApiSlice = (entity: string) => {
  const CCSCApiClient = createApi({
    reducerPath: entity,
    baseQuery: fetchBaseQuery({
      baseUrl: useLaunchConfigSelectors().getCCSCUrl(),
      prepareHeaders: (headers: Headers, { getState }) => {
        const state = getState() as Record<"launchConfig", LaunchConfig>;
        headers.set("X-Auth-Token", state.launchConfig.ltiToken);
        return headers;
      },
    }),
    // For RTK Query, to control caching and invalidation behavior for re-fetching purposes.
    tagTypes: [entity],
    // Cache Behavior -> Re-fetching on window focus.
    refetchOnFocus: true,
    // Cache Behavior -> Re-fetching on network reconnection.
    refetchOnReconnect: true,
    endpoints: () => ({}),
  });

  return {
    CCSCApiClient,
    reducerPath: CCSCApiClient.reducerPath,
    reducer: CCSCApiClient.reducer,
    middleware: CCSCApiClient.middleware,
  };
};
