import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LaunchConfig,
  LTIAdvantagePayload,
  Configuration,
  ApplicationContext,
} from '@interfaces';
import { setupHandler } from './handlers';

const initialState: LaunchConfig = {
  learnToken: '',
  ltiToken: '',
  jwtPayload: {} as LTIAdvantagePayload,
  configuration: {} as Configuration,
  applicationContext: {} as ApplicationContext,
};

/**
 * It will handle the action type:
 *  - 'launchConfig/setup', to set the initial launch configuration for the app.
 */
export const launchConfigState = createSlice({
  name: 'launchConfig',
  initialState,
  reducers: {
    setup(state: LaunchConfig, action: PayloadAction<LaunchConfig>) {
      setupHandler(state, action.payload);
    },
  },
});

export const { setup } = launchConfigState.actions;

export const launchConfigStateReducer = launchConfigState.reducer;

export * from './selectors';
