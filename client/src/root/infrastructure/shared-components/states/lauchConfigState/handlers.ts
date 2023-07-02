import { LaunchConfig } from "../../interfaces";

export const setupHandler = (
  state: LaunchConfig,
  payload: LaunchConfig
): void => {
  state.learnToken = payload.learnToken;
  state.ltiToken = payload.ltiToken;
  state.jwtPayload = payload.jwtPayload;
  state.configuration = payload.configuration;
  state.applicationContext = payload.applicationContext;
};
